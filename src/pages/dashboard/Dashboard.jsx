import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WelcomeCard from "../../components/dashboard/welcomeCard/WelcomeCard";
import SummaryCards from "../../components/dashboard/summaryCards/SummaryCards";
import OrderStatisticsChart from "../../components/dashboard/orderStatisticsChart/OrderStatisticsChart.";
import SalesRevenue from "../../components/dashboard/salesRevenue/SalesRevenue";
import ProductOrdersTable from "../../components/dashboard/productOrdersTable/ProductOrdersTable";
import CustomerService from "../../components/dashboard/customerService/CustomerService";

export default function Dashboard() {
  return (
    <Container fluid className="py-4 h-100" style={{backgroundColor:"#F1F5F9"}}>
      <h5 className="mt-1 mb-4">Ecommerce</h5>
      <Row className="mb-4">
        <Col xs={12} md={8}>
          <WelcomeCard />
          <br />
          <SummaryCards />
        </Col>
        <Col xs={12} md={4}>
          <OrderStatisticsChart />
        </Col>
      </Row>
      <SalesRevenue />
      <ProductOrdersTable />
      <CustomerService />
      {/* <ShoppingCart /> */}
    </Container>
  );
}
