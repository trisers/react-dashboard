import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Update = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    product_name: "",
    product_category: "",
    product_code: "",
    price: "",
    quantity: "",
  });

  const savedToken = Cookies.get("accessToken");

  // Fetch the product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });
        setProduct(response.data);
        setFormData({
          product_name: response.data.product_name,
          product_category: response.data.product_category,
          product_code: response.data.product_code,
          price: response.data.price,
          quantity: response.data.quantity,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to fetch product details.");
      }
    };

    fetchProduct();
  }, [productId, savedToken]);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/product/${productId}`, formData, {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      });
      toast.success("Product updated successfully!");
      navigate("/ecommerce/products");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product.");
    }
  };

  return (
    <div className="mt-4 p-4">
      <ToastContainer />
      <h4>Update Product</h4>
      {product ? (
        <Card className="mt-4">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="productCategory" className="mt-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="product_category"
                  value={formData.product_category}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="productCode" className="mt-3">
                <Form.Label>Product Code</Form.Label>
                <Form.Control
                  type="text"
                  name="product_code"
                  value={formData.product_code}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="price" className="mt-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="quantity" className="mt-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Update Product
              </Button>
            </Form>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default Update;
