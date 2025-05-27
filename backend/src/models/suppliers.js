import { Schema, model } from "mongoose";

const supplierSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contactName: String,
  phone: String,
  email: String,
  address: String
}, { timestamps: true });

export default model("Suppliers", supplierSchema);
