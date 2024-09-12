import React from "react";
import { FaSearch, FaDownload } from "react-icons/fa";
import {
  Table,
  Button,
  Badge,
  Pagination,
  FormControl,
  Card,
} from "react-bootstrap";
import "./productOrdersTable.css";
import { Dashboard } from "../../../../fakeData.js";

const productOrdersTableData = Dashboard.productOrdersTable;

const ProductOrdersTable = () => {
  return (
    <Card className="mb-4 mt-4">
      <Card.Body>
        <div className="container-fluid mt-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5>Product Orders</h5>
            <div className="d-flex align-items-end gap-2">
              <div className="position-relative">
                <FaSearch className="search-icon" />
                <FormControl placeholder="Search for..." aria-label="Search" />
              </div>
              <Button variant="primary">
                <FaDownload className="me-2" /> Download
              </Button>
            </div>
          </div>
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Location</th>
                <th>Order Date</th>
                <th>Payments</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productOrdersTableData.map((items, index) => (
                <tr key={index}>
                  <td>{items.id}</td>
                  <td>{items.orderId}</td>
                  <td>{items.customerName}</td>
                  <td>{items.location}</td>
                  <td>{items.orderDate}</td>
                  <td>{items.payments}</td>
                  <td>{items.quantity}</td>
                  <td>{items.price}</td>
                  <td>{items.totalAmount}</td>
                  <td>
                    <Badge 
                      className={
                        items.status.toLowerCase() === "delivered" ? "badge-delivered" :
                        items.status.toLowerCase() === "shipping" ? "badge-shipping" :
                        items.status.toLowerCase() === "pending" ? "badge-pending" :
                        items.status.toLowerCase() === "new" ? "badge-new" :
                        ""
                      }
                    >
                      {items.status}
                    </Badge>
                  </td>
                  <td>...</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center">
            <p>Showing 07 of 19 Results</p>
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
  );
};

export default ProductOrdersTable;
