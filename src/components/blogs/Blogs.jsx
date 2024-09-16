import React, { useRef, useState } from "react";
import { Form, Button, Card, Dropdown } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";

function Blogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //for file
  const fileInputRef = useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="mt-1 p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <div className="d-flex justify-content-between">
        <h4>Add New Blog</h4>
        <Button variant="success">Publish</Button>
      </div>

      <div className="row">
        {/* Blog Form Section */}
        <div className="col-md-8">
          <Card className="mb-4 mt-4 p-4">
            <Form>
              <Form.Group controlId="blogTitle" className="mb-3">
                <Form.Label>Blog Title *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter your blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="blogContent" className="mb-3">
                <Form.Label>Blog Content *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Blog Description"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </Form.Group>

              <p className="mt-2" style={{ fontSize: "12px", color: "#555" }}>
                * These fields are required.
              </p>
            </Form>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="mb-4 mt-4 p-3">
            <h5>Blog Options</h5>

            {/* Category Dropdown */}
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-category">
                Select Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Technology</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Lifestyle</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Business</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

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
                  onChange={(e) => {
                    console.log(e.target.files);
                  }}
                />
                <div className="upload-text">Drag and drop your blog image</div>
              </div>
            </Form.Group>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
