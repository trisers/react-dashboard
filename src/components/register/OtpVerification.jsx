import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import loginimg from "/assets/login/loginimg.png";
import loginimg1 from "/assets/login/loginimg1.png";
import "./register.css";

const BASE_URL = import.meta.env.VITE_BASE_URL; 

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/verify-email`, {
        email,
        otp,
      });

      if (response.status === 200) {
        toast.success(response?.data?.message);
       setTimeout(()=>{
        navigate("/");
       }, 2000)
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP verification error", error);
      toast.error(error.response?.data?.message || "Error verifying OTP.");
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
        style={{ maxWidth: "1000px", width: "100%", height: "500px" }}
      >
          <Col
          md={6}
          sm={12}
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
          md={6}
          sm={12}
          className="p-4 d-flex flex-column justify-content-center"
          style={{ backgroundColor: "#DCEEFF", height: "auto" }}
        >
          <h1 className="text-center mb-3">Account Verification!</h1>
          <p className="text-center text-muted mb-4">
           Check your main inbox for one time verification password.
          </p>

          <Form onSubmit={handleVerifyOtp}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                value={email}
                readOnly
                className="input-field"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="input-field"
              />
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>
          </Form>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default OtpVerification;
