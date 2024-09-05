import React from "react";
import { Card, Button } from "react-bootstrap";
import "./WelcomeCard.css";
import img from "/assets/banner/dashboard.png.png";

export default function WelcomeCard() {
  return (
    <Card className="custom-card">
      <Card.Body className="custom-card-body">
        <div>
          <Card.Title>Welcome Paula Keenan 🎉</Card.Title>
          <Card.Text>
            
            An ecommerce dashboard has just that purpose. It provides your
            ecommerce team with a clear overview of key financial and
            website KPIs at any time.
          </Card.Text>
          <Button variant="primary">Take a Product</Button>
        </div>
        <img
          src={img}
          alt="Right Side Image"
          className="custom-card-right-image"
        />
      </Card.Body>
    </Card>
  );
}
