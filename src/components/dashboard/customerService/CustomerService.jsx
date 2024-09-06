import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'chart.js/auto';
import CustomerServiceCard1 from './CustomerServiceCard1';
import CustomerServiceCard2 from './CustomerServiceCard2';
import CustomerServiceCard3 from './CustomerServiceCard3';
import CustomerServiceCard4 from './CustomerServiceCard4';
import './customerService.css';

const CustomerService = () => {
  const lineData = {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 40, 60, 70, 50, 60, 80],
        fill: true,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
      },
      {
        label: "Profit",
        data: [20, 40, 30, 50, 60, 40, 50, 70],
        fill: true,
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Jan 01", "Jan 03", "Jan 05", "Jan 07"],
    datasets: [
      {
        label: "New Visitors",
        data: [44, 55, 67, 43],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Returning Visitors",
        data: [13, 23, 35, 22],
        backgroundColor: "rgba(255, 159, 64, 0.5)",
      },
    ],
  };

  return (
    <Container fluid className="mt-4">
      <Row className="d-flex">
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard1 />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard2 lineData={lineData} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard3 />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard4 barData={barData} />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerService;