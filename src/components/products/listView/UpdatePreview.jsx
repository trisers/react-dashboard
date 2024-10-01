import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import "./ListView.css";
import { ColorContext } from "../../context/ColorContext";
import img from "/assets/productImage/img.png";

const UpdatePreview = ({
  title,
  price,
  discount,
  image,
  selectedSizes,
  onRemoveSize,
}) => {
  const { selectedColors } = useContext(ColorContext);

  return (
    <Card className="p-3">
      <h6>Product Card Preview</h6>

      <Card className="card-container">
        <Card.Img
          variant="top"
          src={image ? URL.createObjectURL(image) : img}
          className="card-img"
          alt="Product Image"
        />
      </Card>

      <Card.Body>
        <Card.Title>
          {price ? `$${price}` : "$0.00"}{" "}
          {discount && (
            <span className="text-muted old-price">${discount}</span>
          )}
        </Card.Title>
        <Card.Text className="mt-3">
          {title ? title : "Please enter the product title"} <br />
        </Card.Text>

        <div>
          <h6>Colors:</h6>
          {selectedColors.length > 0 ? (
            selectedColors.map((color, index) => (
              <Button
                key={index}
                style={{
                  backgroundColor: color,
                  border: "none",
                  borderRadius: "20px",
                  margin: "5px",
                }}
                className="color-btn"
              />
            ))
          ) : (
            <p>Choose the Color's</p>
          )}
        </div>

        <div className="mt-3">
          <h6>Sizes:</h6>
          <div className="size-container-side">
            {selectedSizes.length > 0 ? (
              selectedSizes.map((size, index) => (
                <Button
                  variant="primary"
                  className="size-btnn"
                  key={index}
                  onClick={() => onRemoveSize(size)}
                >
                  {size}
                </Button>
              ))
            ) : (
              <p>Choose the Size's</p>
            )}
          </div>
        </div>

        <div className="d-flex gap-2">
          <Button
            className="dotted-border-button mt-3"
            variant="outline-primary"
          >
            Add to Cart
          </Button>
          <Button
            className="custom-button mt-3"
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "#A855F7",
              border: "1px solid #A855F7",
            }}
            variant="outline-primary"
          >
            Buy Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UpdatePreview;
