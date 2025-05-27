import Buys from "../models/buys.js";

export const getAllBuys = async (req, res) => {
  const orders = await Buys.find()
    .populate("customerId")
    .populate("paymentMethodId")
    .populate("cartId");
  res.json(orders);
};

export const createBuy = async (req, res) => {
  const newBuy = new Buys(req.body);
  await newBuy.save();
  res.status(201).json(newBuy);
};
