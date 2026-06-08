import User from "../models/Users.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

export const getAdminStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const products = await Product.countDocuments();
    const orders = await Order.countDocuments();

    res.json({
      users,
      products,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};