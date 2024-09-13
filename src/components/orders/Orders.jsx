import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import fakeOrderData from "../../../allFakeData/fakeOrderData";
import "./orders.css";
import OrderTable from "./orderTable/OrderTable";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Orders = () => {
  const { totalOrders, newOrders, pendingOrders, shippingOrders, cancelledOrders, chartData, deliveredOrders } = fakeOrderData;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  };

  return (
    <div className="order-lists-container p-4" style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}>
      <h4>Order Lists</h4>
      <Row>
        {/* Cards */}
        <Col>
          {/* first */}
          <Row>
            <Col xs={12} md={6} className="mainCol">
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src={totalOrders.img} alt="Image" className="custom-card-image me-2" />
                    <div>
                      <Card.Title className="mb-0 d-inline">{totalOrders.count}</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">{totalOrders.text}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src={newOrders.img} alt="Image" className="custom-card-image me-2" />
                    <div>
                      <Card.Title className="mb-0 d-inline">{newOrders.count}</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-3 g-2">{newOrders.text}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row>
            <Col xs={12} md={6} className="mainCol">
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src={pendingOrders.img} alt="Image" className="custom-card-image me-2" />
                    <div>
                      <Card.Title className="mb-0 d-inline">{pendingOrders.count}</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">{pendingOrders.text}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src={shippingOrders.img} alt="Image" className="custom-card-image me-2" />
                    <div>
                      <Card.Title className="mb-0 d-inline">{shippingOrders.count}</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">{shippingOrders.text}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Row 3 */}
          <Row>
            <Col xs={12} md={6} className="mainCol">
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src={cancelledOrders.img} alt="Image" className="custom-card-image me-2" />
                    <div>
                      <Card.Title className="mb-0 d-inline">{cancelledOrders.count}</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">{cancelledOrders.text}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src={deliveredOrders.img} alt="Image" className="custom-card-image me-2" />
                    <div>
                      <Card.Title className="mb-0 d-inline">{deliveredOrders.count}</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-3 g-2">{deliveredOrders.text}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Chart */}
        <Col md={8}>
          <Card>
            <Card.Body className="chartManage">
              <h5>Orders Overview</h5>
              <div>
                <Bar data={chartData} options={options} style={{ width: "100%", maxHeight: "300px" }} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <OrderTable />
    </div>
  );
};

export default Orders;
