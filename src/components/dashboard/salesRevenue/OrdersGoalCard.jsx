import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";
import { Dashboard } from "../../../../fakeData";

const OrdersGoalCard = () => {
  const items = Dashboard.ordersGoalCard;

  return (
    <Card style={{ height: "180px" }}>
      <Card.Body>
        <Row>
          <Col>
            <h4>{items.digit}</h4>
            <h6>Monthly Orders Goal ({items.ordersGoal})</h6>
          </Col>
          <Col className="text-end">
            <span className="text-danger">↓ {items.percent}%</span>
          </Col>
        </Row>
        <p>Total Orders</p>
        <ProgressBar now={items.progressbar} label={`${items.progressbar}%`} style={{ height: "18px" }} />
      </Card.Body>
    </Card>
  );
};

export default OrdersGoalCard;
