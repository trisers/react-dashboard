import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Collapse, Button } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { HiOutlineViewGrid, HiMail, HiShoppingCart, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../components/context/SidebarContext";
import "./sidebarHeader.css";

export default function SidebarComponent() {
  const { isSidebarCollapsed, mobileView, closeSidebar, toggleSidebar } =
    useSidebar();
  const [openDashboards, setOpenDashboards] = useState(false);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setOpenDashboards(path.startsWith("/"));
    setOpenEcommerce(path.startsWith("/"));
    setOpenEmail(path.startsWith("/email"));
    setOpenProducts(path.startsWith("/ecommerce/products"));
    setOpenOrders(path.startsWith("/ecommerce/orders"));

    setOpenProducts(path.startsWith("/ecommerce/products"));
    setOpenOrders(path.startsWith("/ecommerce/orders"));
  }, [location]);

  const handleClick = () => setOpenDashboards(!openDashboards);
  const handleEcommerce = () => setOpenEcommerce(!openEcommerce);
  const handleEmail = () => setOpenEmail(!openEmail);
  const handleProducts = () => setOpenProducts(!openProducts);
  const handleOrders = () => setOpenOrders(!openOrders);

  const getNavLinkClass = (path) =>
    location.pathname === path ? "active-nav-link" : "";

  return (
    <Container
      fluid
      className="p-0 sidebar-container"
      style={{
        width: isSidebarCollapsed && !mobileView ? "90px" : "320px",
        padding: "10px",
        minHeight: "100vh",
        transition: "width 0.3s, left 0.3s",
        position: mobileView ? "fixed" : "sticky",
        top: "0",
        left: isSidebarCollapsed ? "-320px" : "0",
        zIndex: "1000",
        backgroundColor: "white",
        overflowY: "auto",
      }}
    >
      <Navbar className="flex-column h-100">
        <Navbar.Brand className="d-flex align-items-center justify-content-between position-relative">
          <span className="fs-4 fw-bold mb-3">
            {!isSidebarCollapsed && "LOGO"}
          </span>
          {!isSidebarCollapsed && mobileView && (
            <Button
              variant="link"
              onClick={closeSidebar}
              className="position-absolute mb-3 end-0"
              style={{
                fontSize: "1.5rem",
                color: "black", 
                marginRight: "-120px",
              }}
            >
              <HiX />
            </Button>
          )}
        </Navbar.Brand>

        <Nav className="flex-column">
          <p style={{ color: "#94A3B8" }}>{!isSidebarCollapsed && "MENU"}</p>
          <Nav.Link
            onClick={handleClick}
            className={`d-flex align-items-center px-3 ${getNavLinkClass(
              "/dashboard"
            )}`}
            style={{ color: "#3B82F6" }}
          >
            <HiOutlineViewGrid
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Dashboards"}
            <Button variant="link" onClick={handleClick} className="ms-auto">
              {openDashboards ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>
          <Collapse in={openDashboards}>
            <div>
              <Nav.Link
                className={`ps-4 py-2 ${getNavLinkClass("/")}`}
                as={Link}
                to="/"
                style={{ color: "#94A3B8" }}
              >
                {!isSidebarCollapsed && "Ecommerce"}
              </Nav.Link>
            </div>
          </Collapse>
          <Nav.Link
            onClick={handleEmail}
            className={`d-flex align-items-center px-3 py-2 ${getNavLinkClass(
              "/email"
            )}`}
            style={{ color: "#94A3B8" }}
          >
            <HiMail
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Email"}
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleEmail}
              className="ms-auto"
            >
              {openEmail ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>
          <Nav.Link
            onClick={handleEcommerce}
            className={`d-flex align-items-center px-3 py-2 ${getNavLinkClass(
              "/ecommerce"
            )}`}
            style={{ color: "#94A3B8" }}
          >
            <HiShoppingCart
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "E-commerce"}
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleEcommerce}
              className="ms-auto"
            >
              {openEcommerce ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>
          <Collapse in={openEcommerce}>
            <div>
              <Nav.Link
                className={`ps-4 py-2 ${getNavLinkClass(
                  "/ecommerce/products"
                )}`}
                style={{ color: "#94A3B8" }}
                onClick={handleProducts}
              >
                <BsDot
                  className="me-1"
                  style={{ width: "20px", height: "20px" }}
                />
                {!isSidebarCollapsed && "Products"}
                <Button
                  style={{ color: "#94A3B8" }}
                  variant="link"
                  onClick={handleProducts}
                  className="ms-auto"
                >
                  {openProducts ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </Button>
              </Nav.Link>
              <Collapse in={openProducts}>
                <div>
                  <Nav.Link
                    as={Link}
                    to="/ecommerce/products/view"
                    className={`ps-5 py-2 d-flex align-items-center ${getNavLinkClass(
                      "/ecommerce/products/view"
                    )}`}
                    style={{ color: "#94A3B8" }}
                  >
                    <BsDot
                      className="me-1"
                      style={{ width: "20px", height: "20px" }}
                    />
                    {!isSidebarCollapsed && "View Product"}
                  </Nav.Link>
                </div>
              </Collapse>
              <Collapse in={openProducts}>
                <div>
                  <Nav.Link
                    as={Link}
                    to="/ecommerce/products/add"
                    className={`ps-5 py-2 d-flex align-items-center ${getNavLinkClass(
                      "/ecommerce/products/add"
                    )}`}
                    style={{ color: "#94A3B8" }}
                  >
                    <BsDot
                      className="me-1"
                      style={{ width: "20px", height: "20px" }}
                    />
                    {!isSidebarCollapsed && "Add New"}
                  </Nav.Link>
                </div>
              </Collapse>
            </div>
          </Collapse>
          <Collapse in={openEcommerce}>
            <div>
              <Nav.Link
                as={Link}
                to="/ecommerce/orders"
                className={`ps-4 py-2 ${getNavLinkClass("/ecommerce/orders")}`}
                style={{ color: "#94A3B8" }}
                onClick={handleOrders}
              >
                <BsDot
                  className="me-1"
                  style={{ width: "20px", height: "20px" }}
                />
                {!isSidebarCollapsed && "Orders"}
              </Nav.Link>
            </div>
          </Collapse>
          <Collapse in={openEcommerce}>
            <div>
              <Nav.Link
                as={Link}
                to="/ecommerce/orderOverview"
                className={`ps-4 py-2 ${getNavLinkClass(
                  "/ecommerce/orderOverview"
                )}`}
                style={{ color: "#94A3B8" }}
                onClick={handleOrders}
              >
                <BsDot
                  className="me-1"
                  style={{ width: "20px", height: "20px" }}
                />
                {!isSidebarCollapsed && "Orders Overview"}
              </Nav.Link>
            </div>
          </Collapse>
        </Nav>
      </Navbar>
    </Container>
  );
}
