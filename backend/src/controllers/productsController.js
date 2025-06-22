import Products from "../models/products.js";
import mongoose from "mongoose";

export const getProductById = async (req, res) => {
  const { id } = req.params;

  // 1) Validar que sea un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID de producto inválido" });
  }

  try {
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.json(product);
  } catch (err) {
    console.error(" [GET /api/products/:id] ERROR al obtener producto:", err);
    return res.status(500).json({ message: "Error interno al obtener producto" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    const products = await Products.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
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
