const Tour = require("../models/tourModel");
const User = require("../models/userModel");
const Booking = require("../models/bookingModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === "booking")
    res.locals.alert =
      "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render("overview", {
    title: "All Tour Management",
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review rating user",
  });

  if (!tour) {
    return next(new AppError("There is no tour with that name.", 404));
  }

  res.status(200).render("tour", {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getSingupForm = (req, res) => {
  res.status(200).render("signup", {
    title: "Create Your Account",
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log Into Your Account",
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render("account", {
    title: "Your Account",
  });
};

exports.forgotPassword = (req, res) => {
  res.status(200).render("forgotpassword", {
    title: "Forgot Password",
  });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });

  const tourIDs = bookings.map((booking) => booking.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  if (bookings.length === 0) {
    res.status(200).render("nullbooking", {
      title: "Book Tours",
      headLine: `You haven't booked any tours yet!`,
      msg: `Please book a tour and come back. 🙂`,
    });
  } else {
    res.status(200).render("overview", {
      title: "My Tours",
      tours,
    });
  }
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(200).render("account", {
    title: "Your Account",
    user: updatedUser,
  });
});

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    title: "About Page",
  });
};

exports.getGuidePage = (req, res) => {
  res.status(200).render("become-a-guide", {
    title: "Become-A-Guide",
  });
};

exports.resetPassword = (req, res) => {
  res.status(200).render("resetpassword", {
    title: "Reset Password",
    resetToken: req.params.resetToken,
  });
};
