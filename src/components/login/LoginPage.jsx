import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Image } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginimg from "/assets/login/loginimg.png";
import loginimg1 from "/assets/login/loginimg1.png";
import "./LoginPage.css";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL; 

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
  
      if (response.status === 200) {
        const { accessToken } = response.data;
  
        Cookies.set("accessToken", accessToken, { expires: 7 });
  
        setToken(accessToken);
        toast.success(response?.data?.message);
        setTimeout(() => {
          navigate("/"); 
        }, 2000);
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error", error);
      toast.error(error.response?.data?.message || "Error logging in.");
    } finally {
      setLoading(false);
    }
  };
  
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

        <Col
          xs={12}
          md={6}
          className="p-4 d-flex flex-column justify-content-center"
          style={{ backgroundColor: "#F1F1FF" }}
        >
          <h1 className="text-center mb-3">Welcome Back!</h1>
          <p className="text-center text-muted mb-4">
            Fill in your details to login
          </p>

          <Form onSubmit={handleLogin}>
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
                <Button type="submit" className="w-100 btnClass" disabled={loading}>
                  {loading ? "Logging in..." : "Let's Go"}
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
              <Link to="/forgot-password" className="text-primary">
                Click Here
              </Link>
            </small>
          </div>
        </Col>
      </Row>

      <ToastContainer /> {/* Toastify container */}
    </Container>
  );
};

export default LoginPage;
