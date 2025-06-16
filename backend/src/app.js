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

// Inicializar app
const app = express();

// Middlewares globales
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Rutas públicas
app.use("/api/clients", clientsRoutes);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);
app.use("/api/admins", adminAuthRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/suppliers", suppliersRoutes);

export default app;
