import img from "/assets/banner/one.png";
import img1 from "/assets/banner/two.png";
import img2 from "/assets/banner/three.png";
import img3 from "/assets/banner/four.png";

export const Dashboard = {
  overAll: [
    { name: "Total Revenue", amount: "$236.18k", img: img },
    {
      name: "Total Orders",
      amount: "236,32",
      img: img1,
    },
    {
      name: "Delivered",
      amount: "236,212",
      img: img2,
    },
    {
      name: "Cancelled",
      amount: "236,18",
      img: img3,
    },
  ],


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
      status: "delivered",
    },
  ],
};