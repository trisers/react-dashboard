import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./style.css";
import { Dashboard } from "../../../../allFakeData/fakeData";
// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  return (
    <div style={{ position: "relative", height: "300px", width: "300px" }}>
      <Pie data={Dashboard.pieChart} options={Dashboard.dashboardOptions} />
    </div>
  );
};

const ApexRadialChartCard = () => {
  return (
    <Card className="mb-4 card-custom">
      <Card.Body>
        <Card.Title>Traffic Resources</Card.Title>
        <div
          className="d-flex justify-content-center my-4"
          style={{ height: "275px" }}
        >
          <PieChart />
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>Search Engine (22%)</ListGroup.Item>
          <ListGroup.Item>Referral (34%)</ListGroup.Item>
          <ListGroup.Item>Direct (44%)</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ApexRadialChartCard;
