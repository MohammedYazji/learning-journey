import express from "express";
import productRoutes from "./routes/product.route.js";
import path from "path";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // allows us to accept JSON in the body
app.use("/api/products", productRoutes); // to deal with routes and end points
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist"))); // from root dir access dist

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Started at http://localhost:${PORT}`);
});
