import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const CustomerServiceCard3 = () => {
  return (
    <Card className="flex-fill">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mt-3">Top Selling Products</Card.Title>
        <ListGroup variant="flush" className="mt-auto">
          {[...Array(4)].map((_, idx) => (
            <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start">
                <Image
                  src="https://via.placeholder.com/50"
                  roundedCircle
                  alt="Product Avatar"
                  style={{ height: "35px", width: "35px" }}
                  className="mr-3"
                />
                <div>
                  Mesh Ergonomic Black Chair
                  <br />
                  {[...Array(5)].map((_, starIdx) => (
                    <FaStar key={starIdx} className={starIdx < 4 ? "text-warning" : "text-secondary"} />
                  ))}
                </div>
              </div>
              <div className="d-flex align-items-center">
                <HiOutlineShoppingCart className="mr-2" />
                <span>798</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CustomerServiceCard3;
