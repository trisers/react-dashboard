import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'chart.js/auto';
import CustomerServiceCard1 from './CustomerServiceCard1';
import CustomerServiceCard2 from './CustomerServiceCard2';
import CustomerServiceCard3 from './CustomerServiceCard3';
import CustomerServiceCard4 from './CustomerServiceCard4';
import { Dashboard } from '../../../../fakeData'; 
import './customerService.css';

const CustomerService = () => {



  return (
    <Container fluid className="mt-4 p-0">
      <Row className="d-flex">
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard1 />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard2 lineData={Dashboard.salesLineChartData} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard3 />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4 d-flex">
          <CustomerServiceCard4 barData={Dashboard.barData} />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerService;
