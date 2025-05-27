import { Schema, model } from "mongoose";

const buySchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "Customers", required: true },
  cartId: { type: Schema.Types.ObjectId, ref: "Cart" },
  paymentMethodId: { type: Schema.Types.ObjectId, ref: "PaymentMethod" },
  totalAmount: Number,
  deliveryPoint: String,
  status: { type: String, default: "Procesado" }
}, { timestamps: true });

export default model("Buys", buySchema);
