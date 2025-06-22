// src/models/products.js
import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true, minlength: 5 },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    image: { type: String, required: false },
   category: {
     type: String,
     required: true,
     enum: ["Vestidos", "Tops", "Shirts", "Skirts", "Pants"],
   },
  },
  { timestamps: true, strict: false }
);

export default model("Products", productsSchema);
