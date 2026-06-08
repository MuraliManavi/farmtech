import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    setProduct(data);
  };

  const addToCart = async () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    await axios.post(
      "http://localhost:5000/api/cart",
      {
        buyer: user._id,
        product: product._id,
        quantity: 1,
      }
    );

    alert("Added To Cart");
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.image}
        alt={product.name}
        width="400"
      />

      <h1>{product.name}</h1>

      <h3>₹{product.price}</h3>

      <p>{product.description}</p>

      <button onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;