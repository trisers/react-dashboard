import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Pagination,
  InputGroup,
  FormControl,
  Card,
  Dropdown,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_ASSET = import.meta.env.VITE_BASE_ASSET;

const ListView = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const itemsPerPage = 5;

  const savedToken = Cookies.get("accessToken");

  // Fetch product data
  const dataFetch = async () => {
    if (!savedToken) {
      toast.error("Token not provided.");
      return;
    }

    try {
      const response = await axios.get(
        `${BASE_URL}/product?page=${currentPage}&pageSize=${itemsPerPage}&q=draft`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );
      const productData = response.data.products;
      setProducts(productData);
      setFilteredProducts(productData);
      setTotalProducts(response.data.totalProducts);
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Failed to fetch products. Please try again.");
      if (error.response && error.response.status === 401) {
        toast.error("Session expired.");
      }
    }
  };

  // Filter products based on search input
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.product_name.toLowerCase().includes(search.toLowerCase()) ||
        product.product_category.toLowerCase().includes(search.toLowerCase()) ||
        product.product_code.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  // Fetch data whenever the page changes
  useEffect(() => {
    dataFetch();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // Handle Add Product Click
  const handleAddProductClick = () => {
    navigate("/ecommerce/products/add");
  };

  return (
    <div
      className="mt-1 p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <ToastContainer />
      <h4>List View</h4>
      <Card className="mb-4 mt-4">
        <Card.Body>
          <div className="container-fluid mt-4">
            <div className="row mb-3 mt-4 align-items-center">
              <div className="col-md-8 d-flex align-items-center gap-2">
                <div className="position-relative w-10">
                  <Search className="position-absolute top-50 translate-middle-y ms-2" />
                  <FormControl
                    type="search"
                    placeholder="Search for ..."
                    className="ps-5"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <InputGroup style={{ width: "240px" }}>
                  <FormControl
                    type="text"
                    placeholder="Select Date"
                    aria-label="Select Date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </InputGroup>
              </div>
              <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                <Button variant="primary" onClick={handleAddProductClick}>
                  + Add Product
                </Button>
              </div>
            </div>

            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>Product Code</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td
                        style={{ color: "#3B82F6", cursor: "pointer" }}
                        onClick={() =>
                          navigate(`/ecommerce/products/update/${product._id}`)
                        } 
                      >
                        #{product.product_code}
                      </td>
                      <td>
                        <h6>{product.product_name}</h6>
                      </td>
                      <td>
                        <Button variant="outline-secondary" size="sm">
                          {product.product_category}
                        </Button>
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
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
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, totalProducts)} of{" "}
                {totalProducts} Results
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
    </div>
  );
};

export default ListView;
