// backend/src/controllers/cartControllers.js
import CartShopping from "../models/carShopping.js";

//  Crear una nueva orden
export const createOrder = async (req, res) => {
  try {
    const { clientId, items, total } = req.body;

    if (!clientId || !Array.isArray(items) || items.length === 0 || total == null) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    const order = new CartShopping({
      client: clientId,
      items,
      total,
    });

    await order.save();
    return res.status(201).json(order);
  } catch (err) {
    console.error("Error creando orden:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

//  Obtener todas las órdenes (para el admin)
export const getOrders = async (req, res) => {
  try {
    const orders = await CartShopping.find()
      .populate("client", "name email")
      .populate("items.product", "name price");
    return res.json(orders);
  } catch (err) {
    console.error("Error al obtener órdenes:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
