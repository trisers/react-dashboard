import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./summaryCards.css";
import { Dashboard } from "../../../../fakeData.js";

export default function SummaryCards() {
  const overallData = Dashboard.overAll;
  return (
    <Row>
      {overallData.map((item, index) => (
        <Col xs={12} md={3} key={item.id || index}>
          <Card className="text-center p-3 h-100">
            <div className="custom-card-image-container">
              <img
                src={item.img}
                alt={item.name}
                className="custom-card-image"
              />
            </div>
            <Card.Body>
              <Card.Title>{item.amount}</Card.Title>
              <Card.Text>{item.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
