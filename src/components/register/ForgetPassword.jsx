import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginimg from "/assets/login/loginimg.png";
import loginimg1 from "/assets/login/loginimg1.png";
import "./register.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Verify Email
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/request-confirmation`,
        {
          email,
        }
      );

      if (response.status === 200) {
        toast.success(response?.data?.message || "Verification email sent.");
        setStep(2);
      } else {
        toast.error("Failed to send verification email. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error verifying email.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and set new password
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/reset-password`, {
        email,
        otp,
        newPassword,
        confirmPassword,
      });

      if (response.status === 200) {
        toast.success(response?.data?.message || "Password reset successful!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error resetting password.");
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
          style={{ backgroundColor: "#DCEEFF" }}
        >
          <h1 className="text-center mb-3">Forgot Password</h1>
          <p className="text-center text-muted mb-4">
            Reset your password in a few steps
          </p>

          {/* Conditional */}
          {step === 1 && (
            <Form onSubmit={handleVerifyEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </Form.Group>
              <br />
              <Button type="submit" className="w-100" disabled={loading}>
                {loading ? "Verifying..." : "Verify Email"}
              </Button>
            </Form>
          )}

          {step === 2 && (
            <Form onSubmit={handleVerifyOtp}>
              <Form.Group className="mb-3">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="input-field"
                  required
                />
              </Form.Group>

              {/* New Password */}
              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100" disabled={loading}>
                {loading
                  ? "Verifying OTP & Password..."
                  : "Verify OTP & Password"}
              </Button>
            </Form>
          )}
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ForgetPassword;
