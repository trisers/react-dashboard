import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

const CustomerServiceCard4 = ({ barData }) => {
  return (
    <Card className="flex-fill">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mt-2 mb-4">Audience</Card.Title>
        <div className="flex-grow-1">
          <Bar data={barData} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerServiceCard4;
