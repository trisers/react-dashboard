import React from "react";
import { Card, ProgressBar, ListGroup, Image } from "react-bootstrap";
import { Dashboard } from "../../../../allFakeData/fakeData";

const CustomerServiceCard1 = () => {
  const { percent, reachedPercent, month, topCustomers } =
    Dashboard.customerServiceCard1;

  return (
    <Card className="flex-fill">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mt-2">Customer Service</Card.Title>
        <p>
          {percent}% of the Goal Reached ({reachedPercent})
        </p>
        <ProgressBar now={parseInt(percent)} className="mb-3" />
        <p>
          This Month: <strong>{month}</strong>
        </p>
        <ListGroup variant="flush" className="mt-auto">
          <h6>Top Customers</h6>
          {topCustomers.map((customer, idx) => (
            <ListGroup.Item
              key={idx}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <Image
                  src={customer.avatar}
                  alt="Customer"
                  roundedCircle
                  className="mr-2"
                  style={{ height: "35px", width: "35px" }}
                />
                {customer.name}
              </div>
              <span>{customer.amount}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CustomerServiceCard1;
