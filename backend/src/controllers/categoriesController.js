import Categories from "../models/categories.js";

export const getAllCategories = async (req, res) => {
  const categories = await Categories.find();
  res.json(categories);
};

export const createCategory = async (req, res) => {
  const newCategory = new Categories(req.body);
  await newCategory.save();
  res.status(201).json(newCategory);
};
