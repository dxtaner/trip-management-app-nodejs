const express = require("express");
const router = express.Router();
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");

router.use(viewsController.alerts);

router.get("/", authController.isLoggedIn, viewsController.getOverview);
router.get("/tour/:slug", authController.isLoggedIn, viewsController.getTour);
router.get("/signup", authController.isLoggedIn, viewsController.getSingupForm);
router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);
router.get("/me", authController.protect, viewsController.getAccount);
router.get("/about", authController.isLoggedIn, viewsController.getAboutPage);
router.get("/become-a-guide", authController.isLoggedIn, viewsController.getGuidePage);

router.get("/my-tours", authController.protect, viewsController.getMyTours);

router.post("/submit-user-data", authController.protect, viewsController.updateUserData);

module.exports = router;
