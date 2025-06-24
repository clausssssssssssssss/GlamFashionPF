// backend/src/routes/cart.js
import { Router } from "express";
import { createOrder, getOrders } from "../controllers/cartControllers.js";

const router = Router();

// POST /api/cart      → crear nueva orden
router.post("/", createOrder);

// GET  /api/cart      → listar todas las órdenes
router.get("/", getOrders);

export default router;
