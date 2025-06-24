// backend/src/models/Purchase.js
import { Schema, model } from "mongoose";

const purchaseSchema = new Schema({
  userId: { type: String, required: true },        // <— pasamos a String
  reference: { type: String, required: true },
  amount:    { type: Number, required: true },    // en centavos
  currency:  { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model("Purchase", purchaseSchema);
