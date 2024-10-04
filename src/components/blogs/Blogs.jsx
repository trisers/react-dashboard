import React, { useRef, useState } from "react";
import { Form, Button, Card, Dropdown } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import axios from "axios";
import RichText from "./RichText";
import "./blogs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const savedToken = Cookies.get("accessToken");

function Blogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [errors, setErrors] = useState({
    title: false,
    content: false,
    category: false,
  });

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
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

  const validateForm = () => {
    let isValid = true;
    let newErrors = { title: false, content: false, category: false };

    if (title.trim() === "") {
      newErrors.title = true;
      isValid = false;
    }

    if (content.trim() === "") {
      newErrors.content = true;
      isValid = false;
    }

    if (category.trim() === "") {
      newErrors.category = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
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

  const handlePublish = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("blog_title", title);

    const strippedContent = content.replace(/<[^>]*>/g, ""); // Remove all HTML tags

    formData.append("blog_content", strippedContent);
    formData.append("blog_category", category);

    if (file) {
      formData.append("thumbnail", file);
    }

    if (tags.length > 0) {
      formData.append("blog_tags", JSON.stringify(tags));
    } else {
      formData.append("blog_tags", JSON.stringify([]));
    }

    try {
      const response = await axios.post(`${BASE_URL}/blog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + savedToken,
        },
      });

      console.log("Success:", response.data);
      toast.success("Blog created successfully!");

      // Reset form after submission
      setTitle("");
      setContent("");
      setCategory("");
      setFile(null);
      setImagePreview("");
      setTags([]);
      setErrors({ title: false, content: false, category: false });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to publish blog.");
    }
  };

  return (
    <div
      className="mt-1 p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <ToastContainer />
      <div className="d-flex justify-content-between">
        <h4>Add New Blog</h4>
        <Button variant="success" onClick={handlePublish}>
          Publish
        </Button>
      </div>

      <div className="row">
        {/* Blog Form Section */}
        <div className="col-md-8">
          <Card className="mb-4 mt-4 p-4 h-100">
            <Form>
              {/* Blog Title */}
              <Form.Group controlId="blogTitle" className="mb-3">
                <Form.Label>Blog Title *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter your blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  isInvalid={errors.title}
                  required
                />
                {errors.title && (
                  <Form.Control.Feedback type="invalid">
                    Blog title is required.
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              {/* Blog Content */}
              <Form.Group controlId="blogContent" className="mb-3">
                <Form.Label>Blog Content *</Form.Label>
                <RichText
                  content={content}
                  setContent={setContent}
                  placeholder="Please enter your blog content"
                />
                {errors.content && (
                  <div style={{ color: "red", marginTop: "0.25rem" }}>
                    Blog content is required.
                  </div>
                )}
              </Form.Group>

              <p className="mt-2" style={{ fontSize: "12px", color: "#555" }}>
                * These fields are required.
              </p>
            </Form>

            {/* Tags Input */}
            <Form.Group controlId="blogTags" className="mt-3">
              <Form.Label>Tags *</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Add a tag's"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  style={{ width: "500px" }}
                />
                <Button
                  variant="primary"
                  className="ms-2"
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
            </Form.Group>
          </Card>
        </div>

        {/* Blog Options Section */}
        <div className="col-md-4">
          <Card className="mb-4 mt-4 p-3 h-100">
            <Form.Label>Blog Category *</Form.Label>
            {/* Category Dropdown */}
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-category">
                {category ? category : "Select Category"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => handleSelectCategory("Technology")}
                >
                  Technology
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSelectCategory("Lifestyle")}
                >
                  Lifestyle
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectCategory("Business")}>
                  Business
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {errors.category && (
              <div style={{ color: "red", marginTop: "0.25rem" }}>
                Please select a category.
              </div>
            )}

            {/* Image Upload */}
            <Form.Group controlId="blogImage" className="mt-3">
              <Form.Label>Blog Image *</Form.Label>
              <div className="image-upload-container" onClick={handleIconClick}>
                <BsUpload className="upload-icon" />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div className="upload-text">Drag and drop your blog image</div>
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
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
