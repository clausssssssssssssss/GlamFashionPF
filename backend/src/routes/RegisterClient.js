import express from "express";
const router = express.Router();

import registerClientController from "../controllers/registerClientsController.js";

router.route("/").post(registerClientController.register);
router.post("/verifyCodeEmail", registerClientController.verifyCodeEmail);

export default router;
