import React from "react";
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

const OrderTable = () => {
  const { orderTableData } = fakeOrderData;

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
                  />
                </div>
              </div>

              <div className="col-md-5"></div>

              <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                <Button variant="primary">+ Add Orders</Button>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <Button
                variant="outline-primary"
                className="border-0 d-inline-flex align-items-center buttononee"
              >
                <FaBox className="me-2" /> All orders
              </Button>
              <Button
                variant="outline-primary"
                className="border-0 d-inline-flex align-items-center buttonn"
              >
                <FaClock className="me-2" /> Pending
              </Button>
              <Button
                variant="outline-primary"
                className="border-0 d-inline-flex align-items-center buttonn"
              >
                <FaTruck className="me-2" /> Delivery
              </Button>
              <Button
                variant="outline-primary"
                className="border-0 d-inline-flex align-items-center buttonn"
              >
                <FaUndoAlt className="me-2" /> Return
              </Button>
              <Button
                variant="outline-primary"
                className="border-0 d-inline-flex align-items-center buttonn"
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
                  {orderTableData.map((order, index) => (
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
                        {" "}
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
                  ))}
                </tbody>
              </Table>
            </div>

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
    </div>
  );
};

export default OrderTable;
