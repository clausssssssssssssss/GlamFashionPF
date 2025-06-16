import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Client from "../models/client.js";
import { config } from "../config.js";

export const loginClient = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1) Validar
    if (!email || !password) {
      return res.status(400).json({ message: "Email y contraseña son obligatorios" });
    }
    // 2) Buscar cliente
    const client = await Client.findOne({ email });
    if (!client) {
      return res.status(401).json({ message: "Email no registrado" });
    }
    // 3) Comparar contraseña
    const valid = await bcrypt.compare(password, client.password);
    if (!valid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    // 4) Generar JWT
    const payload = { userId: client._id, userType: "client" };
    const token = jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });
    // 5) Responder con token + datos mínimos
    return res.status(200).json({
      message: "Login exitoso",
      token,
      user: {
        id: client._id,
        name: client.name,
        email: client.email,
      },
    });
  } catch (error) {
    console.error("Error en loginClient:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
