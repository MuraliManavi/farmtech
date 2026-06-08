import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  try {
    console.log("FILE =", req.file);

    const result = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "farmtech",
      }
    );

    console.log(result);

    res.json({
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.log("UPLOAD ERROR:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};