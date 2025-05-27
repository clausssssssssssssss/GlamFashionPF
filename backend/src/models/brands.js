import { Schema, model } from "mongoose";

const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [/^[^\s].+[^\s]$/, "El nombre no puede tener solo espacios"],
  },
  description: String,
}, { timestamps: true });

export default model("Brands", brandSchema);
