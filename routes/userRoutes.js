// Importing required modules
const express = require("express");
const userController = require("./../controllers/userController.js");

// Creating a router instance
const router = express.Router();

// Routes handling CRUD operations for users
router
  .route("/")
  .get(userController.getAllUsers) // Route for getting all users
  .post(userController.createUser); // Route for creating a new user

router
  .route("/:id")
  .get(userController.getUser) // Route for getting a specific user
  .patch(userController.updateUser) // Route for updating a specific user
  .delete(userController.deleteUser); // Route for deleting a specific user

// Exporting the router module
module.exports = router;
