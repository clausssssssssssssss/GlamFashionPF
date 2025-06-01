import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    match: [/^[^\s].+[^\s]$/, "Nombre inválido"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Correo inválido"],
  },
  phone: {
    type: String,
    required: true,
  },
  password: String,
}, { timestamps: true });

export default model("Customers", customerSchema);
