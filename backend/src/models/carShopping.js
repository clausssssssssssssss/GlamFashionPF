import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "Customers", required: true },
  products: [{
    productId: { type: Schema.Types.ObjectId, ref: "Products" },
    quantity: { type: Number, default: 1 }
  }],
  total: Number,
  status: { type: String, default: "Pendiente" }
}, { timestamps: true });

export default model("Cart", cartSchema);
