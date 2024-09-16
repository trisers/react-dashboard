import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Dashboard } from '../../../../allFakeData/fakeData'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarChart = () => {
  return <Bar data={Dashboard.barChartConfig} options={Dashboard.options} />;
};

export default BarChart;
