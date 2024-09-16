import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Dashboard } from '../../../../allFakeData/fakeData'; 

const CustomerServiceCard3 = () => {
  const { topSellingProducts } = Dashboard.customerServiceCard3; 

  return (
    <Card className="flex-fill">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mt-2">Top Selling Products</Card.Title>
        <ListGroup variant="flush" className="mt-2">
          {topSellingProducts.map((product, idx) => (
            <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start">
                <Image
                  src={product.image} 
                  roundedCircle
                  alt="Product Avatar"
                  style={{ height: "35px", width: "35px" }}
                  className="mr-3"
                />
                <div>
                  {product.name}
                  <br />
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < product.rating ? 'text-warning' : 'text-secondary'}
                    />
                  ))}
                </div>
              </div>
              <div className="d-flex align-items-center">
                <HiOutlineShoppingCart className="mr-2" />
                <span>{product.sold}</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CustomerServiceCard3;
