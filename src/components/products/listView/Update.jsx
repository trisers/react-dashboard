import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "./ListView.css";
import { BsCheck, BsUpload } from "react-icons/bs";
import { ColorContext } from "../../context/ColorContext";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import UpdatePreview from "./UpdatePreview";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Update = () => {
  const savedToken = Cookies.get("accessToken");
  const { slug } = useParams();
  const navigate = useNavigate();
  const { availableColors, toggleColor } = useContext(ColorContext);

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [customColors, setCustomColors] = useState([]);
  const [colorTemp, setColorTemp] = useState("#ffffff");
  const [productType, setProductType] = useState([]);
  const [gender, setGender] = useState([]);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const [productCode, setProductCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
    sku: "",
    brand: "",
    description: "",
    price: "",
    discount: "",
    tax: "",
    publishDate: "",
    images: null,
  });

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product/${slug}`, {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });

        const {
          product_name,
          product_description,
          quantity,
          sku,
          product_brand,
          price,
          discount,
          tax,
          publishDate,
        } = response.data;
        // console.log(response.data)

        setFormData({
          title: product_name,
          description: product_description,
          quantity,
          sku,
          brand: product_brand,
          price,
          discount,
          tax,
          publishDate,
          images: null,
        });

        setSelectedColors(response.data.product_colors || []);
        setSelectedSizes(response.data.product_sizes || []);
        setTags(response.data.product_tags || []);
        setStatus(response.data.product_status || "draft");
        setCategory(response.data.product_category || "");
        setProductType(response.data.product_type || []);
        setGender(response.data.product_gender || []);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to fetch product details.");
      }
    };

    fetchProduct();
  }, [slug, savedToken]);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      e.preventDefault();

      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));

      data.append("product_type", productType);
      data.append("product_sizes", JSON.stringify(selectedSizes));
      data.append("product_colors", JSON.stringify(selectedColors));
      data.append("product_gender", gender);
      data.append("product_status", status);
      data.append("product_tags", JSON.stringify(tags || []));
      data.append("product_category", category);
      data.append("product_code", productCode);

      try {
        const response = await axios.put(`${BASE_URL}/product/${slug}`, data, {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });

        toast.success("Product updated successfully!");
        navigate("/ecommerce/products");
      } catch (error) {
        console.error("Error updating product:", error);
        toast.error(error.response?.data.message || "Error updating product.");
      }
    }
    setValidated(true);
  };

  // Add/remove tags
  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput)) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle file input
  const handleImageChange = (e) => {
    setFormData({ ...formData, images: e.target.files[0] });
  };

  // Toggle size selection
  const handleSizeToggle = (size) => {
    setSelectedSizes(
      (prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((s) => s !== size) 
          : [...prevSizes, size]
    );
  };

  // Color picker
  const handleColorPickerBlur = () => {
    if (!selectedColors.includes(colorTemp)) {
      setSelectedColors([...selectedColors, colorTemp]);
      setCustomColors([...customColors, colorTemp]);
      toggleColor(colorTemp);
    }
  };

  const handleColorPickerChange = (e) => {
    setColorTemp(e.target.value);
  };

  const handleSelectGender = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, gender: value });

    // If the user selects a valid gender, remove the error state
    if (value) {
      setValidated(true);
    }
  };
  //handle category
  const handleSelectCategory = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, category: value });

    // If the user selects a valid category, remove the error state
    if (value) {
      setValidated(true);
    }
  };
  //handle gender
  const handleSelectProductype = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, productType: value });

    // If the user selects a valid product type, remove the error state
    if (value) {
      setValidated(true);
    }
  };

  //for file
  const fileInputRef = useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  //handle status
  const handleSelectStatus = (e) => {
    setStatus(e.target.value);
  };
  //remove size's
  const handleRemoveSize = (size) => {
    const updatedSizes = selectedSizes.filter((s) => s !== size);
    setSelectedSizes(updatedSizes);
    onSizeSelect(updatedSizes);
  };

  // Color picker change
  const handleButtonClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(
        selectedColors.filter((selected) => selected !== color)
      );
    } else {
      setSelectedColors([...selectedColors, color]);
    }
    toggleColor(color);
  };

  // Fetch product code
  useEffect(() => {
    const fetchProductCode = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product/code`);
        setProductCode(response.data.code);
      } catch (error) {
        console.error("Error fetching product code:", error);
      }
    };

    fetchProductCode();
  }, []);

  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <h4>Update Product</h4>
      <Row>
        <ToastContainer />
        <Col md={9}>
          <Card className="p-4">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h6>Update Product</h6>

              {/* Product Title and Code */}
              <Row>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="productTitle">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Product title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.title && validated}
                    />
                    <Form.Control.Feedback type="invalid">
                      Product title is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6} className="mt-3">
                  <Form.Group controlId="productCode">
                    <Form.Label>Product Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={productCode}
                      readOnly
                      style={{ backgroundColor: "#F1F5F9" }}
                    />
                    <Form.Text className="text-muted">
                      Code will be generated automatically.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              {/* Quantity, SKU, and Brand */}
              <Row className="mt-3">
                <Col md={4}>
                  <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.quantity && validated}
                    />
                    <Form.Control.Feedback type="invalid">
                      Quantity is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group controlId="sku">
                    <Form.Label>SKU</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="TWT-LP-ALU-08"
                      value={formData.sku}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.sku && validated}
                    />
                    <Form.Control.Feedback type="invalid">
                      SKU is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Brand"
                      value={formData.brand}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.brand && validated}
                    />
                    <Form.Control.Feedback type="invalid">
                      Brand is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* More or Options */}
              <Row className="mt-3">
                {/* Category Field */}
                <Col md={4}>
                  <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={handleSelectCategory}
                      required
                      isInvalid={!formData.category && validated}
                    >
                      <option value="">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Home Appliances">Home Appliances</option>
                      <option value="Books">Books</option>
                      <option value="Furniture">Furniture</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Category is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Product Type Field */}
                <Col md={4}>
                  <Form.Group controlId="productType">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={handleSelectProductype}
                      required
                      isInvalid={!formData.productType && validated}
                    >
                      <option value="">Select Type</option>
                      <option value="Smartphones">Smartphones</option>
                      <option value="Laptops">Laptops</option>
                      <option value="Shirts">Shirts</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Watches">Watches</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Product type is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Gender Field */}
                <Col md={4}>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={handleSelectGender}
                      required
                      isInvalid={!formData.gender && validated}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Unisex">Unisex</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Gender is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Colors, Size, and Product Type */}
              <Row className="mt-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="colors">
                    <Form.Label>Colors Variant</Form.Label>
                    <div className="colors-container">
                      {availableColors.map((colorObj, index) => (
                        <Button
                          key={index}
                          style={{
                            backgroundColor: colorObj.value, // Use colorObj.value if it's an object with value as the color
                            border: "none",
                            margin: "5px",
                            position: "relative",
                          }}
                          className="color-btn"
                          onClick={() => handleButtonClick(colorObj.value)} // Use colorObj.value for the onClick
                        >
                          {selectedColors.includes(colorObj.value) && (
                            <BsCheck className="color-picker-icon" />
                          )}
                        </Button>
                      ))}

                      {customColors.map((colorObj, index) => (
                        <Button
                          key={index}
                          style={{
                            backgroundColor: colorObj.value, // Same logic here
                            border: "none",
                            margin: "5px",
                            position: "relative",
                          }}
                          className="color-btn"
                          onClick={() => handleButtonClick(colorObj.value)} // Use colorObj.value for the onClick
                        >
                          {selectedColors.includes(colorObj.value) && (
                            <BsCheck className="color-picker-icon" />
                          )}
                        </Button>
                      ))}

                      <div className="color-picker-container">
                        <Form.Control
                          type="color"
                          value={colorTemp}
                          className="color-picker"
                          onChange={handleColorPickerChange}
                          onBlur={handleColorPickerBlur}
                        />
                        <AiOutlineEdit
                          style={{
                            position: "absolute",
                            left: "12px",
                            top: "18px",
                            color: "#000",
                            fontSize: "1.2em",
                          }}
                          className="color-picker-icon"
                        />
                      </div>
                    </div>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="size">
                    <Form.Label>Size</Form.Label>
                    <div className="size-container">
                      {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                        <Button
                          key={size}
                          variant={
                            selectedSizes.includes(size)
                              ? "primary"
                              : "outline-primary"
                          }
                          className="size-btn"
                          onClick={() => handleSizeToggle(size)}
                          style={{
                            backgroundColor: selectedSizes.includes(size)
                              ? "#93C5FD"
                              : "#E2E8F0",
                            color: selectedSizes.includes(size)
                              ? "white"
                              : "black",
                            opacity: selectedSizes.includes(size) ? 1 : 0.5,
                          }}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              {/* Product Images */}
              <Form.Group controlId="productImages" className="mt-3">
                <Form.Label>Product Images</Form.Label>
                <div
                  className="image-upload-container"
                  onClick={handleIconClick}
                >
                  <BsUpload className="upload-icon" />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    required
                  />
                  <div className="upload-text">
                    Drag and drop your product images or browse your product
                    images
                  </div>
                  <Form.Control.Feedback type="invalid" className="mt-1">
                    Product image is required.
                  </Form.Control.Feedback>
                </div>
                {/* Show error if no image is selected */}
                <Form.Control.Feedback
                  type="invalid"
                  show={(validated && !formData.images).toString()}
                >
                  Product image is required.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Description */}
              <Form.Group controlId="description" className="mt-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  isInvalid={!formData.description && validated}
                />
                <Form.Control.Feedback type="invalid">
                  Description is required.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Price, Discount, and Other Options */}
              <Row className="mt-3">
                <Col md={4}>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="$0.00"
                      value={formData.price}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.price && validated} // Validate if price is not set
                    />
                    <Form.Control.Feedback type="invalid">
                      Price is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="discount">
                    <Form.Label>Discount</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0%"
                      value={formData.discount}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.discount && validated} // Validate if discount is not set
                    />
                    <Form.Control.Feedback type="invalid">
                      Discount is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="tax">
                    <Form.Label>TAX Applicable</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Select Tax"
                      value={formData.tax}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.tax && validated} // Validate if tax is not set
                    />
                    <Form.Control.Feedback type="invalid">
                      Tax is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Publish Date & Status */}
              <Row className="mt-3">
                <Col md={4}>
                  <Form.Group controlId="publishDate">
                    <Form.Label>Publish Date & Time</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={formData.publishDate}
                      onChange={handleChange}
                      required
                      isInvalid={!formData.publishDate && validated} // Validate if publish date is not set
                    />
                    <Form.Control.Feedback type="invalid">
                      Publish date is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={handleSelectStatus}
                      required
                    >
                      <option value="">Select Status</option>
                      <option>draft</option>
                      <option>published</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Status is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>




              {/* Product Tag */}
              <Row className="justify-content-start">
                <Col xs={12} md={12}>
                  <div className="mt-3">
                    <p>Product Tag</p>
                    <Card className="w-100">
                      <Card.Body>
                        <div className="d-flex flex-column flex-md-row">
                          <Form.Control
                            type="text"
                            placeholder="Add a tag"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            className="flex-grow-1"
                          />
                          <Button
                            variant="primary"
                            className="ms-md-2 mt-2 mt-md-0"
                            onClick={handleAddTag}
                            disabled={!tagInput.trim()}
                          >
                            Add Tag
                          </Button>
                        </div>
                        <div className="mt-2">
                          {tags.length > 0 &&
                            tags.map((tag, index) => (
                              <Button
                                key={index}
                                variant="outline-secondary"
                                className="me-2 mt-2"
                                onClick={() => handleRemoveTag(tag)}
                              >
                                {typeof tag === "string" ? tag : tag.name}{" "}
                                &times;
                              </Button>
                            ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>




              {/* Buttons */}

              <Row className="justify-content-end mt-4">
                <Col xs="auto">
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="danger" className="btn-responsivee">
                      Reset
                    </Button>
                    <Button
                      variant="primary"
                      className="btn-responsive"
                      onChange={handleSubmit}
                    >
                      Update Product
                    </Button>
                    <Button variant="primary" className="btn-responsiveee">
                      Draft & Preview
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>

        {/* Update Preview Card */}
        <Col md={3}>
          <UpdatePreview
            title={formData.title}
            price={formData.price}
            discount={formData.discount}
            image={formData.images}
            selectedSizes={selectedSizes}
            onRemoveSize={handleRemoveSize}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Update;
