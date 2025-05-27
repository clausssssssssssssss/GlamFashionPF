import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

// Rutas (desde carpeta src/routes)
import productsRoutes from "./src/routes/products.js";
import clientsRoutes from "./src/routes/clients.js";
import categoriesRoutes from "./src/routes/categories.js";
import employeesRoutes from "./src/routes/employees.js";
import loginRoutes from "./src/routes/login.js";
import registerClientRoutes from "./src/routes/RegisterClient.js";
import registerEmployeesRoutes from "./src/routes/RegisterEmployee.js";
import logoutRoutes from "./src/routes/logout.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";

// Inicializar la app
const app = express();

// Middleware CORS
app.use(
  cors({
    origin: "http://localhost:3000", // frontend React
    credentials: true,
  })
);

// Middleware JSON y cookies
app.use(express.json());
app.use(cookieParser());

// Rutas activas de la API
app.use("/api/products", productsRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/registerClients", registerClientRoutes);
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);

// Exportar instancia
export default app;
