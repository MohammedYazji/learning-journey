import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true } // createdAT, updatedAt
);

const Product = new mongoose.model("Product", productSchema); //Product => products

export default Product;
