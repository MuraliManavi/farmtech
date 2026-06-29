import Order from "../models/Order.js";

export const getAdminStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const products = await Product.countDocuments();
    const orders = await Order.countDocuments();

    const revenueData = await Order.find({
      status: "Delivered",
    });

    const revenue = revenueData.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );

    res.json({
      users,
      products,
      orders,
      revenue,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};