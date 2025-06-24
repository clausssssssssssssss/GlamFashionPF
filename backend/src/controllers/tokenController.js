// backend/src/controllers/tokenController.js
import jwt from "jsonwebtoken";
import Purchase from "../models/Purchase.js";
import { config } from "../config.js";

export const createToken = async (req, res) => {
  try {
    const { userId, amount, currency } = req.body;
    if (!userId || !amount || !currency) {
      return res.status(400).json({ message: "Faltan datos para generar token" });
    }

    // 1) Generar referencia y token JWT
    const reference = `tx-${Date.now()}`;
    const payload = { userId, reference, amount, currency };
    const token = jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });

    // 2) Guardar en la colección purchases
    const purchase = new Purchase({ userId, reference, amount, currency });
    await purchase.save();

    // 3) Devolver token (y opcionalmente la purchase)
    return res.status(201).json({
      message: "Token creado y compra almacenada",
      token,
      purchase
    });
  } catch (err) {
    console.error("Error en createToken:", err);
    return res.status(500).json({ message: "Error interno al generar token" });
  }
};
