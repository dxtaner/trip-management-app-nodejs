const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController.js');

const router = express.Router();

// Authentication routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Update password route (protected)
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

// Update and delete current user route (protected)
router.patch('/updateMe', authController.protect, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

// User routes
router
  .route('/')
  .get(userController.getAllUsers) // Get all users
  .post(userController.createUser); // Create a new user

router
  .route('/:id')
  .get(userController.getUser) // Get user by ID
  .patch(userController.updateUser) // Update user by ID
  .delete(userController.deleteUser); // Delete user by ID

module.exports = router;
