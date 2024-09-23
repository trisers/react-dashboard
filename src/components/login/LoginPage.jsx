import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Image } from "react-bootstrap";
import loginimg from "/assets/login/loginimg.png";
import loginimg1 from "/assets/login/loginimg1.png";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          className="d-none d-md-flex flex-column justify-content-center text-white p-4"
          style={{
            backgroundImage: `url(${loginimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mb-4">
            <Image src={loginimg1} alt="TokenLock Logo" fluid />
          </div>
        </Col>

        {/* Right side - Login form */}
        <Col
          xs={12}
          md={6}
          className="p-4 d-flex flex-column justify-content-center"
          style={{ backgroundColor: "#DCEEFF" }}
        >
          <h1 className="text-center mb-3">Welcome Back!</h1>
          <p className="text-center text-muted mb-4">
            Fill in your details to login
          </p>

          <Form>
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
                  Let's Go
                </Button>
              </div>
            </div>
          </Form>

          <div className="mt-3 text-center">
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </small>
          </div>

          <div className="mt-2 text-center">
            <small>
              Forgot Password?{" "}
              <Link to="/login" className="text-primary">
                Click Here
              </Link>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
