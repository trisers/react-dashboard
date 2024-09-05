import React from "react";
import {
  Table,
  Button,
  Form,
  Badge,
  Pagination,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import './productOrdersTable.css'

const ProductOrdersTable = () => {
  return (
    <Card className="mb-4 mt-2">
      <Card.Body>
        <div className="container-fluid mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
            <h4>Product Orders</h4>
            <div className="d-flex align-items-end gap-2">
              {" "}
              <InputGroup style={{ maxWidth: "300px" }}>
                <FormControl placeholder="Search for..." aria-label="Search" />
              </InputGroup>
              <Button variant="primary">Export</Button>
            </div>
          </div>

          <Table responsive bordered hover>
            <thead className="">
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
              <tr>
                <td>01</td>
                <td>#TWT501500365</td>
                <td>Marie Prohaska</td>
                <td>Germany</td>
                <td>08 Jun, 2023</td>
                <td>Credit Card</td>
                <td>05</td>
                <td>$146.99</td>
                <td>$749.95</td>
                <td>
                  <Badge bg="success">Delivered</Badge>
                </td>
                <td>...</td>
              </tr>
              <tr>
                <td>01</td>
                <td>#TWT501500365</td>
                <td>Marie Prohaska</td>
                <td>Germany</td>
                <td>08 Jun, 2023</td>
                <td>Credit Card</td>
                <td>05</td>
                <td>$146.99</td>
                <td>$749.95</td>
                <td>
                  <Badge bg="success">Delivered</Badge>
                </td>
                <td>...</td>
              </tr>
              <tr>
                <td>01</td>
                <td>#TWT501500365</td>
                <td>Marie Prohaska</td>
                <td>Germany</td>
                <td>08 Jun, 2023</td>
                <td>Credit Card</td>
                <td>05</td>
                <td>$146.99</td>
                <td>$749.95</td>
                <td>
                <Badge bg="info">Shipping</Badge>
                </td>
                <td>...</td>
              </tr>
              <tr>
                <td>01</td>
                <td>#TWT501500365</td>
                <td>Marie Prohaska</td>
                <td>Germany</td>
                <td>08 Jun, 2023</td>
                <td>Credit Card</td>
                <td>05</td>
                <td>$146.99</td>
                <td>$749.95</td>
                <td>
                  <Badge bg="success">Delivered</Badge>
                </td>
                <td>...</td>
              </tr>
              <tr>
                <td>01</td>
                <td>#TWT501500365</td>
                <td>Marie Prohaska</td>
                <td>Germany</td>
                <td>08 Jun, 2023</td>
                <td>Credit Card</td>
                <td>05</td>
                <td>$146.99</td>
                <td>$749.95</td>
                <td>
                  <Badge bg="success">Delivered</Badge>
                </td>
                <td>...</td>
              </tr>
              <tr>
                <td>02</td>
                <td>#TWT501500366</td>
                <td>Jaqueline Hammes</td>
                <td>France</td>
                <td>11 July, 2023</td>
                <td>Paypal</td>
                <td>02</td>
                <td>$450.00</td>
                <td>$900.00</td>
                <td>
                  <Badge bg="info">Shipping</Badge>
                </td>
                <td>...</td>
              </tr>
              <tr>
                <td>01</td>
                <td>#TWT501500365</td>
                <td>Marie Prohaska</td>
                <td>Germany</td>
                <td>08 Jun, 2023</td>
                <td>Credit Card</td>
                <td>05</td>
                <td>$146.99</td>
                <td>$749.95</td>
                <td>
                  <Badge bg="success">Delivered</Badge>
                </td>
                <td>...</td>
              </tr>
              <tr>
                <td>02</td>
                <td>#TWT501500366</td>
                <td>Jaqueline Hammes</td>
                <td>France</td>
                <td>11 July, 2023</td>
                <td>Paypal</td>
                <td>02</td>
                <td>$450.00</td>
                <td>$900.00</td>
                <td>
                  <Badge bg="info">Shipping</Badge>
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
  );
};

export default ProductOrdersTable;
