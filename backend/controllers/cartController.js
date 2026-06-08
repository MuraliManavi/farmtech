import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const existing = await Cart.findOne({
      buyer: req.body.buyer,
      product: req.body.product,
    });

    if (existing) {
      existing.quantity += req.body.quantity || 1;
      await existing.save();

      return res.json(existing);
    }

    const item = await Cart.create(req.body);

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find()
      .populate("product");

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};