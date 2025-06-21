import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Habilitar CORS para permitir solicitudes desde React
app.use(
  cors({
    origin: "http://localhost:5173", // o "*" para permitir todo (solo en desarrollo)
  })
);

app.use(express.json());

app.post("/api/token", async (req, res) => {
  try {
    const response = await fetch("https://id.wompi.sv/connect/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: process.env.GRANT_TYPE,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        audience: process.env.AUDIENCE,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener token" });
  }
});

// Endpoint para procesar el pago de manera de prueba
app.post("/api/testPayment", async (req, res) => {
  try {
    const { token, formData } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Token de acceso requerido" });
    }
    if (!formData) {
      return res.status(400).json({ error: "Datos de pago requeridos" });
    }

    const paymentResponse = await fetch(
      "https://api.wompi.sv/TransaccionCompra/TokenizadaSin3Ds",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!paymentResponse.ok) {
      const error = await paymentResponse.text();
      return res.status(paymentResponse.status).json({ error });
    }

    const paymentData = await paymentResponse.json();
    res.json(paymentData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al procesar el pago" });
  }
});

//endpoint para el pago real con tarjeta 
// prueba siempre con datos 0.01 de dinero 

app.post("/api/payment3ds", async (req, res) => {
  try {
    const { token, formData  } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Token de acceso requerido" });
    }
    if (!formData ) {
      return res.status(400).json({ error: "Datos de pago requeridos" });
    }

    const response = await fetch("https://api.wompi.sv/TransaccionCompra/3Ds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al procesar el pago" });
  }
});



app.listen(3001, () => {
  console.log("Servidor backend corriendo en http://localhost:3001");
});
