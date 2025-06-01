import Suppliers from "../models/suppliers.js";

export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Suppliers.find();
    res.json(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno al obtener proveedores" });
  }
};

export const createSupplier = async (req, res) => {
  try {
    const newSupplier = new Suppliers(req.body);
    await newSupplier.save();
    res.status(201).json(newSupplier);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error al crear proveedor" });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const updated = await Suppliers.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Proveedor no encontrado" });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno al actualizar proveedor" });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const deleted = await Suppliers.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Proveedor no encontrado" });
    }
    res.json({ message: "Proveedor eliminado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno al eliminar proveedor" });
  }
};
