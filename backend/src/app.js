import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

// Middlewares personalizados
import { validateAuthToken } from "./middlewares/validateAuthToken.js";

// Rutas
import productsRoutes from "./routes/products.js";
import clientsRoutes from "./routes/clients.js";
import passwordRecoveryRoutes from "./routes/passwordRecovery.js";
import adminAuthRoutes from "./routes/adminAuth.js";
import suppliersRoutes from "./routes/suppliers.js";
import paymenthMethod from "./routes/payment.js";

// Inicializar app
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Permite peticiones sin origin (Postman, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`Origen no permitido por CORS: ${origin}`));
    },
    credentials: true,
  })
);

// Middlewares globales
app.use(express.json());
app.use(cookieParser());

// Rutas públicas
app.use("/api/clients", clientsRoutes);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);
app.use("/api/admins", adminAuthRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/payment", paymenthMethod);

export default app;
