import Products from "../models/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    return res.json(products);
  } catch (err) {
    console.error(" [GET /api/products] ERROR al obtener productos:", err);
    return res.status(500).json({ message: "Error interno al obtener productos" });
  }
};

export const getProductById = async (req, res) => {
   try {
    const product = await Products.findById(req.params.id);
    if (!product) 
      return res.status(404).json({ message: "Producto no encontrado" });
    return res.json(product);
  } catch (err) {
    console.error(" [GET /api/products/:id] ERROR al obtener producto:", err);
    return res.status(500).json({ message: "Error interno al obtener producto" });
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
