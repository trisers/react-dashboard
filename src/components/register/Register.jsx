import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import loginimg from "/assets/login/loginimg.png";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#F5F6FA" }}
    >
      <Row
        className="rounded-lg overflow-hidden bg-white"
        style={{ maxWidth: "1000px", width: "100%", height: "525px" }}
      >
        <Col
          md={6}
          sm={12}
             className="d-none d-md-flex flex-column justify-content-start text-white p-3"
          style={{
            backgroundImage: `url(${loginimg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="mt-5 p-2 d-none d-md-block">
            <p className="para">Hello,</p>
            <p className="para">Team Ecommerce Here! 👋🏻</p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
          </div>
        </Col>

        <Col
          md={6}
          sm={12}
          className="p-4 d-flex flex-column justify-content-center"
          style={{ backgroundColor: "#DCEEFF", height: "auto" }}
        >
          <h1 className="text-center mb-3">Create your account!</h1>
          <p className="text-center text-muted mb-4">
            Fill in your details to Register
          </p>

          <Form>
            <div className="form-row">
              <div className="input-data">
                <Form.Control
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                  className="input-field"
                />
                <div className="underline"></div>
                <Form.Label>Username</Form.Label>
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                />
                <div className="underline"></div>
                <Form.Label>Email Address</Form.Label>
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
                <div className="underline"></div>
                <Form.Label>Password</Form.Label>
              </div>
            </div>

            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <Button type="submit" className="w-100 btnClass">
                  Register
                </Button>
              </div>
            </div>
          </Form>

          <div className="mt-3 text-center">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
