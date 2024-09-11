import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const data = {
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    datasets: [
      {
        data: [44, 55, 67, 83],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: 'relative', height: '300px', width: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

const ApexRadialChartCard = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Traffic Resources</Card.Title>
        <div className="d-flex justify-content-center my-4" style={{ height: '275px' }}>
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
