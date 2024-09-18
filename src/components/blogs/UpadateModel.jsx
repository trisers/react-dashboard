import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const UpadateModel = ({ showModal, handleClose, selectedBlog }) => {
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
              defaultValue={selectedBlog?.title || ""}
              placeholder="Enter blog title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={selectedBlog?.content || ""}
              placeholder="Enter blog content"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              defaultValue={selectedBlog?.tags?.join(", ") || ""}
              placeholder="Enter blog tags"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              defaultValue={selectedBlog?.image || ""}
              placeholder="Enter image URL"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Update Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpadateModel;
