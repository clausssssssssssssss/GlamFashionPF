import Customers from "../models/client.js";

export const getAllCustomers = async (req, res) => {
  const customers = await Customers.find();
  res.json(customers);
};

export const createCustomer = async (req, res) => {
  const newCustomer = new Customers(req.body);
  await newCustomer.save();
  res.status(201).json(newCustomer);
};
