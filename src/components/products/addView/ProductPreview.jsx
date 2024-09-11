import React from "react";
import {Button, Card } from "react-bootstrap";
import "./addView.css";
import img from "/assets/productImage/img.png";


const ProductPreview = () => {  
  return (
    <Card className="p-3">
    <h6>Product Card Preview</h6>

    <Card className="card-container">
      <Card.Img variant="top" src={img} className="card-img" />
    </Card>

    <Card.Body>
      <Card.Title>
        $145.99 <span className="text-muted old-price">$299.99</span>
      </Card.Title>
      <Card.Text className="mt-3">
        Fastcolors Typography Men <br />
        Men's Fashion
      </Card.Text>
      <div>
        <h6>Colors:</h6>
        <Button
          style={{
            backgroundColor: "#FF5733",
            border: "none",
            borderRadius: "20px",
          }}
          className="color-btn"
        ></Button>
        <Button
          style={{
            backgroundColor: "#F1C40F",
            border: "none",
            borderRadius: "20px",
          }}
          className="color-btn"
        ></Button>
        <Button
          style={{
            backgroundColor: "#000000",
            border: "none",
            borderRadius: "20px",
          }}
          className="color-btn"
        ></Button>
      </div>
      {/* SIZE */}
      <div className="mt-3">
        <h6>Sizes:</h6>
        <div className="size-container-side">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <Button
              variant="outline-primary"
              className="size-btnn"
              key={size}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <Button
        className="dotted-border-button mt-3"
        variant="outline-primary"
      >
        Create Product
      </Button>{" "}
      <Button className="custom-button mt-3" style={{width:"150px",height:"40px" ,backgroundColor:"#A855F7", border:"1px solid #A855F7"}} variant="outline-primary">
        Draft
      </Button>
    </Card.Body>
  </Card>
  )
}

export default ProductPreview