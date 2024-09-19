import img from "/assets/banner/one.png";
import img1 from "/assets/banner/two.png";
import img2 from "/assets/banner/three.png";
import img3 from "/assets/banner/four.png";

export const Dashboard = {
  overAll: [
    { name: "Total Revenue", amount: "$236.18k", img: img },
    { name: "Total Orders", amount: "236,32", img: img1 },
    { name: "Delivered", amount: "236,212", img: img2 },
    { name: "Cancelled", amount: "236,18", img: img3 },
  ],

  // Product Orders
  productOrdersTable: [
    {
      id: "01",
      orderId: "#TWT501500365",
      customerName: "Marie Prohaska",
      location: "Germany",
      orderDate: "08 Jun, 2023",
      payments: "Credit Card",
      quantity: "05",
      price: "$146.99",
      totalAmount: "$186.99",
      status: "New",
    },
    {
      id: "02",
      orderId: "#TWT501500365",
      customerName: "Marie Prohaska",
      location: "Germany",
      orderDate: "08 Jun, 2023",
      payments: "Credit Card",
      quantity: "05",
      price: "$146.99",
      totalAmount: "$186.99",
      status: "Delivered",
    },
    {
      id: "03",
      orderId: "#TWT501500365",
      customerName: "Marie Prohaska",
      location: "Germany",
      orderDate: "05 Jun, 2022",
      payments: "Credit Card",
      quantity: "10",
      price: "$166.99",
      totalAmount: "$186.99",
      status: "Shipping",
    },
    {
      id: "04",
      orderId: "#TWT501500365",
      customerName: "Marie Prohaska",
      location: "Germany",
      orderDate: "08 Jun, 2023",
      payments: "Credit Card",
      quantity: "05",
      price: "$146.99",
      totalAmount: "$186.99",
      status: "Delivered",
    },
    {
      id: "05",
      orderId: "#TWT501500365",
      customerName: "Jaqueline Hammes",
      location: "Germany",
      orderDate: "08 Jun, 2023",
      payments: "Credit Card",
      quantity: "05",
      price: "$146.99",
      totalAmount: "$186.99",
      status: "Pending",
    },
    {
      id: "06",
      orderId: "#TWT501500365",
      customerName: "Marie Prohaska",
      location: "Germany",
      orderDate: "10 Jun, 2023",
      payments: "Credit Card",
      quantity: "05",
      price: "$146.99",
      totalAmount: "$186.99",
      status: "Shipping",
    },
    {
      id: "07",
      orderId: "#TWT501500365",
      customerName: "Jaqueline Hammes",
      location: "Germany",
      orderDate: "08 Jun, 2023",
      payments: "Credit Card",
      quantity: "05",
      price: "$146.99",
      totalAmount: "$186.99",
      status: "Delivered",
    },
  ],

  // Order Statistics
  orderStatistics: {
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
  },

  // Sales Revenue Overview
  barChartConfig: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Sales: $${tooltipItem.raw}`;
          },
        },
      },
    },
  },

  // Traffic Resources
  pieChart: {
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    datasets: [
      {
        data: [44, 55, 67, 83],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  },

  pieChartOptions: {
    plugins: {
      legend: {
        position: "top",
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
  },
  // Monthly Orders Goal
  ordersGoalCard: {
    digit: "1,596",
    ordersGoal: "2000+",
    percent: "3.6",
    progressbar: 85,
  },

  //customer Service customerServiceCard1
  customerServiceCard1: {
    percent: "28",
    reachedPercent: "$25k",
    month: "$13,741",
    topCustomers: [
      {
        name: "Urrie Arthur",
        amount: "$1,452",
        avatar: "https://i.pravatar.cc/31",
      },
      {
        name: "Laurie Jackson",
        amount: "$8,782",
        avatar: "https://i.pravatar.cc/32",
      },
      {
        name: "Natalie Christy",
        amount: "$9,152",
        avatar: "https://i.pravatar.cc/33",
      },
    ],
  },

  // Sales This Month customerServiceCard2
  customerServiceCard2: {
    totalProfit: "746.84",
  },
  // Add the line chart data for sales
  salesLineChartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 300, 250, 400],
        fill: true,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
      },
    ],
  },

  // Top Selling Products customerServiceCard3
  customerServiceCard3: {
    topSellingProducts: [
      {
        name: "Mesh Ergonomic Black Chair",
        rating: 4,
        sold: 798,
        image: "https://via.placeholder.com/50",
      },
      {
        name: "Executive Leather Office Chair",
        rating: 5,
        sold: 602,
        image: "https://via.placeholder.com/50",
      },
      {
        name: "Adjustable Standing Desk",
        rating: 3,
        sold: 512,
        image: "https://via.placeholder.com/50",
      },
      {
        name: "Modern Office Desk Lamp",
        rating: 4,
        sold: 438,
        image: "https://via.placeholder.com/50",
      },
    ],
  },

  //barData customerServiceCard4
  barData: {
    labels: ["Jan 01", "Jan 03", "Jan 05", "Jan 07"],
    datasets: [
      {
        label: "New Visitors",
        data: [44, 55, 67, 43],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Returning Visitors",
        data: [13, 23, 35, 22],
        backgroundColor: "rgba(255, 159, 64, 0.5)",
      },
    ],
  },

  //blogTableData
  blogTableData:[
    {
      title: "How to Learn React",
      content: "React is a JavaScript library for building user interfaces...",
      tags: ["React","Web Development"],
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Understanding Redux",
      content: "Redux is a predictable state container for JavaScript apps...",
      tags: ["Redux", "State Management"],
      image: "https://via.placeholder.com/150",
    },
    {
      title: "How to Learn React",
      content: "React is a JavaScript library for building user interfaces...",
      tags: ["React", "JavaScript"],
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Understanding Redux",
      content: "Redux is a predictable state container for JavaScript apps...",
      tags: ["Redux", "State Management"],
      image: "https://via.placeholder.com/150",
    },
  ]
};
