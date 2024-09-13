export const orderData = {
    shippingDetails: {
      name: "Pauline Hylton",
      address: "Techinfini Airen Heights, 402, Indore, IND",
    },
    billingDetails: {
      name: "Pauline Hylton",
      address: "Techinfini Airen Heights, 402, Indore, IND",
    },
    paymentDetails: {
      id: "#TSD456DF41SD5",
      method: "Credit Card",
      cardNumber: "xxxx xxxx xxxx 1501",
    },
    orderSummary: [
      {
        name: "Roar Twill Blue Baseball Cap",
        price: 149.99,
        quantity: 2,
        total: 299.98,
        image: "/assets/orderSummary/img.png",
      },
      {
        name: "Mesh Ergonomic Green Chair",
        price: 362.21,
        quantity: 1,
        total: 362.21,
        image: "/assets/orderSummary/img1.png",
      },
      {
        name: "Smartest Printed T-shirt",
        price: 89.99,
        quantity: 3,
        total: 269.97,
        image: "/assets/orderSummary/img2.png",
      },
    ],
    totals: {
      subTotal: 932.16,
      tax: 167.79,
      discount: -111.86,
      shipping: 0,
      totalAmount: 988.09,
    },
    steps: [
      {
        label: "Order Placed",
        description: "Your order has been successfully submitted.",
        date: "02 Nov, 2023",
      },
      {
        label: "Order Processing",
        description:
          "Once the order is received, it goes through the processing stage.",
        date: "02 Nov, 2023",
      },
      {
        label: "Shipped Order",
        description:
          "The order is shipped out to the customer’s designated delivery address.",
        date: "04 Nov, 2023",
      },
      {
        label: "Out for Delivery",
        description:
          "This status indicates that the order is currently out for delivery.",
        date: "06 Nov, 2023",
      },
      {
        label: "Delivered",
        description:
          "The status changes to 'Delivered' when the order reaches the customer.",
        date: "09 Nov, 2023",
      },
    ],
  };
  