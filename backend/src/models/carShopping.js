// backend/src/models/carShopping.js
import { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 }, // precio unitario al momento de la compra
      },
    ],
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export default model("CartShopping", cartSchema);
