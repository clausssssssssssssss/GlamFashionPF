import Cart from "../models/carShopping.js";

export const getCustomerCart = async (req, res) => {
  const cart = await Cart.findOne({ customerId: req.params.id }).populate("products.productId");
  res.json(cart);
};

export const updateCart = async (req, res) => {
  const updated = await Cart.findOneAndUpdate(
    { customerId: req.params.id },
    { $set: req.body },
    { new: true, upsert: true }
  );
  res.json(updated);
};
