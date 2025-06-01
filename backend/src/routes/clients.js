import { Router } from "express";
import {
  getAllCustomers,
  createCustomer
} from "../controllers/clientsController.js";

const router = Router();

router.get("/", getAllCustomers);
router.post("/", createCustomer);

export default router;
