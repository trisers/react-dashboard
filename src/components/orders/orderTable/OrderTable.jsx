import React from "react";
import {
  Table,
  Button,
  Pagination,
  FormControl,
  Card,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./orderTable.css";
import { FaBox, FaClock, FaTruck, FaUndoAlt, FaTimes } from 'react-icons/fa'; 
import './orderTable.css'

const OrderTable = () => {
  const buttonStyle = { color: '#64748B' };
  
  return (
    <div>
      <Card className="mb-4 mt-0">
        <Card.Body>
          <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
              <div className="d-flex align-items-end gap-2">
                {" "}
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
              <Button variant="primary" className="flex-end">
                + Add Orders
              </Button>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-3"> 
      <Button variant="outline-primary" className="border-0 d-inline-flex align-items-center buttononee" style={buttonStyle}>
        <FaBox className="me-2" /> All orders
      </Button>
      <Button variant="outline-primary" className="border-0 d-inline-flex align-items-center buttonone" style={buttonStyle}>
        <FaClock className="me-2" /> Pending
      </Button>
      <Button variant="outline-primary" className="border-0 d-inline-flex align-items-center buttonone" style={buttonStyle}>
        <FaTruck className="me-2" /> Delivery
      </Button>
      <Button variant="outline-primary" className="border-0 d-inline-flex align-items-center buttonone" style={buttonStyle}>
        <FaUndoAlt className="me-2" /> Return
      </Button>
      <Button variant="outline-primary" className="border-0 d-inline-flex align-items-center buttonone" style={buttonStyle}>
        <FaTimes className="me-2" /> Cancelled
      </Button>
    </div>

            <Table responsive bordered hover>
              <thead className="">
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
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#TWT501500365</td>
                  <td>08 Jun, 2023</td>
                  <td>15 Jun, 2023</td>
                  <td>Marie Prohaska</td>
                  <td>Credit Card</td>
                  <td>$24,365</td>

                  <td>
                    <Button
                      variant="secondary"
                      className=" border-0 h-25 w-75 text-center"
                      style={{ color: "#249782", backgroundColor: "#D2F4EE" }}
                    >
                      Publish
                    </Button>{" "}
                  </td>
                  <td>...</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#TWT501500365</td>
                  <td>08 Jun, 2023</td>
                  <td>15 Jun, 2023</td>
                  <td>Marie Prohaska</td>
                  <td>Credit Card</td>
                  <td>$24,365</td>

                  <td>
                    <Button
                      variant="secondary"
                      className=" border-0 h-25 w-75 text-center"
                      style={{ color: "#EF4444", backgroundColor: "#FEE2E2" }}
                    >
                      Inactive
                    </Button>{" "}
                  </td>
                  <td>...</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#TWT501500365</td>
                  <td>08 Jun, 2023</td>
                  <td>15 Jun, 2023</td>
                  <td>Marie Prohaska</td>
                  <td>Credit Card</td>
                  <td>$24,365</td>

                  <td>
                    <Button
                      variant="secondary"
                      className=" border-0 h-25 w-75 text-center"
                      style={{ color: "#F97316", backgroundColor: "#FFEDD5" }}
                    >
                      Cancelled
                    </Button>{" "}
                  </td>
                  <td>...</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#TWT501500365</td>
                  <td>08 Jun, 2023</td>
                  <td>15 Jun, 2023</td>
                  <td>Marie Prohaska</td>
                  <td>Credit Card</td>
                  <td>$24,365</td>

                  <td>
                    <Button
                      variant="secondary"
                      className=" border-0 h-25 w-75 text-center"
                      style={{ color: "#F97316", backgroundColor: "#FFEDD5" }}
                    >
                      Cancelled
                    </Button>{" "}
                  </td>
                  <td>...</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#TWT501500365</td>
                  <td>08 Jun, 2023</td>
                  <td>15 Jun, 2023</td>
                  <td>Marie Prohaska</td>
                  <td>Credit Card</td>
                  <td>$24,365</td>

                  <td>
                    <Button
                      variant="secondary"
                      className=" border-0 h-25 w-75 text-center"
                      style={{ color: "#249782", backgroundColor: "#D2F4EE" }}
                    >
                      Publish
                    </Button>{" "}
                  </td>
                  <td>...</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#TWT501500365</td>
                  <td>08 Jun, 2023</td>
                  <td>15 Jun, 2023</td>
                  <td>Marie Prohaska</td>
                  <td>Credit Card</td>
                  <td>$24,365</td>

                  <td>
                    <Button
                      variant="secondary"
                      className=" border-0 h-25 w-75 text-center"
                      style={{ color: "#F97316", backgroundColor: "#FFEDD5" }}
                    >
                      Cancelled
                    </Button>{" "}
                  </td>
                  <td>...</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#TWT501500365</td>
                  <td>08 Jun, 2023</td>
                  <td>15 Jun, 2023</td>
                  <td>Marie Prohaska</td>
                  <td>Credit Card</td>
                  <td>$24,365</td>

                  <td>
                    <Button
                      variant="secondary"
                      className=" border-0 h-25 w-75 text-center"
                      style={{ color: "#249782", backgroundColor: "#D2F4EE" }}
                    >
                      Publish
                    </Button>{" "}
                  </td>
                  <td>...</td>
                </tr>
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
    </div>
  );
};

export default OrderTable;
