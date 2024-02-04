// Importing required modules
const express = require('express');
const tourController = require('./../controllers/tourController.js');

// Creating a router instance
const router = express.Router();

// Route parameter middleware to check if the ID is valid
router.param('id', tourController.checkID);

// Routes handling CRUD operations for tours
router
  .route('/')
  .get(tourController.getAllTours) // Route for getting all tours
  .post(tourController.checkBody, tourController.createTour); // Route for creating a new tour

router
  .route('/:id')
  .get(tourController.getTour) // Route for getting a specific tour
  .patch(tourController.updateTour) // Route for updating a specific tour
  .delete(tourController.deleteTour); // Route for deleting a specific tour

// Exporting the router module
module.exports = router;
