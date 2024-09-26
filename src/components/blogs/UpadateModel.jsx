import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { BsUpload } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const UpdateModel = ({
  showModal,
  handleClose,
  selectedBlog,
  refreshBlogs,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (selectedBlog) {
      setTitle(selectedBlog.blog_title);
      setContent(selectedBlog.blog_content);
      setTags(selectedBlog.blog_tags || []);
      setImagePreview(selectedBlog.blog_thumbnail);
    }
  }, [selectedBlog]);

  // Handle a new tag
  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Handle removing a tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle image file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setImagePreview(selectedBlog.blog_thumbnail);
    }
  };

  // file input click
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("blog_title", title);
    formData.append("blog_content", content);
    formData.append("blog_tags", JSON.stringify(tags));

    if (file) {
      formData.append("blog_thumbnail", file);
    }

    try {
      const response = await axios.put(
        `${BASE_URL}/blog/${selectedBlog._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Blog updated successfully!");
      handleClose();
      refreshBlogs();
    } catch (error) {
      toast.error("Error updating the blog");
      console.error("Error updating the blog:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter blog content"
            />
          </Form.Group>

          <Form.Group controlId="blogTags" className="mt-3">
            <Form.Label>Tags</Form.Label>
            <div className="d-flex">
              <Form.Control
                style={{ width: "370px" }}
                type="text"
                placeholder="Add a tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
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

          <Form.Group controlId="blogImage" className="mt-3">
            <Form.Label>Blog Image</Form.Label>
            <div className="image-upload-container" onClick={handleIconClick}>
              <BsUpload className="upload-icon" />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <div className="upload-text">Upload or change blog image</div>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModel;
