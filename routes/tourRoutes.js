// Importing required modules
const express = require('express');
const tourController = require('./../controllers/tourController.js');

// Creating a router instance
const router = express.Router();

router.get(
  '/top-5-cheap',
  tourController.aliasTopTours,
  tourController.getAllTours
);
router.get('/tour-stats', tourController.getTourStats);
router.get('/monthly-plan/:year', tourController.getMonthlyPlan);

// Routes handling CRUD operations for tours
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

// Exporting the router module
module.exports = router;
