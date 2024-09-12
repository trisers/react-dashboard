import React from "react";
import { Card, Button } from "react-bootstrap";
import "./orderStatisticsChart.css";
import { FaArrowRight } from "react-icons/fa";
import { Line } from 'react-chartjs-2';

const lineData = {
  labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  datasets: [
    {
      label: "Sales",
      data: [30, 50, 40, 60, 70, 50, 60, 80],
      fill: true,
      borderColor: "rgba(255, 99, 132, 1)",
      tension: 0.4,
    },
    {
      label: "Profit",
      data: [20, 40, 30, 50, 60, 40, 50, 70],
      fill: true,
      borderColor: "rgba(54, 162, 235, 1)",
      tension: 0.4,
    },
  ],
};


export default function OrderStatisticsChart() {
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
        <Line data={lineData} className="h-75" />
        </div>
      </Card.Body>
    </Card>
  );
}
