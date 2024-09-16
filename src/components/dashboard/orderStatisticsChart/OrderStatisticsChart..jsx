import React from "react";
import { Card, Button } from "react-bootstrap";
import "./orderStatisticsChart.css";
import { FaArrowRight } from "react-icons/fa";
import { Line } from 'react-chartjs-2';
import { Dashboard } from '../../../../allFakeData/fakeData'; 

export default function OrderStatisticsChart() {
  
  const { orderStatistics } = Dashboard;

  return (
    <Card className="text-start p-1 h-100">
      <Card.Body>
        <Card.Title className="card-title-container">
          <span className="card-title-text">Order Statistics</span>
          <Button variant="link" className="card-title-button">
            View All {" "}<FaArrowRight />
          </Button>
        </Card.Title>

        <div className="h-75 mt-4">
          {/* Pass the correct orderStatistics to the Line component */}
          <Line data={orderStatistics} className="h-75" />
        </div>
      </Card.Body>
    </Card>
  );
}
