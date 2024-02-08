const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');

const router = express.Router();

// Route for getting the top 5 cheap tours
router.route('/top-5-cheap').get(
  tourController.aliasTopTours, // Middleware to alias top tours
  tourController.getAllTours // Handler to get all tours
);

// Route for getting tour statistics
router.route('/tour-stats').get(tourController.getTourStats);

// Route for getting monthly plan for a year
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

// Routes for CRUD operations on tours
router
  .route('/')
  .get(authController.protect, tourController.getAllTours) // Protected route to get all tours
  .post(tourController.createTour); // Route to create a new tour

router
  .route('/:id')
  .get(tourController.getTour) // Route to get a tour by ID
  .patch(tourController.updateTour) // Route to update a tour by ID
  .delete(
    authController.protect, // Protected route
    authController.restrictTo('admin', 'lead-guide'), // Restricted route based on user role
    tourController.deleteTour // Route to delete a tour by ID
  );

module.exports = router;
