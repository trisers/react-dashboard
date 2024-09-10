import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import img from "/assets/banner/one.png";
import img1 from "/assets/banner/two.png";
import img2 from "/assets/banner/three.png";
import img3 from "/assets/banner/four.png";
import "./orders.css";
import OrderTable from "./orderTable/OrderTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Orders = () => {
  // Data for the bar chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Order Percentage",
        data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, 3.4, 5.5, 8.8],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  };

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
    <div className="order-lists-container p-4"
    style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}>
      <h4>Order Lists</h4>

      <Row>


        {/* Cards */}
        <Col >
          {/* first */}
          <Row>
            <Col xs={12} md={6} className="mainCol">
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img
                      src={img}
                      alt="Image"
                      className="custom-card-image me-2"
                    />
                    <div>
                      <Card.Title className="mb-0 d-inline">17,150</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">Totals Orders</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img
                      src={img1}
                      alt="Image"
                      className="custom-card-image me-2"
                    />
                    <div>
                      <Card.Title className="mb-0 d-inline">3,519</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-3 g-2">New's Orders</Card.Text>
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
                    <img
                      src={img2}
                      alt="Image"
                      className="custom-card-image me-2"
                    />
                    <div>
                      <Card.Title className="mb-0 d-inline">17,150</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">Pending Order</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img
                      src={img3}
                      alt="Image"
                      className="custom-card-image me-2"
                    />
                    <div>
                      <Card.Title className="mb-0 d-inline">3,519</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">Shipping Orders</Card.Text>
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
                    <img
                      src={img2}
                      alt="Image"
                      className="custom-card-image me-2"
                    />
                    <div>
                      <Card.Title className="mb-0 d-inline">17,150</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">Shipping Order</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="text-center p-1 h-75">
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img
                      src={img3}
                      alt="Image"
                      className="custom-card-image me-2"
                    />
                    <div>
                      <Card.Title className="mb-0 d-inline">3,519</Card.Title>
                      <br />
                      <Card.Text className="d-inline ms-2">Cancelled Order</Card.Text>
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
                {" "}
                <Bar data={data} options={options}  style={{ width: "100%", maxHeight:"300px" }}/>
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
