import React, { useState } from "react";
import {
  Table,
  Button,
  Pagination,
  FormControl,
  Card,
  Dropdown,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { FaBox, FaClock, FaTruck, FaUndoAlt, FaTimes } from "react-icons/fa";
import "./orderTable.css";
import fakeOrderData from "../../../../allFakeData/fakeOrderData";
import ShowModel from "./ShowModel";

const OrderTable = () => {
  const { orderTableData } = fakeOrderData;
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const itemPerPage = 6;

  // Function to handle opening the modal
  const handleOpenModal = () => setShowModal(true);
  // Function to handle closing the modal
  const handleCloseModal = () => setShowModal(false);

  // Filter orders based on search and filter state
  const filteredOrderData = orderTableData.filter((order) => {
    const matchesSearch =
      order.orderId.toLowerCase().includes(search.toLowerCase()) ||
      order.customerName.toLowerCase().includes(search.toLowerCase()) ||
      order.amount.toString().toLowerCase().includes(search.toLowerCase()) ||
      order.orderDate.toLowerCase().includes(search.toLowerCase()) ||
      order.deliveryDate.toLowerCase().includes(search.toLowerCase()) ||
      order.paymentMethod.toLowerCase().includes(search.toLowerCase()) ||
      order.status.label.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "pending" && order.status.label === "Pending") ||
      (filter === "delivered" && order.status.label === "Delivered") ||
      (filter === "returned" && order.status.label === "Return") ||
      (filter === "cancelled" && order.status.label === "Cancelled");

    return matchesSearch && matchesFilter;
  });

  // Pagination
  const startIndex = (page - 1) * itemPerPage;
  const paginatedOrderData = filteredOrderData.slice(
    startIndex,
    startIndex + itemPerPage
  );
  const totalPages = Math.ceil(filteredOrderData.length / itemPerPage);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <Card className="mb-4 mt-0">
        <Card.Body>
          <div className="container-fluid mt-4">
            <div className="row align-items-center mb-3 mt-4">
              <div className="col-md-3 d-flex align-items-center">
                <div className="position-relative flex-grow-1">
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
              </div>

              <div className="col-md-5"></div>

              <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                <Button variant="primary" onClick={handleOpenModal}>
                  + Add Orders
                </Button>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <Button
                variant={filter === "all" ? "primary" : "outline-primary"}
                className="border-0 d-inline-flex align-items-center"
                onClick={() => setFilter("all")}
              >
                <FaBox className="me-2" /> All orders
              </Button>
              <Button
                variant={filter === "pending" ? "primary" : "outline-primary"}
                className="border-0 d-inline-flex align-items-center"
                onClick={() => setFilter("pending")}
              >
                <FaClock className="me-2" /> Pending
              </Button>
              <Button
                variant={filter === "delivered" ? "primary" : "outline-primary"}
                className="border-0 d-inline-flex align-items-center"
                onClick={() => setFilter("delivered")}
              >
                <FaTruck className="me-2" /> Delivery
              </Button>
              <Button
                variant={filter === "returned" ? "primary" : "outline-primary"}
                className="border-0 d-inline-flex align-items-center"
                onClick={() => setFilter("returned")}
              >
                <FaUndoAlt className="me-2" /> Return
              </Button>
              <Button
                variant={filter === "cancelled" ? "primary" : "outline-primary"}
                className="border-0 d-inline-flex align-items-center"
                onClick={() => setFilter("cancelled")}
              >
                <FaTimes className="me-2" /> Cancelled
              </Button>
            </div>

            <div className="table-responsive">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Delivery Date</th>
                    <th>Customer Name</th>
                    <th>Payment Method</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedOrderData.length > 0 ? (
                    paginatedOrderData.map((order, index) => (
                      <tr key={index}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{order.orderId}</td>
                        <td>{order.orderDate}</td>
                        <td>{order.deliveryDate}</td>
                        <td>{order.customerName}</td>
                        <td>{order.paymentMethod}</td>
                        <td>{order.amount}</td>
                        <td>
                          <Button
                            variant="secondary"
                            className="border-0 h-25 w-75 text-center"
                            style={{
                              color: order.status.color,
                              backgroundColor: order.status.bgColor,
                            }}
                          >
                            {order.status.label}
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
                      <td colSpan="9" className="text-center">
                        No results found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <p>
                Showing {paginatedOrderData.length} of {filteredOrderData.length}{" "}
                Results
              </p>
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                />
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item
                    key={i}
                    active={i + 1 === page}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                />
              </Pagination>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <ShowModel show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default OrderTable;
