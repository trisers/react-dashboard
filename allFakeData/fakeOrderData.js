const fakeOrderData = {
  totalOrders: {
    count: 17150,
    img: "/assets/banner/one.png",
    text: "Totals Orders",
  },
  newOrders: {
    count: 3519,
    img: "/assets/banner/two.png",
    text: "New's Orders",
  },
  pendingOrders: {
    count: 17150,
    img: "/assets/banner/three.png",
    text: "Pending Orders",
  },
  shippingOrders: {
    count: 3519,
    img: "/assets/banner/four.png",
    text: "Shipping Orders",
  },
  cancelledOrders: {
    count: 3519,
    img: "/assets/banner/four.png",
    text: "Cancelled Orders",
  },
  deliveredOrders: {
    count: 3519,
    img: "/assets/banner/four.png",
    text: "Deliver Orders",
  },
  chartData: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Order Percentage",
        data: [2.3, 3.1, 4, 11.1, 4, 3.6, 3.2, 2.3, 1.4, 3.4, 5.5, 8.8],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  },

  orderTableData: [
    {
      orderId: "ORD12345",
      customerName: "John Doe",
     
      amount: "$250.00",
      orderDate: "2024-09-01",
      deliveryDate: "2024-25-01",
      paymentMethod:'Pay Pal',
      status: {
        label: "Shipping",
        color: "#A855F7",
        bgColor: "#E9D5FF"
      },
    },
    {
      orderId: "ORD12346",
      customerName: "Jane Smith",

      amount: "$300.00",
      orderDate: "2024-09-01",
      deliveryDate: "2024-25-01",
      paymentMethod:'Pay Pal',
      
      status: {
        label: "Delivered",
        color: "#249782",
        bgColor: "#D2F4EE"
      },
    },
    {
      orderId: "ORD12347",
      customerName: "Emily Clark",
      amount: "$120.00",
      orderDate: "2024-09-01",
      deliveryDate: "2024-25-01",
      paymentMethod:'Visa Card',
      status: {
        label: "New",
        color: "#0EA5E9",
        bgColor: "#BAE6FD"
      },
    },
    {
      orderId: "ORD12348",
      customerName: "Michael Lee",
      amount: "$75.00",
      orderDate: "2024-09-01",
      deliveryDate: "2024-25-01",
      paymentMethod:'COD',
      status: {
        label: "Delivered",
        color: "#249782",
        bgColor: "#D2F4EE"
      },
    },
    {
      orderId: "ORD12349",
      customerName: "Sarah Adams",
      amount: "$450.00",
      orderDate: "2024-09-01",
      deliveryDate: "2024-25-01",
      paymentMethod:'American Express',
      status: {
        label: "Pending",
        color: "#EAB308",
        bgColor: "#FEF08A"
      },
    },
    {
      orderId: "ORD12455",
      customerName: "David Gaby",
      amount: "$450.00",
      orderDate: "2024-09-01",
      deliveryDate: "2024-25-01",
      paymentMethod:'Visa Card',
      status: {
        label: "Return",
        color: "#64748B",
        bgColor: "#E2E8F0"
      },
    },
    {
      orderId: "ORD12121",
      customerName: "David Gaby",
      amount: "$450.00",
      orderDate: "2024-09-01",
      deliveryDate: "2024-25-01",
      paymentMethod:'Credit Card',
      status: {
        label: "Cancelled",
        color: "#EF4444",
        bgColor: "#FECACA"
      },
    },
  ],
};

export default fakeOrderData;
