import React from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';

const ShoppingCart = () => {
  return (
    <Container fluid className="p-4">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Shopping Cart</h5>
          <Button variant="link" className="text-decoration-none">×</Button>
        </Card.Header>
        <Card.Body>
          <div className="mb-3 p-2 bg-light text-success">
            <small>TAILWICK50 Coupon code applied successfully.</small>
          </div>
          
          <ListGroup variant="flush">
            {/* Item 1 */}
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/50" alt="Product" className="me-3" />
                <div>
                  <h6 className="mb-1">Cotton collar t-shirts for men</h6>
                  <small className="text-muted">$155.32 (Fashion)</small>
                  <div className="mt-2 d-flex align-items-center">
                    <Button variant="outline-secondary" size="sm" className="me-2">-</Button>
                    <span>4</span>
                    <Button variant="outline-secondary" size="sm" className="ms-2">+</Button>
                  </div>
                </div>
              </div>
              <span>$310.64</span>
              <Button variant="link" className="text-decoration-none">×</Button>
            </ListGroup.Item>
            
            {/* Item 2 */}
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/50" alt="Product" className="me-3" />
                <div>
                  <h6 className="mb-1">Like style travel black handbag</h6>
                  <small className="text-muted">$349.95 (Luggage)</small>
                  <div className="mt-2 d-flex align-items-center">
                    <Button variant="outline-secondary" size="sm" className="me-2">-</Button>
                    <span>4</span>
                    <Button variant="outline-secondary" size="sm" className="ms-2">+</Button>
                  </div>
                </div>
              </div>
              <span>$349.95</span>
              <Button variant="link" className="text-decoration-none">×</Button>
            </ListGroup.Item>

            {/* Item 3 */}
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/50" alt="Product" className="me-3" />
                <div>
                  <h6 className="mb-1">Blive Printed Men Round Neck</h6>
                  <small className="text-muted">$546.74 (Fashion)</small>
                  <div className="mt-2 d-flex align-items-center">
                    <Button variant="outline-secondary" size="sm" className="me-2">-</Button>
                    <span>4</span>
                    <Button variant="outline-secondary" size="sm" className="ms-2">+</Button>
                  </div>
                </div>
              </div>
              <span>$2,186.96</span>
              <Button variant="link" className="text-decoration-none">×</Button>
            </ListGroup.Item>
          </ListGroup>

          {/* Price Summary */}
          <div className="mt-4">
            <Row className="mb-2">
              <Col>Sub Total :</Col>
              <Col className="text-end">$2,847.55</Col>
            </Row>
            <Row className="mb-2">
              <Col>Discount (TAILWICK50):</Col>
              <Col className="text-end text-danger">- $476.00</Col>
            </Row>
            <Row className="mb-2">
              <Col>Shipping Charge :</Col>
              <Col className="text-end">$89.00</Col>
            </Row>
            <Row className="mb-2">
              <Col>Estimated Tax (12.5%):</Col>
              <Col className="text-end">$70.62</Col>
            </Row>
            <hr />
            <Row className="mb-3">
              <Col><strong>Total :</strong></Col>
              <Col className="text-end"><strong>$2,531.17</strong></Col>
            </Row>
          </div>

          {/* Action Buttons */}
          <Row className="mt-4">
            <Col>
              <Button variant="outline-secondary" className="w-100">Continue Shopping</Button>
            </Col>
            <Col>
              <Button variant="danger" className="w-100">Checkout</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShoppingCart;
