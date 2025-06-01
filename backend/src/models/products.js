/*
  Campos:
    name
    desciption
    price
    stock
    image
    
 */

import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      match: [
        /^[^\s].+[^\s]$/, // Evita nombres que sean solo espacios
        "El nombre del producto no puede ser solo espacios",
      ],
    },
    description: {
      type: String,
      required: true,
      minlength: [5, "La descripción debe tener al menos 10 caracteres"],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Products", productsSchema);
