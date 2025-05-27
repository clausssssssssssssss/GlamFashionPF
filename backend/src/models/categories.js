import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [/^[^\s].+[^\s]$/, "El nombre no puede tener solo espacios"],
  },
  description: {
    type: String,
    required: true,
    minlength: [5, "La descripción debe tener al menos 5 caracteres"],
  }
}, { timestamps: true });

export default model("Categories", categorySchema);
