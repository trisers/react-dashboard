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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Function to filter blogs based on the search term
  const filteredBlogs = blogTableData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Calculate the starting and ending index for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlog = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  // Function to handle opening the modal
  const handleUpdateClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleClose = () => setShowModal(false);

  // Function to filter blogs based on the search term
  const filteredBlogs = blogTableData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
                  value={searchTerm} // Controlled input
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
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
                {currentBlog.length > 0 ? (
                  currentBlog.map((item, index) => (
                    <tr key={index}>
                      <td>{indexOfFirstItem + index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.content}</td>
                      <td>
                        {item.tags.map((tag, tagIndex) => (
                          <Button
                            key={tagIndex}
                            variant="primary"
                            size="sm"
                            className="me-1 mb-1"
                            style={{
                              color: "rgb(98 116 137)",
                              backgroundColor: "rgb(226, 232, 240)",
                              border: "1px solid rgb(226, 232, 240)",
                            }}
                          >
                            {tag}
                          </Button>
                        ))}
                      </td>
                      <td>
                        <img
                          src={item.image}
                          alt="Blog"
                          className="blog-image"
                        />
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <p>
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, filteredBlogs.length)} of{" "}
                {filteredBlogs.length} Results
              </p>
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, pageIndex) => (
                  <Pagination.Item
                    key={pageIndex + 1}
                    active={pageIndex + 1 === currentPage}
                    onClick={() => handlePageChange(pageIndex + 1)}
                  >
                    {pageIndex + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
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
