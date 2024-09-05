import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TotalSalesCard from "./TotalSalesCard";
import ApexRadialChartCard from "./ApexRadialChartt";
import OrdersGoalCard from "./OrdersGoalCard";

const SalesRevenue = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col lg={8}>
          <TotalSalesCard />
        </Col>

        <Col lg={4}>
          <ApexRadialChartCard />
          <OrdersGoalCard />
        </Col>
      </Row>
    </Container>
  );
};

export default SalesRevenue;
