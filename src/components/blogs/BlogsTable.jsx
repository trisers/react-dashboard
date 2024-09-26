import React, { useState, useEffect } from "react";
import {
  Table,
  Pagination,
  FormControl,
  Card,
  Dropdown,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { Search } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateModel from "./UpadateModel";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_ASSET = import.meta.env.VITE_BASE_ASSET;

const BlogTable = ({ refreshBlogs }) => {
  const [blogTableData, setBlogTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const pageSize = 7;

  const fetchBlogData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/blog?page=${currentPage}&pageSize=${pageSize}`
      );
      setBlogTableData(response.data.blogs);
      setTotalBlogs(response.data.totalblogs);
    } catch (error) {
      console.error("Error fetching the blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [currentPage]);

  const filteredBlogs = blogTableData.filter(
    (blog) =>
      blog.blog_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.blog_content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.blog_tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const totalPages = Math.ceil(totalBlogs / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleUpdateClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleDeleteClick = async (blog) => {
    try {
      await axios.delete(`${BASE_URL}/blog/${blog._id}`);
      toast.success("Blog deleted successfully!");

      setBlogTableData((prevData) =>
        prevData.filter((item) => item._id !== blog._id)
      );
      setTotalBlogs((prevTotal) => prevTotal - 1);
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <ToastContainer />
      <h4>View Blogs</h4>
      <Card className="mb-4 mt-4">
        <Card.Body>
          <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-end gap-2">
                <div className="position-relative w-100">
                  <Search className="position-absolute top-50 translate-middle-y ms-2" />
                  <FormControl
                    type="search"
                    placeholder="Search for ..."
                    className="ps-5"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
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
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((item, index) => (
                    <tr key={item._id}>
                      <td>{(currentPage - 1) * pageSize + index + 1}</td>
                      <td>{item.blog_title}</td>
                      <td>{item.blog_content}</td>
                      <td>
                        {item.blog_tags.map((tag, index) => (
                          <Button
                            key={index}
                            variant="outline-secondary"
                            className="me-2 mt-2 btn-sm"
                          >
                            {tag}
                          </Button>
                        ))}
                      </td>
                      <td>
                        <img
                          src={`${BASE_ASSET}${item.blog_thumbnail}`}
                          alt="Blog"
                          className="blog-image"
                          style={{ width: "100px", height: "auto" }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "path/to/default/image.png";
                          }}
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
                            <Dropdown.Item
                              onClick={() => handleDeleteClick(item)}
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No blogs found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center">
              <p>Showing 04 of 19 Results</p>
              <Pagination>
                <Pagination.Prev
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                />
                {[...Array(totalPages)].map((_, page) => (
                  <Pagination.Item
                    key={page + 1}
                    active={currentPage === page + 1}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    {page + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </Pagination>
            </div>
          </div>
        </Card.Body>
      </Card>
      <UpdateModel
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        selectedBlog={selectedBlog}
        refreshBlogs={fetchBlogData}
      />
    </div>
  );
};

export default BlogTable;
