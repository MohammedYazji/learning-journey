import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ succes: true, data: products });
  } catch (error) {
    console.log("error in fetching products: ", error.message);
    res.status(500).json({ succes: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ succes: false, message: "Please Provide all fields" });
  }
  const newProduct = await Product.create(product);

  try {
    await newProduct.save();
    res.status(201).json({ succes: true, data: newProduct });
  } catch (error) {
    console.log("Error in Create product: ", error.message);
    res.status(500).json({ succes: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid) {
    res.status(404).json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const newProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); // to display the new
    res.status(200).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Can not Updated The Product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("error in deleting product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
