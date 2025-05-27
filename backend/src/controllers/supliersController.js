import Suppliers from "../models/suppliers.js";

export const getAllSuppliers = async (req, res) => {
  const suppliers = await Suppliers.find();
  res.json(suppliers);
};

export const createSupplier = async (req, res) => {
  const newSupplier = new Suppliers(req.body);
  await newSupplier.save();
  res.status(201).json(newSupplier);
};
