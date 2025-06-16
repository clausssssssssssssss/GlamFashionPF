import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Client from "../models/client.js";
import { config } from "../config.js";
import { sendEmail } from "../utils/passwordRecoveryMail.js";

// REGISTRO DE CLIENTE
export const registerClient = async (req, res) => {
  try {
    const { name, lastName, birthday, email, password, address } = req.body;

    // Validación de campos
    if (!name || !lastName || !birthday || !email || !password || !address) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    // Verificar si ya existe
    const exists = await Client.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "Email ya registrado" });
    }

    // Hashear password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear cliente
    const newClient = new Client({
      name,
      lastName,
      birthday,
      email,
      password: hashedPassword,
      address,
    });

    await newClient.save();

    // Generar token JWT
    const payload = { userId: newClient._id, userType: "client" };
    const token = jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });

    // Enviar correo de bienvenida
    await sendEmail(
      email,
      "Bienvenida a GlamFashion 👗",
      `Gracias por registrarte, ${name}!`,
      `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1>¡Hola ${name}!</h1>
          <p>Gracias por unirte a <strong>GlamFashion</strong>.</p>
          <p>Tu cuenta ha sido registrada exitosamente. ¡Te damos la bienvenida a nuestra comunidad!</p>
          <hr/>
          <p>Si no hiciste este registro, por favor ignora este mensaje.</p>
        </div>
      `
    );

    res.status(201).json({
      message: "Cliente registrado correctamente",
      token,
      user: {
        id: newClient._id,
        name: newClient.name,
        email: newClient.email,
      },
    });
  } catch (error) {
    console.error("Error en registerClient:", error);
    res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

// OBTENER TODOS LOS CLIENTES
export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    res.status(500).json({ message: "Error al obtener clientes" });
  }
};

// OBTENER CLIENTE POR ID
export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(client);
  } catch (error) {
    console.error("Error al obtener cliente:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

