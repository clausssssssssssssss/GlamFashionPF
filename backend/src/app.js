import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

import { validateAuthToken } from "./middlewares/validateAuthToken.js";


// Rutas (desde carpeta src/routes)
import productsRoutes from "./routes/products.js";
import clientsRoutes from "./routes/clients.js";
import categoriesRoutes from "./routes/categories.js";
import employeesRoutes from "./routes/employees.js";
import loginRoutes from "./routes/login.js";
import registerClientsRoutes from "./routes/RegisterClient.js";
import registerEmployeesRoutes from "./routes/RegisterEmployee.js";
import logoutRoutes from "./routes/logout.js";
import passwordRecoveryRoutes from "./routes/passwordRecovery.js";
import adminAuthRoutes from "./routes/adminAuth.js";
import modelsRoutes from "./routes/models.js"; //
import suppliersRoutes from "./routes/suppliers.js"; // tu archivo de rutas



// Inicializar la app
const app = express();

// Middleware CORS
app.use(
  cors({
    origin: "http://localhost:5173", // frontend React
    credentials: true,
  })
);

// Middleware JSON y cookies
app.use(express.json());
app.use(cookieParser());

app.use("/api/admins", adminAuthRoutes);


// Rutas activas de la API
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/customers", clientsRoutes)
app.use("/api/logout", logoutRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/registerClients", registerClientsRoutes);
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/models", validateAuthToken(), modelsRoutes);


// Exportar instancia
export default app;
