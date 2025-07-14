import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// we use protectRoute to sure that user has the auth to make the next function
export const protectRoute = async (req, res, next) => {
  try {
    // get the token from the request as we named it "jwt"
    const token = req.cookies.jwt;

    // if token is not valid
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    // make decoded to extract the userId from the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    // find the user by the userId and exclude the password field
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // and attach the user to the request object
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(401).json({ message: "Internal server error" });
  }
};
