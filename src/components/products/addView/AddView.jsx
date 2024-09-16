import React, { useContext, useRef, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "./addView.css";
import { BsCheck, BsPencil, BsUpload } from "react-icons/bs";
import ProductPreview from "./ProductPreview";
import { ColorContext } from "../../context/ColorContext";
import { AiOutlineEdit } from "react-icons/ai";

const AddView = ({ onSizeSelect }) => {
  //for color's changes
  const { selectedColors, availableColors, toggleColor, addCustomColor } =
    useContext(ColorContext);
  const [colorTemp, setColorTemp] = useState("#ffffff"); 
  const [colorSelected, setColorSelected] = useState(""); 

  // Color picker change 
  const handleColorPickerChange = (e) => {
    const newColor = e.target.value;
    setColorTemp(newColor);
    addCustomColor(newColor); 
    setColorSelected(newColor);
  };

  // Handle button click to toggle color selection
  const handleButtonClick = (color) => {
    toggleColor(color);
    // If the color is deselected, clear the selected color
    if (selectedColors.includes(color)) {
      setColorSelected("");
    } else {
      setColorSelected(color);
    }
  };

  //for file
  const fileInputRef = useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  //for size selected
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeToggle = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size) // Remove size if already selected
      : [...selectedSizes, size]; // Add size if not selected

    setSelectedSizes(updatedSizes);
    onSizeSelect(updatedSizes);
  };

  const handleRemoveSize = (size) => {
    const updatedSizes = selectedSizes.filter((s) => s !== size);
    setSelectedSizes(updatedSizes);
    onSizeSelect(updatedSizes);
  };

  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <h4>Add New</h4>
      <Row>
        <Col md={9}>
          <Card className="p-4">
            <Form>
              <h6>Create Product</h6>
              <Row>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="productTitle">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control type="text" placeholder="Product title" />
                    <Form.Text className="text-muted">
                      Do not exceed 20 characters when entering the product
                      name.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="productCode">
                    <Form.Label>Product Code</Form.Label>
                    <Form.Control
                      type="text"
                      value="TWT145015"
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
                    <Form.Control type="number" placeholder="Quantity" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="sku">
                    <Form.Label>SKU</Form.Label>
                    <Form.Control type="text" placeholder="TWT-LP-ALU-08" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Brand" />
                  </Form.Group>
                </Col>
              </Row>
              {/* More or Options */}
              <Row className="mt-3">
                <Col md={4}>
                  <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                      <option>Select Category</option>
                      <option>Electronics</option>
                      <option>Clothing</option>
                      <option>Home Appliances</option>
                      <option>Books</option>
                      <option>Furniture</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="productType">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Control as="select">
                      <option>Select Type</option>
                      <option>Smartphones</option>
                      <option>Laptops</option>
                      <option>Shirts</option>
                      <option>Shoes</option>
                      <option>Watches</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Unisex</option>
                      <option>Other</option>
                    </Form.Control>
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
                            backgroundColor: color,
                            border: "none",
                            margin: "5px",
                            position: "relative",
                          }}
                          className="color-btn"
                          onClick={() => handleButtonClick(color)}
                        >
                          {selectedColors.includes(color) && (
                            <BsCheck className="color-picker-icon" />
                          )}
                        </Button>
                      ))}

                      {/* Color picker for custom color */}
                      <div className="color-picker-container">
                        <Form.Control
                          type="color"
                          value={colorTemp}
                          className="color-picker"
                          onChange={handleColorPickerChange}
                        />
                        {colorSelected === colorTemp && (
                          <BsCheck className="color-picker-icon" />
                        )}
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
                    onChange={(e) => {
                      console.log(e.target.files);
                    }}
                  />
                  <div className="upload-text">
                    Drag and drop your product images or browse your product
                    images
                  </div>
                </div>
              </Form.Group>

              {/* Description */}
              <Form.Group controlId="description" className="mt-3">
                <Form.Label >Description</Form.Label>
                <Form.Control as="textarea" rows={3} className="discription" />
              </Form.Group>

              {/* Price, Discount, and Other Options */}
              <Row className="mt-3">
                <Col md={4}>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="$0.00" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="discount">
                    <Form.Label>Discount</Form.Label>
                    <Form.Control type="number" placeholder="0%" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="tax">
                    <Form.Label>TAX Applicable</Form.Label>
                    <Form.Control type="text" placeholder="Select Tax" />
                  </Form.Group>
                </Col>
              </Row>

              {/* Publish Date & Status */}
              <Row className="mt-3">
                <Col md={4}>
                  <Form.Group controlId="publishDate">
                    <Form.Label>Publish Date & Time</Form.Label>
                    <Form.Control type="datetime-local" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                      <option>Draft</option>
                      <option>Published</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="visibility">
                    <Form.Label>Visibility</Form.Label>
                    <Form.Control as="select">
                      <option>Public</option>
                      <option>Published</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="justify-content-start">
                <Col xs={12} md={12}>
                  <div className="mt-3">
                    <p>Product Tag</p>
                    <Card className="w-100">
                      {" "}
                      <Card.Body>
                        <div className="d-flex flex-wrap gap-2">
                          <Button variant="primary">Fashion</Button>
                          <Button variant="primary">Clothes</Button>
                          <Button variant="primary">Headphones</Button>
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
                    <Button variant="primary" className="btn-responsive">
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
            selectedSizes={selectedSizes}
            onRemoveSize={handleRemoveSize}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AddView;
