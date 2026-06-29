import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  console.log("Login route hit");
  console.log(req.body);

  res.json({
    success: true,
    token: "demo-token",
    user: {
      _id: "1",
      name: "Murali",
      email: "muralivaraprasad8@gmail.com",
    },
  });
});

export default router;