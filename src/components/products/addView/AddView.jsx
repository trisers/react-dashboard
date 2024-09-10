import React, { useRef, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "./addView.css";
import { BsPencil, BsUpload } from "react-icons/bs";
import ProductPreview from "./ProductPreview";

const AddView = () => {
  const [color, setColor] = useState("#ffffff");
  const [iconVisible, setIconVisible] = useState(true);

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    setIconVisible(false);
  };

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
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
                      <Button
                        style={{ backgroundColor: "#FF5733", border: "none" }}
                        className="color-btn"
                      ></Button>
                      <Button
                        style={{ backgroundColor: "#F1C40F", border: "none" }}
                        className="color-btn"
                      ></Button>
                      <Button
                        style={{ backgroundColor: "#000000", border: "none" }}
                        className="color-btn"
                      ></Button>
                      <Button
                        style={{ backgroundColor: "#28B463", border: "none" }}
                        className="color-btn"
                      ></Button>
                      <Button
                        style={{ backgroundColor: "#3498DB", border: "none" }}
                        className="color-btn"
                      ></Button>
                      <Button
                        style={{ backgroundColor: "#9B59B6", border: "none" }}
                        className="color-btn"
                      ></Button>

                      <div className="color-picker-container">
                        <Form.Control
                          type="color"
                          defaultValue="#ffffff"
                          className="color-picker"
                          style={{ backgroundColor: color }}
                          onChange={handleColorChange}
                        />
                        {iconVisible && (
                          <BsPencil className="color-picker-icon" />
                        )}
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
                          variant="outline-primary"
                          className="size-btn"
                          key={size}
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
                <Form.Label>Description</Form.Label>
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
                    <Button variant="danger" className="btn-responsive">
                      Reset
                    </Button>
                    <Button variant="primary" className="btn-responsive">
                      Create Product
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="btn-responsive"
                    >
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
        <ProductPreview />
        </Col>
      </Row>
    </div>
  );
};

export default AddView;
