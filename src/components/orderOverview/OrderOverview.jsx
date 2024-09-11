import React from "react";
import "./orderOverview.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img from "../../../public/assets/orderSummary/img.png";
import img1 from "../../../public/assets/orderSummary/img1.png";
import img2 from "../../../public/assets/orderSummary/img2.png";

const OrderOverview = () => {
  const steps = [
    {
      label: "Order Placed",
      description: "Your order has been successfully submitted.",
      date: "02 Nov, 2023",
    },
    {
      label: "Order Processing",
      description:
        "Once the order is received, it goes through the processing stage. During this time, the items are gathered, and the order is prepared for shipment.",
      date: "02 Nov, 2023",
    },
    {
      label: "Shipped Order",
      description:
        "The order is shipped out to the customer’s designated delivery address.",
      date: "04 Nov, 2023",
    },
    {
      label: "Out for Delivery",
      description:
        "This status indicates that the order is currently out for delivery by the shipping or courier company.",
      date: "06 Nov, 2023",
    },
    {
      label: "Delivered",
      description:
        'Finally, when the order successfully reaches the customer’s address and is handed over, the status changes to "Delivered."',
      date: "09 Nov, 2023",
    },
  ];

  return (
    <Container
      fluid
      className="p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <h4>Order Overview</h4>
      <Row className="gy-4">
        <Col md={9}>
          {/* Shipping Details */}
          <Row className="gy-4">
            <Col lg={4} md={6}>
              <Card className="p-3">
                <Card.Body>
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="me-auto">
                      <h6 className="mb-1">Shipping Details</h6>
                      <p className="mb-0">Pauline Hylton</p>
                      <p className="text-muted mb-0">
                        Techinfini Airen Heights, 402
                        <br />
                        Indore, IND
                      </p>
                    </div>
                    <i className="bi bi-truck fs-3 text-primary"></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Billing Details */}
            <Col lg={4} md={6}>
              <Card className="p-3">
                <Card.Body>
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="ms-3">
                      <h6 className="mb-1">Billing Details</h6>
                      <p className="mb-0">Pauline Hylton</p>
                      <p className="text-muted mb-0">
                        Techinfini Airen Heights, 402
                        <br />
                        Indore, IND
                      </p>
                    </div>
                    <i className="bi bi-credit-card fs-3 text-warning"></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Payment Details */}
            <Col lg={4} md={6}>
              <Card className="p-3">
                <Card.Body>
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="me-auto">
                      <h6 className="mb-1">Payment Details</h6>
                      <p className="mb-0">
                        ID: <strong>#TSD456DF41SD5</strong>
                      </p>
                      <p className="mb-0">Payment Method: Credit Card</p>
                      <p className="text-muted mb-0">
                        Card Number: xxxx xxxx xxxx 1501
                      </p>
                    </div>
                    <i className="bi bi-credit-card fs-3 text-primary"></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Order ID */}
            <Col lg={3} md={6}>
              <Card className="p-1">
                <Card.Body className="d-flex flex-column align-items-center">
                  <h6 className="mb-2 text-center">
                    <span className="border-bottom custom-underline pb-1">
                      #TWT5015100366
                    </span>
                  </h6>
                  <p className="text-muted mb-0">ORDER ID</p>
                </Card.Body>
              </Card>
            </Col>

            {/* Order Date */}
            <Col lg={3} md={6}>
              <Card className="p-1">
                <Card.Body className="d-flex flex-column align-items-center">
                  <h6 className="mb-2 text-center">02 Nov, 2023</h6>
                  <p className="text-muted mb-0">ORDER DATE</p>
                </Card.Body>
              </Card>
            </Col>

            {/* Delivery Date */}
            <Col lg={3} md={6}>
              <Card className="p-1">
                <Card.Body className="d-flex flex-column align-items-center">
                  <h6 className="mb-2 text-center">09 Nov, 2023</h6>
                  <p className="text-muted mb-0">DELIVERY DATE</p>
                </Card.Body>
              </Card>
            </Col>

            {/* Order Amount */}
            <Col lg={3} md={6}>
              <Card className="p-1">
                <Card.Body className="d-flex flex-column align-items-center">
                  <h6 className="mb-2 text-center">$843.49</h6>
                  <p className="text-muted mb-0">ORDER AMOUNT</p>
                </Card.Body>
              </Card>
            </Col>

            {/* Order Summary */}
            <Col lg={12} md={6}>
              <Card className="p-2">
                <Card.Body>
                  <h5>Order Summary</h5>
                  <br />

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        src={img}
                        alt="Item"
                        style={{ width: "40px", height: "40px" }}
                        className="me-3"
                      />
                      <div>
                        <h6 className="mb-0">Roar Twill Blue Baseball Cap</h6>
                        <small className="text-muted">$149.99 x 02</small>
                      </div>
                    </div>
                    <p className="mb-0">$299.98</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        src={img1}
                        alt="Item"
                        style={{ width: "40px", height: "40px" }}
                        className="me-3"
                      />
                      <div>
                        <h6 className="mb-0">Mesh Ergonomic Green Chair</h6>
                        <small className="text-muted">$362.21 x 01</small>
                      </div>
                    </div>
                    <p className="mb-0">$362.21</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        src={img2}
                        alt="Item"
                        style={{ width: "40px", height: "40px" }}
                        className="me-3"
                      />
                      <div>
                        <h6 className="mb-0">Smartest Printed T-shirt</h6>
                        <small className="text-muted">$89.99 x 03</small>
                      </div>
                    </div>
                    <p className="mb-0">$269.97</p>
                  </div>

                  {/* Totals */}
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-muted">Sub Total</p>
                    <p className="mb-0">$932.16</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted">Estimated Tax (18%)</p>
                    <p className="mb-0">$167.79</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted">Item Discounts (12%)</p>
                    <p className="mb-0">-$111.86</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted">Shipping Charge</p>
                    <p className="mb-0">$0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Total Amount (USD)</p>
                    <h5 className="mb-0">$988.09</h5>
                  </div>
                  {/* <div className="d-flex justify-content-end">
                <Button variant="danger" className="me-2">Cancelled Order</Button>
              </div> */}
                </Card.Body>
              </Card>
            </Col>

            {/* Order Status */}
            <Col lg={12} md={12} sm={12} xs={12}>
              <Card className="p-3">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <h5 className="mb-2 mb-md-0">Order Status</h5>
                  <div>
                    <Button variant="danger" className="me-md-2 mb-2 mb-md-0">
                      Cancelled Order
                    </Button>
                    <Button variant="primary">
                      <i className="bi bi-download me-2"></i> Invoice
                    </Button>
                  </div>
                </div>


                <Card.Body>
                  {steps.map((step, index) => (
                    <Row key={index} className="align-items-center mb-4">
                      <Col xs={1} className="text-center">
                        <div className="status-icon">
                          <i
                            className={`bi bi-${
                              index === 0
                                ? "house-door"
                                : index === 1
                                ? "clock"
                                : index === 2
                                ? "truck"
                                : index === 3
                                ? "box"
                                : "check-circle"
                            }`}
                            style={{ fontSize: "24px", color: "#007bff" }}
                          ></i>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="status-line" />
                        )}
                      </Col>
                      <Col xs={9}>
                        <h6>{step.label}</h6>
                        <p>{step.description}</p>
                      </Col>
                      <Col xs={2} className="text-end">
                        <p className="text-muted">{step.date}</p>
                      </Col>
                    </Row>
                  ))}
                </Card.Body>

                
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={3}>
          {/* Customer Info */}
          <Card className="p-3">
            <Card.Body>
              <div className="d-flex align-items-start justify-content-between">
                <div className="me-auto">
                  <h6 className="mb-1">Customer Info</h6>
                  <p className="mb-0">Pauline Hylton</p>
                  <p className="text-muted mb-0">Gaurav@techinfini.com</p>
                  <p className="mb-0">(+91) 123 456 789</p>
                </div>
                <i className="bi bi-person fs-3 text-primary"></i>
              </div>
            </Card.Body>
          </Card>

          {/* Document */}
          <Card className="p-3 mt-4">
            <Card.Body>
              <div className="d-flex flex-column p-0">
                <h6 className="mb-1">Document</h6>
                <div className="d-flex align-items-center mb-2">
                  <p className="mb-0 me-2">Invoice Number:</p>
                  <span className="text-primary">#BGGDVGFVDVV</span>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 me-2">Shipping Number:</p>
                  <span className="text-primary">#BGGDVDFEFE</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Logistics Details */}
          <Card className="p-3 mt-4">
            <Card.Body>
              {" "}
              <h6 className="mb-1">Logistics Details</h6>
              <div className="d-flex align-items-center mt-2">
                <i className="bi bi-truck fs-3 text-primary me-3"></i>
                <div className="d-flex flex-column">
                  <p className="mb-0">Express Delivery</p>
                  <p className="text-muted mb-0">ID: EDTW1400457854</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderOverview;
