import React from 'react';
import { Card, ProgressBar, ListGroup, Image } from 'react-bootstrap';

const CustomerServiceCard1 = () => {
  return (
    <Card className="flex-fill">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mt-2">Customer Service</Card.Title>
        <p>28% of the Goal Reached ($25k)</p>
        <ProgressBar now={28} className="mb-3" />
        <p>
          This Month: <strong>$13,741</strong>
        </p>
        <ListGroup variant="flush" className="mt-auto">
          <h6>Top Customer</h6>
          {["Urrie Arthur", "Laurie Jackson", "Natalie Christy"].map((customer, idx) => (
            <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image
                  src={`https://i.pravatar.cc/3${idx + 1}`}
                  alt="Customer"
                  roundedCircle
                  className="mr-2"
                  style={{ height: "35px", width: "35px" }}
                />
                {customer}
              </div>
              <span>$2,452</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CustomerServiceCard1;
