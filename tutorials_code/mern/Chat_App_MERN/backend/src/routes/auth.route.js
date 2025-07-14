import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// user must be authenticated to update profile (logged in)
// so we add the protectRoute middleware to the route
router.put("/update-profile", protectRoute, updateProfile);

// check if user is authenticated so we can redirect it to the profile page or to the login page
router.get("/check", protectRoute, checkAuth);

export default router;
