import Product from "../models/Product.js";
import Order from "../models/Order.js";

export const getAnalytics = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const acceptedOrders =
      await Order.countDocuments({
        status: "Accepted",
      });

    const rejectedOrders =
      await Order.countDocuments({
        status: "Rejected",
      });

    const orders = await Order.find({
      status: "Accepted",
    });

    const revenue = orders.reduce(
      (sum, order) => sum + order.totalPrice,
      0
    );

    res.json({
      totalProducts,
      totalOrders,
      acceptedOrders,
      rejectedOrders,
      revenue,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};