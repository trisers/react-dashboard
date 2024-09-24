import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import loginimg from "/assets/login/loginimg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";


const BASE_URL = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        email,
        password,
        full_name: user,
        phone,
      });

      if (response.status === 201) {
        toast.success(response.data.message, {
          position: "top-right",
        });
        setTimeout(()=>{
          navigate("/otp-verification", { state: { email } });
        },2000)
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : "Registration failed, please try again.";
      toast.error(errorMessage, {
        position: "top-right",
      });
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
        style={{ maxWidth: "1000px", width: "100%", height: "580px" }}
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

          <Form onSubmit={handleSubmit}>
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

            <div className="form-row">
              <div className="input-data">
                <Form.Control
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="input-field"
                />
                <div className="underline"></div>
                <Form.Label>Phone</Form.Label>
              </div>
            </div>

            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <Button
                  type="submit"
                  className="w-100 btnClass"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
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

      <ToastContainer />
    </Container>
  );
};

export default Register;
