import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

const OrdersGoalCard = () => {
  return (
    <Card style={{height:"180px"}}>
      <Card.Body>
        <Row>
          <Col>
            <h4>1,596</h4>
            <p>Monthly Orders Goal (20000+)</p>
          </Col>
          <Col className="text-end">
            <span className="text-danger">↓ 6.8%</span>
          </Col>
        </Row>
        <Card.Title style={{ fontSize: "16px" }}>Total Orders</Card.Title>
        <ProgressBar now={85} label={`${85}%`} style={{ height: "12%" }} />
      </Card.Body>
    </Card>
  );
};

export default OrdersGoalCard;
