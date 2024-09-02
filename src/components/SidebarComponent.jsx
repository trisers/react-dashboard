import React, { useState } from "react";
import { Container, Navbar, Nav, Collapse, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import customIcon from "../../public/assets/dashboard.png";
import customIcon1 from "../../public/assets/landing.png";
import customIcon2 from "../../public/assets/email.png";
import customIcon3 from "../../public/assets/chat.png";
import customIconEcommerce from "../../public/assets/ecom.png";
import customIconInvoice from "../../public/assets/invoice.png";
import customIconUsers from "../../public/assets/users.png";
import customIcon4 from "../../public/assets/authentication.png";
import customIcon5 from "../../public/assets/pages.png";
import customIcon6 from "../../public/assets/ui.png";
import customIcon7 from "../../public/assets/plugins.png";
import customIcon8 from "../../public/assets/navigation.png";
import customIcon9 from "../../public/assets/froms.png";
import customIcon10 from "../../public/assets/tables.png";
import customIcon11 from "../../public/assets/apexcharts.png";
import customIcon12 from "../../public/assets/icon.png";
import customIcon13 from "../../public/assets/map.png";
import customIcon14 from "../../public/assets/multi.png";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function SidebarComponent() {
  const [openDashboards, setOpenDashboards] = useState(true);
  const [openLanding, setOpenLanding] = useState(true);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openPages, setOpenPages] = useState(false);

  const handleClick = () => {
    setOpenDashboards(!openDashboards);
  };

  const handleLanding = () => {
    setOpenLanding(!openLanding);
  };

  const handleEcommerce = () => {
    setOpenEcommerce(!openEcommerce);
  };

  const handleInvoice = () => {
    setOpenInvoice(!openInvoice);
  };

  const handleUsers = () => {
    setOpenUsers(!openUsers);
  };
  const handleAuth = () => {
    setOpenAuth(!openAuth);
  };


  return (
    <Container
      fluid
      className="p-0"
      style={{ width: "350px", minHeight: "100vh" }}
    >
      <Navbar className="flex-column h-100">
        <Navbar.Brand className="text-center fs-3 fw-bold">LOGO</Navbar.Brand>

        <Nav className="flex-column">
          <p style={{ marginLeft: "-20px", color: "#94A3B8" }}>MENU</p>
          <Nav.Link
            onClick={handleClick}
            className="d-flex align-items-center px-2"
            style={{ color: "#3B82F6" }}
          >
            <img
              src={customIcon}
              alt="Dashboards Icon"
              className="me-2"
              style={{ width: "13px", height: "13px" }}
            />
            Dashboards
            <Button variant="link" onClick={handleClick} className="ms-auto">
              {openDashboards ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Collapse in={openDashboards}>
            <div>
              <Nav.Link className="ps-4 py-2" style={{ color: "#3B82F6" }}>
                Ecommerce
              </Nav.Link>
            </div>
          </Collapse>

          <Nav.Link
            onClick={handleLanding}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon1}
              alt="Landing Page Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Landing Page
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleLanding}
              className="ms-auto"
            >
              {openEcommerce ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <p style={{ marginLeft: "-20px", color: "#94A3B8" }}>APPS</p>
          <Nav.Link
            className="d-flex align-items-center justify-content-start px-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon3}
              alt="Chat Icon"
              className="me-2"
              style={{ width: "15px", height: "13px" }}
            />
            Chat
          </Nav.Link>

          <Nav.Link
            onClick={handleLanding}
            className="d-flex align-items-center justify-content-start px-3 py-2"
            style={{ color: "#94A3B8", marginTop: "5px" }}
          >
            <img
              src={customIcon2}
              alt="Email Page Icon"
              className="me-2"
              style={{ width: "14px", height: "14px" }}
            />
            Email
          </Nav.Link>

          <Nav.Link
            onClick={handleEcommerce}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIconEcommerce}
              alt="Ecommerce Icon"
              className="me-2"
              style={{ width: "15px", height: "14px" }}
            />
            Ecommerce
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleEcommerce}
              className="ms-auto"
            >
              {openEcommerce ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleInvoice}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIconInvoice}
              alt="Invoice Icon"
              className="me-2"
              style={{ width: "14px", height: "13px" }}
            />
            Invoice
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleInvoice}
              className="ms-auto"
            >
              {openInvoice ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleUsers}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIconUsers}
              alt="Users Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Users
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleUsers}
              className="ms-auto"
            >
              {openUsers ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <p className="mt-2" style={{ marginLeft: "-20px", color: "#94A3B8" }}>
            PAGES
          </p>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon4}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "10px", height: "14px" }}
            />
            Authentication
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon5}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Pages
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <p className="mt-2" style={{ marginLeft: "-20px", color: "#94A3B8" }}>
            COMPONENTS
          </p>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon6}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            UI Elements
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon7}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Plugins
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon8}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Navigation
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon9}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Forms
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon9}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Tables
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon10}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Apexcharts
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon11}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Icons
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon12}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Maps
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <img
              src={customIcon13}
              alt="Auth Icon"
              className="me-2"
              style={{ width: "12px", height: "14px" }}
            />
            Multi Level
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

        </Nav>
      </Navbar>
    </Container>
  );
}
