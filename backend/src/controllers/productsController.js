import Products from "../models/products.js";

export const getAllProducts = async (req, res) => {
  const products = await Products.find().populate("idCategory");
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Products.findById(req.params.id).populate("idCategory");
  if (!product) return res.status(404).json({ message: "Producto no encontrado" });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const newProduct = new Products(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const updated = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  await Products.findByIdAndDelete(req.params.id);
  res.json({ message: "Producto eliminado" });
};
