import PaymentMethod from "../models/paymentMethod.js";

export const getPaymentMethods = async (req, res) => {
  const methods = await PaymentMethod.find();
  res.json(methods);
};

export const createPaymentMethod = async (req, res) => {
  const newMethod = new PaymentMethod(req.body);
  await newMethod.save();
  res.status(201).json(newMethod);
};
