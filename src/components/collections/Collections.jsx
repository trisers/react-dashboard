import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  FormControl,
  Form,
  Button,
  Modal,
  ListGroup,
} from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import axios from "axios";
import RichText from "./RichText";
import "./collections.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { Search } from "react-bootstrap-icons";
import { FaTimes } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";


const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_ASSET = import.meta.env.VITE_BASE_ASSET;
const savedToken = Cookies.get("accessToken");

function Collections() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [errors, setErrors] = useState({ title: false, content: false });
  const fileInputRef = useRef(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setImagePreview("");
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput)) {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Fetch product data
  const dataFetch = async () => {
    if (!savedToken) {
      toast.error("Token not provided.");
      return;
    }

    try {
      const response = await axios.get(
        `${BASE_URL}/product?page=1&pageSize=100000000&q=draft`,
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );
      const productData = response.data.products;
      setProducts(productData);
      setFilteredProducts(productData);
      console.log("Fetched Products: ", productData);
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Failed to fetch products. Please try again.");
    }
  };

  // Open and close modal
  const handleModalOpen = () => {
    setShowModal(true);
    dataFetch(); // Fetch products when opening the modal
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // Handle checkbox selection for products
  const handleCheckboxChange = (product) => {
    const alreadySelected = selectedProducts.some(
      (selected) => selected._id === product._id
    );

    if (alreadySelected) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((p) => p._id !== product._id)
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, product]);
    }
  };

  // Remove product from selected products
  const handleRemoveProduct = (productToRemove) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((product) => product._id !== productToRemove._id)
    );
  };

  console.log("Show Modal: ", showModal);
  console.log("Filtered Products: ", filteredProducts);

  // Filter products based on search input
  useEffect(() => {
    const filtered = products.filter((product) =>
      product?.product_name?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  const handlePublish = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("collection_name", title);
    formData.append("collection_description", content.replace(/<[^>]*>/g, "")); // Remove HTML tags
    if (file) formData.append("image", file);
    formData.append("collection_tags", JSON.stringify(tags));
    formData.append(
      "collection_products",
      JSON.stringify(selectedProducts.map((p) => p._id))
    );

    try {
      const response = await axios.post(`${BASE_URL}/collection`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${savedToken}`,
        },
      });

      console.log("Success:", response.data);
      toast.success("Collection created successfully!");

      // Reset form after submission
      setTitle("");
      setContent("");
      setFile(null);
      setImagePreview("");
      setTags([]);
      setTagInput("");
      setErrors({ title: false, content: false });
      setSelectedProducts([]);
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.message || "Failed to publish collection. Please try again."
      );
    }
  };

  return (
    <div
      className="mt-1 p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <ToastContainer />
      <div className="d-flex justify-content-between">
        <h4>Add New Collection</h4>
        <Button variant="success" onClick={handlePublish}>
          Create Collection
        </Button>
      </div>

      <div className="row">
        {/* Collection Form Section */}
        <div className="col-md-8">
          <Card className="mb-4 mt-4 p-4 h-100">
            <Form>
              {/* Collection Title */}
              <Form.Group controlId="collectionTitle" className="mb-3">
                <Form.Label>Collection Title *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter your collection title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  isInvalid={errors.title}
                  required
                />
                {errors.title && (
                  <Form.Control.Feedback type="invalid">
                    Collection title is required.
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              {/* Collection Content */}
              <Form.Group controlId="collectionContent" className="mb-3">
                <Form.Label>Collection Content *</Form.Label>
                <RichText
                  content={content}
                  setContent={setContent}
                  placeholder="Please enter your collection content"
                />
                {errors.content && (
                  <div style={{ color: "red", marginTop: "0.25rem" }}>
                    Collection content is required.
                  </div>
                )}
              </Form.Group>

              <p className="mt-2" style={{ fontSize: "12px", color: "#555" }}>
                * These fields are required.
              </p>
            </Form>
            <div className="container mt-2">
              <ToastContainer />
              <Form.Label>Products *</Form.Label>

              <Card className="p-3">
                <Form>
                  <div className="d-flex justify-content-between align-items-center mb-4 w-100">
                    <div className="d-flex align-items-end gap-2 w-100">
                      <div className="position-relative w-100">
                        <Search className="position-absolute top-50 translate-middle-y ms-2" />
                        <FormControl
                          type="search"
                          placeholder="Search for ..."
                          className="ps-5 w-100"
                          aria-label="Search"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="d-inline-flex">
                      <Button
                        variant="primary"
                        className="mt-1"
                        style={{ marginLeft: "10px" }}
                        onClick={handleModalOpen}
                      >
                        Browse
                      </Button>
                    </div>
                  </div>
                </Form>
                {/* Selected Products Display */}
                {selectedProducts.length > 0 ? (
                  <div className="mt-2">
                    <ListGroup>
                      {selectedProducts.map((product, index) => (
                        <ListGroup.Item
                          key={product._id}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <span className="me-2">{index + 1}.</span>
                            <img
                              src={`${BASE_ASSET}${product.product_gallery?.[0]}`}
                              alt={product.product_name || "Unnamed Product"}
                              style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "15px",
                                objectFit: "cover",
                              }}
                            />
                            <span>
                              {product.product_name || "Unnamed Product"}
                            </span>
                          </div>
                          <Button
                            variant="link"
                            onClick={() => handleRemoveProduct(product)}
                            className="text-danger"
                          >
                            <FaTimes />
                          </Button>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <div className="mt-2 text-center ">
                    <CiShoppingTag className="text-warning taggIcon" />{" "}
                    <div className="mt-2 text-center">
                      {/* Icon added here */}
                      <span className="ms-2 spann">
                        There was no product in this collection.
                        <br /> Browse to add product.
                      </span>
                    </div>
                  </div>
                )}
              </Card>

              {/* Modal to browse products */}
              <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Select Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <ListGroup.Item key={product._id}>
                          <Form.Check
                            type="checkbox"
                            label={
                              <div className="d-flex align-items-center">
                                <img
                                  src={`${BASE_ASSET}${product.product_gallery?.[0]}`}
                                  alt={
                                    product.product_name || "Unnamed Product"
                                  }
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    marginRight: "15px",
                                    objectFit: "cover",
                                  }}
                                />
                                <span>
                                  {product.product_name || "Unnamed Product"}
                                </span>
                              </div>
                            }
                            checked={selectedProducts.some(
                              (selected) => selected._id === product._id
                            )}
                            onChange={() => handleCheckboxChange(product)}
                          />
                        </ListGroup.Item>
                      ))
                    ) : (
                      <p>No products found</p>
                    )}
                  </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleModalClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleModalClose();
                    }}
                  >
                    Confirm Selection
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card>
        </div>

        {/* Collection Options Section */}
        <div className="col-md-4">
          {/* Image Upload */}
          <Card className="mb-4 mt-4 p-3 h-100">
            <Form.Group controlId="collectionImage" className="mt-3">
              <Form.Label>Collection Image *</Form.Label>
              <div className="image-upload-container" onClick={handleIconClick}>
                <BsUpload className="upload-icon" />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div className="upload-text">
                  Drag and drop your collection image
                </div>
              </div>
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </Form.Group>

            {/* Tags Input */}
            <Form.Group controlId="collectionTags" className="mt-3">
              <Form.Label>Tags *</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Add a tag"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  style={{ width: "500px" }}
                />
                <IoIosAddCircle
                  onClick={handleAddTag}
                  size={34} 
                  style={{
                    cursor: "pointer", 
                    marginLeft: "8px",
                    color: tagInput.trim() ? "#0d6efd" : "#6c757d", 
                  }}
                  title="Add Tag" 
                  disabled={!tagInput.trim()}
                />
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
            </Form.Group>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Collections;
