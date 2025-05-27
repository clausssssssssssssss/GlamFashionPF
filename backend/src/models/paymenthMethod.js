import { Schema, model } from "mongoose";

const paymentMethodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  type: {
    type: String,
    enum: ["Efectivo", "Tarjeta", "Transferencia", "Crédito"],
  },
}, { timestamps: true });

export default model("PaymentMethod", paymentMethodSchema);
