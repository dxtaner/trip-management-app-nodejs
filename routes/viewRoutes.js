const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/viewsController.js');
const authController = require('../controllers/authController');

// Middleware
const { isLoggedIn, protect } = authController;

// Routes
router.get('/', isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', isLoggedIn, viewsController.getTour);
router.get('/login', isLoggedIn, viewsController.getLoginForm);
router.get('/me', protect, viewsController.getAccount);
router.post('/submit-user-data', protect, viewsController.updateUserData);

module.exports = router;
