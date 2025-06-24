// backend/src/routes/token.js
import { Router } from "express";
import { createToken } from "../controllers/tokenController.js";

const router = Router();

// POST /api/token  <-- este va a generar token *y* guardar la compra
router.post("/", createToken);

export default router;
