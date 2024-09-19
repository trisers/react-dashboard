import React, { useState } from "react";
import {
  Table,
  Pagination,
  FormControl,
  Card,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Dashboard } from "../../../allFakeData/fakeData";
import { Search } from "react-bootstrap-icons";
import UpadateModel from "./UpadateModel";
import "./blogs.css";

const blogTableData = Dashboard.blogTableData;

const BlogTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Function to handle opening the modal
  const handleUpdateClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleClose = () => setShowModal(false);

  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <h4>View Blogs</h4>
      <Card className="mb-4 mt-4">
        <Card.Body>
          <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="position-relative w-10">
                <Search className="position-absolute top-50 translate-middle-y ms-2" />
                <FormControl
                  type="search"
                  placeholder="Search for ..."
                  className="ps-5"
                  aria-label="Search"
                />
              </div>
            </div>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Tags</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogTableData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>
                      {item.tags.map((tag, tagIndex) => (
                        <Button
                          key={tagIndex}
                          variant="primary"
                          size="sm"
                          className="me-1 mb-1"
                          style={{color:"rgb(98 116 137)", backgroundColor:"rgb(226, 232, 240)", border:"1px solid rgb(226, 232, 240)"}}
                        >
                          {tag}
                        </Button>
                      ))}
                    </td>
                    <td>
                      <img src={item.image} alt="Blog" className="blog-image" />
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="link"
                          id={`dropdown-${index}`}
                          style={{
                            textDecoration: "none",
                            color: "black",
                            padding: 0,
                          }}
                          className="three-dots-dropdown"
                        >
                          <span style={{ cursor: "pointer" }}>...</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => handleUpdateClick(item)}
                          >
                            Update
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center">
              <p>Showing 04 of 19 Results</p>
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Modal Component */}
      <UpadateModel
        showModal={showModal}
        handleClose={handleClose}
        selectedBlog={selectedBlog}
      />
    </div>
  );
};

export default BlogTable;
