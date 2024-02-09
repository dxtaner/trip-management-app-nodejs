const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review cannot be empty!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexing to ensure unique review for a user and a tour
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

// Populate the user field in the review
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

// Calculate average ratings for a tour
reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    { $match: { tour: tourId } },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);

  const [stat] = stats;
  const { nRating, avgRating } = stat || { nRating: 0, avgRating: 4.5 };

  await Tour.findByIdAndUpdate(tourId, {
    ratingsQuantity: nRating,
    ratingsAverage: avgRating,
  });
};

// Calculate average ratings after saving a review
reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.tour);
});

// Pre hook for findOneAndUpdate and findOneAndDelete operations
reviewSchema.pre(/^findOneAnd/, async function (next) {
  // Save the document before it's updated or deleted
  this.r = await this.findOne();
  next();
});

// Post hook for findOneAndUpdate and findOneAndDelete operations
reviewSchema.post(/^findOneAnd/, async function () {
  // Access the document from the pre hook and calculate average ratings
  await this.r.constructor.calcAverageRatings(this.r.tour);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
