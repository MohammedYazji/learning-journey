const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

// use isLoggedIn Middleware which is similar a little bit to protect to decide how to render pages based on logged in or not
// so this will apply all routes after this

router.use(authController.isLoggedIn);

router.get('/', viewController.getOverview);
router.get('/tour/:slug', viewController.getTour);
router.get('/login', viewController.getLoginForm);

module.exports = router;
