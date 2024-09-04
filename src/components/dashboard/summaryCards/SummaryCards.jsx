import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img from "/assets/banner/one.png";
import img1 from "/assets/banner/two.png";
import img2 from "/assets/banner/three.png";
import img3 from "/assets/banner/four.png";
import "./summaryCards.css";
export default function SummaryCards() {
  return (
    <Row>
      <Col xs={12} md={3}>
        <Card className="text-center p-3 h-100">
          <div className="custom-card-image-container">
            <img src={img} alt="Image" className="custom-card-image" />
          </div>
          <Card.Body>
            <Card.Title>$236.18k</Card.Title>
            <Card.Text>Total Revenue</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={3}>
        <Card className="text-center p-3 h-100">
          <div className="custom-card-image-container">
            <img src={img1} alt="Image" className="custom-card-image" />
          </div>
          <Card.Body>
            <Card.Title>13,461</Card.Title>
            <Card.Text>Total Orders</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={3}>
        <Card className="text-center p-3 h-100">
          <div className="custom-card-image-container">
            <img src={img2} alt="Image" className="custom-card-image" />
          </div>
          <Card.Body>
            <Card.Title>17,150</Card.Title>
            <Card.Text>Delivered</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={3}>
        <Card className="text-center p-3 h-100">
          <div className="custom-card-image-container">
            <img src={img3} alt="Image" className="custom-card-image" />
          </div>
          <Card.Body>
            <Card.Title>3,519</Card.Title>
            <Card.Text>Cancelled</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
