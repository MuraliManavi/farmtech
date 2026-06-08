import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadHandler = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProduct((prev) => ({
        ...prev,
        image: data.imageUrl,
      }));

      alert("Image Uploaded Successfully");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "Upload Failed"
      );
    } finally {
      setUploading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/products/${editingId}`,
          product
        );

        alert("Product Updated");
        setEditingId(null);
      } else {
        await axios.post(
          "http://localhost:5000/api/products",
          {
            ...product,
            farmer: user._id,
          }
        );

        alert("Product Added Successfully");
      }

      setProduct({
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
        image: "",
      });

      fetchProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message
      );
    }
  };

  const editProduct = (item) => {
    setEditingId(item._id);

    setProduct({
      name: item.name,
      category: item.category,
      price: item.price,
      quantity: item.quantity,
      description: item.description,
      image: item.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      alert("Product Deleted");

      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Please Login First</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <h1>🌾 Farmer Dashboard</h1>

      <h3>Welcome {user.name}</h3>

      <button onClick={logoutHandler}>
        Logout
      </button>

      <hr />

      <h2>
        {editingId
          ? "✏️ Edit Product"
          : "➕ Add Product"}
      </h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) =>
            setProduct({
              ...product,
              name: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) =>
            setProduct({
              ...product,
              category: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Quantity"
          value={product.quantity}
          onChange={(e) =>
            setProduct({
              ...product,
              quantity: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="file"
          accept="image/*"
          onChange={uploadHandler}
        />

        <br />
        <br />

        {uploading && (
          <p>Uploading image...</p>
        )}

        {product.image && (
          <img
            src={product.image}
            alt="Preview"
            style={{
              width: "250px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />
        )}

        <br />
        <br />

        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({
              ...product,
              description: e.target.value,
            })
          }
        />

        <br />
        <br />

        <button type="submit">
          {editingId
            ? "Update Product"
            : "Add Product"}
        </button>
      </form>

      <hr />

      <h2>
        📦 My Products ({products.length})
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={
                item.image ||
                "https://via.placeholder.com/300"
              }
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h3>{item.name}</h3>

            <p>
              <strong>Category:</strong>{" "}
              {item.category}
            </p>

            <p>
              <strong>Price:</strong> ₹
              {item.price}
            </p>

            <p>
              <strong>Quantity:</strong>{" "}
              {item.quantity}
            </p>

            <p>
              <strong>Description:</strong>{" "}
              {item.description ||
                "No Description"}
            </p>

            <button
              onClick={() =>
                editProduct(item)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteProduct(item._id)
              }
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;