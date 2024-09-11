import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import BarChart from "./BarChart";
import img from "/assets/salesImage/one.png";
import img1 from "/assets/salesImage/two.png";

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
          <Col sm={6}>
            <div className="d-flex align-items-center">
              <img src={img} alt="Sales Icon" style={{ marginRight: "8px" }} />
              <div>
                <p className="m-0">Total Sales</p>
                <p className="m-0"> $1,517.36k</p>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="d-flex align-items-center">
              <img
                src={img1}
                alt="Profit Icon"
                style={{ marginRight: "8px" }}
              />
              <div>
                <p className="m-0">Total Profit</p>
                <p className="m-0"> $746.84k</p>
              </div>
            </div>
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
