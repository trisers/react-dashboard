import React, { useState } from "react";
import {
  Table,
  Button,
  Pagination,
  InputGroup,
  FormControl,
  Card,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import ListViewData from "../../../../allFakeData/ListViewData";
import { useNavigate } from "react-router-dom";

const ListView = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtered data based on the search input
  const searchProductTable = ListViewData.filter((products) => {
    return (
      products.productCode.toLowerCase().includes(search.toLowerCase()) ||
      products.productName.toLowerCase().includes(search.toLowerCase()) ||
      products.category.toLowerCase().includes(search.toLowerCase()) ||
      products.price.toString().toLowerCase().includes(search.toLowerCase()) ||
      products.stock.toString().toLowerCase().includes(search.toLowerCase()) || 
      products.revenue.toString().toLowerCase().includes(search.toLowerCase()) ||
      products.status.label.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Calculate the starting and ending index for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = searchProductTable.slice(indexOfFirstItem, indexOfLastItem);
  
  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(searchProductTable.length / itemsPerPage);

  const handleAddProductClick = () => {
    navigate("/ecommerce/products/add");
  };

  return (
    <div
      className="mt-1 p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
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
                  <th>Revenue</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.length > 0 ? (
                  currentProducts.map((item, index) => (
                    <tr key={index}>
                      <td>{item.productCode}</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-1">
                          <Image
                            src={item.image}
                            roundedCircle
                            alt="Product Avatar"
                            style={{ height: "30px", width: "32px" }}
                          />
                          <div>{item.productName}</div>
                        </div>
                      </td>
                      <td>
                        <Button
                          variant="secondary"
                          className="border-0 h-25 w-75 text-center"
                          style={{
                            color: "#64748B",
                            backgroundColor: "#E2E8F0",
                          }}
                        >
                          {item.category}
                        </Button>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.stock}</td>
                      <td>{item.revenue}</td>
                      <td>
                        <Button
                          variant="secondary"
                          className="border-0 h-25 w-75 text-center"
                          style={{
                            color: item.status.color,
                            backgroundColor: item.status.bgColor,
                          }}
                        >
                          {item.status.label}
                        </Button>
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
                            <Dropdown.Item>Show</Dropdown.Item>
                            <Dropdown.Item>Update</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <p>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, searchProductTable.length)} of {searchProductTable.length} Results</p>
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
