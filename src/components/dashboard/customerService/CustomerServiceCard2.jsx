import React from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const CustomerServiceCard2 = ({ lineData }) => {
  return (
    <Card className="flex-fill">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-start mt-3">Sales This Month</Card.Title>
        <h6 className="text-start">Total Profit: $746.84k</h6>
        <div className="mt-4 flex-grow-1">
          <Line data={lineData} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerServiceCard2;
