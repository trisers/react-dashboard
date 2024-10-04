import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "./addView.css";
import { BsCheck, BsUpload } from "react-icons/bs";
import ProductPreview from "./ProductPreview";
import { ColorContext } from "../../context/ColorContext";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const savedToken = Cookies.get("accessToken");

const AddView = ({ onSizeSelect }) => {
  //for color's changes
  const { availableColors, toggleColor, addCustomColor } =
    useContext(ColorContext);
  const [colorTemp, setColorTemp] = useState("#ffffff");
  const [selectedColors, setSelectedColors] = useState([]);
  const [customColors, setCustomColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
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
    gender: "",
    publishDate: "",
    images: null,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    const data = new FormData();
    data.append("product_name", formData.title);
    data.append("product_description", formData.description);
    data.append("product_type", formData.productType);
    data.append("quantity", formData.quantity);
    data.append("price", formData.price);
    data.append("sku", formData.sku);
    data.append("product_brand", formData.brand);
    data.append("product_category", formData.category);

    // Add the product code to FormData
    data.append("product_code", productCode);

    // Format sizes before appending to FormData
    const formattedSizes = formatSelectedSizes();
    data.append("product_sizes", JSON.stringify(formattedSizes));

    // Format colors before appending to FormData
    const formattedColors = formatSelectedColors();
    data.append("product_colors", JSON.stringify(formattedColors));

    data.append("tax", formData.tax);
    data.append("product_gender", formData.gender || "");
    data.append("product_status", formData.status || "draft");
    data.append("discount", formData.discount);
    data.append("publishDate", formData.publishDate);

    if (formData.images) {
      data.append("gallery", formData.images);
    }

    if (tags.length > 0) {
      data.append("product_tags", JSON.stringify(tags));
    } else {
      data.append("product_tags", JSON.stringify([]));
    }

    try {
      const response = await axios.post(`${BASE_URL}/product`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + savedToken,
        },
      });

      // Show success message
      toast.success("Product created successfully!");
      console.log("Product created successfully:", response.data);

      // Reset form after submission
      setFormData({
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
        productType: "",
        gender: "",
        category: "",
        status: "draft",
      });

      setTags([]);
      setSelectedSizes([]);
      setSelectedColors([]);
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error(error.response?.data.message || "Error creating product.");
    }
  };

  //handle status
  const handleSelectStatus = (e) => {
    setStatus(e.target.value);
  };

  // Handle product type
  const handleSelectProductype = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, productType: value });

    if (value) {
      setValidated(true);
    }
  };

  // Handle gender selection
  const handleSelectGender = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, gender: value });

    if (value) {
      setValidated(true);
    }
  };

  // Handle category
  const handleSelectCategory = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, category: value });

    if (value) {
      setValidated(true);
    }
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, images: e.target.files[0] });
    if (e.target.files.length > 0) {
      setValidated(true); // Set valid state if an image is selected
    }
  };

  // Handle a new tag
  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput)) {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Handle removing a tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  //for file
  const fileInputRef = useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  // Size mapping object
  const sizeMapping = {
    XS: "34",
    S: "36",
    M: "38",
    L: "40",
    XL: "42",
    "2XL": "44",
    "3XL": "46",
  };

  // Format selected sizes
  const formatSelectedSizes = () => {
    return selectedSizes.map((size) => ({
      name: size,
      value: sizeMapping[size],
    }));
  };

  // Handle size toggle (add/remove)
  const handleSizeToggle = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size) // Remove size if already selected
      : [...selectedSizes, size]; // Add size if not selected

    setSelectedSizes(updatedSizes);
  };

  //remove size's
  const handleRemoveSize = (size) => {
    const updatedSizes = selectedSizes.filter((s) => s !== size);
    setSelectedSizes(updatedSizes);
    onSizeSelect(updatedSizes);
  };

  // Color picker change
  const handleButtonClick = (color) => {
    console.log(color);
    if (selectedColors.some((selectedColor) => selectedColor.value === color)) {
      setSelectedColors(
        selectedColors.filter((selected) => selected.value !== color)
      );
    } else {
      setSelectedColors([
        ...selectedColors,
        {
          name: "custom",
          value: color,
        },
      ]);
    }
    toggleColor(color);
  };

  // Handle custom color selection on double click or when the color picker loses focus
  const handleColorPickerBlur = () => {
    const newColor = colorTemp;

    if (!selectedColors.includes(newColor)) {
      setSelectedColors([
        ...selectedColors,
        { name: "custom", value: newColor },
      ]);
      setCustomColors([...customColors, { name: "custom", value: newColor }]); // Add to custom color list
      toggleColor(newColor); // Add custom color to context
    }
  };

  // Handle color picker value change but don't select until blur
  const handleColorPickerChange = (e) => {
    setColorTemp(e.target.value);
  };

  // Format selected colors for submission
  const formatSelectedColors = () => {
    return selectedColors.map((color) => ({
      name: color.name || "default",
      value: color.value,
    }));
  };

  // Product code
  useEffect(() => {
    const fetchProductCode = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product/code`, {
          headers: {
            Authorization: "Bearer " + savedToken,
          },
        });
        setProductCode(response.data.code);
      } catch (error) {
        console.error("Error fetching product code:", error);
      }
    };

    fetchProductCode();
  }, [BASE_URL]);

  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <h4>Add New</h4>
      <Row>
        <ToastContainer />
        <Col md={9}>
          <Card className="p-4">
            <Form noValidate validated={validated}>
              <h6>Create Product</h6>
              <Row>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="productTitle">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Product title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      required // Make this field required
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
                      onChange={(e) =>
                        setFormData({ ...formData, sku: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, brand: e.target.value })
                      }
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
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="unisex">unisex</option>
                      <option value="other">other</option>
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
                      {/* Render available colors */}
                      {availableColors.map((color, index) => (
                        <Button
                          key={index}
                          style={{
                            backgroundColor: color.value,
                            border: "1px solid #c6c3c3",
                            margin: "5px",
                            position: "relative",
                          }}
                          className="color-btn"
                          onClick={() => handleButtonClick(color.value)}
                        >
                          {selectedColors.some(
                            (selectedColor) =>
                              selectedColor.value === color.value
                          ) && <BsCheck className="color-picker-icon" />}
                        </Button>
                      ))}

                      {/* Render selected custom colors */}
                      {customColors.map((color, index) => (
                        <Button
                          key={index}
                          style={{
                            backgroundColor: color.value,
                            border: "1px solid #c6c3c3",
                            margin: "5px",
                            position: "relative",
                          }}
                          className="color-btn"
                          onClick={() => handleButtonClick(color.value)}
                        >
                          {selectedColors.some(
                            (selectedColor) =>
                              selectedColor.value === color.value
                          ) && <BsCheck className="color-picker-icon" />}
                        </Button>
                      ))}

                      {/* Color picker for custom color */}
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
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
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
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, discount: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, tax: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          publishDate: e.target.value,
                        })
                      }
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
                            placeholder="Add a tag's"
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
                                {tag} &times;
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
                      onClick={handleSubmit}
                    >
                      Create Product
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

        {/* Product Preview Card */}
        <Col md={3}>
          <ProductPreview
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

export default AddView;
