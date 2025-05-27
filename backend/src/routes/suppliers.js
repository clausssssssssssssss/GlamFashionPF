import { Router } from "express";
import {
  getAllSuppliers,
  createSupplier
} from "../controllers/suppliersController.js";

const router = Router();

router.get("/", getAllSuppliers);
router.post("/", createSupplier);

export default router;
