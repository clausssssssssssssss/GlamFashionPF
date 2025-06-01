import express from "express";
const router = express.Router();
//en modelo agregue eso de validar el token

import modelsController from "../controllers/modelsController.js";
import { validateAuthToken } from "../middlewares/validateAuthToken.js"

router.route("/")
  .get(validateAuthToken(), modelsController.getModels) // 
  .post(validateAuthToken(), modelsController.createModels); 
router.route("/:id")
  .get(validateAuthToken(), modelsController.getModel)
  .put(validateAuthToken(), modelsController.updateModels)
  .delete(validateAuthToken(), modelsController.deleteModels);

export default router;
