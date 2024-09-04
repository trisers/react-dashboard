import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import BarChart from "./BarChart";

const TotalSalesCard = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Row className="mb-3">
          <Col>
            <Card.Title>Sales Revenue Overview</Card.Title>
          </Col>
          <Col className="d-flex justify-content-end">
            <input
              type="date"
              className="form-control"
              style={{ width: "150px" }}
              placeholder="Select the date"
            />
          </Col>
        </Row>

        <Row className="g-2">
          <Col sm={6} style={{ fontSize: "14px" }}>
            <h4>Total Sales</h4>
            <h3 style={{ fontSize: "16px" }}>$1,517.36k</h3>
          </Col>
          <Col sm={6} style={{ fontSize: "14px" }}>
            <h4>Total Profit</h4>
            <h3 style={{ fontSize: "16px" }}>$746.84k</h3>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <BarChart />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TotalSalesCard;
