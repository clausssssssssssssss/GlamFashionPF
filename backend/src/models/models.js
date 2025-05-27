import { Schema, model } from "mongoose";

const productModelSchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [/^[^\s].+[^\s]$/, "El nombre no puede tener solo espacios"],
  },
  description: String,
  idBrand: {
    type: Schema.Types.ObjectId,
    ref: "Brands",
    required: true
  }
}, { timestamps: true });

export default model("ProductModels", productModelSchema);
