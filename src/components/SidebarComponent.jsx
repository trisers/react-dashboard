import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Collapse, Button } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiOutlineViewGrid, HiShoppingCart, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../components/context/SidebarContext";
import "./sidebarHeader.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import logo from "/assets/logo/logo.svg";
import { FaFolder } from "react-icons/fa";

export default function SidebarComponent() {
  const { isSidebarCollapsed, mobileView, closeSidebar, toggleSidebar } =
    useSidebar();
  const [openDashboards, setOpenDashboards] = useState(false);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openBlogs, setOpenBlogs] = useState(false);
  const [openBlogsTable, setOpenBlogsTable] = useState(false);
  const [openCollections, setOpenCollections] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setOpenDashboards(path.startsWith("/dashboard"));
    setOpenEcommerce(path.startsWith("/ecommerce"));
    setOpenProducts(path.startsWith("/ecommerce/products"));
    setOpenOrders(path.startsWith("/ecommerce/orders"));
    setOpenBlogs(path.startsWith("/blogs"));
    setOpenBlogsTable(path.startsWith("/blogs"));
    setOpenCollections(path.startsWith("/collections"));
  }, [location]);

  const handleClick = () => setOpenDashboards((prev) => !prev);
  const handleEcommerce = () => setOpenEcommerce((prev) => !prev);
  const handleProducts = () => setOpenProducts((prev) => !prev);
  const handleOrders = () => setOpenOrders((prev) => !prev);
  const handleBlogs = () => setOpenBlogs((prev) => !prev);
  const handleBlogsTable = () => setOpenBlogsTable((prev) => !prev);
  const handleCollections = () => setOpenCollections((prev) => !prev);

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
            {isSidebarCollapsed ? (
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "60px",
                  filter:
                    "invert(30%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                }}
              />
            ) : (
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "100px",
                  filter:
                    "invert(30%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                }}
              />
            )}
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

          {/* Dashboards */}
          <Nav.Link
            onClick={handleClick}
            className={`d-flex align-items-center px-3 ${getNavLinkClass(
              "/dashboard"
            )}`}
            style={{
              color: "#3B82F6",
              gap: isSidebarCollapsed ? "0px" : "50px",
            }}
          >
            <div className="d-flex align-items-center">
              <HiOutlineViewGrid
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              {!isSidebarCollapsed && "Dashboard"}
            </div>
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

          {/* Blogs */}
          <Nav.Link
            onClick={handleBlogs}
            className={`d-flex align-items-center px-3 py-2 ${getNavLinkClass(
              "/blogs"
            )}`}
            style={{ color: "#94A3B8" }}
          >
            <HiOutlinePencilAlt
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Blogs"}
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleBlogsTable}
              className="ms-auto"
            >
              {openBlogs ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <Collapse in={openBlogs}>
            <div>
              <Nav.Link
                className={`ps-4 py-2 ${getNavLinkClass("/blogs/create")}`}
                as={Link}
                to="/blogs/create"
                style={{ color: "#94A3B8" }}
              >
                {!isSidebarCollapsed && "Create Blog"}
              </Nav.Link>
            </div>
          </Collapse>

          <Collapse in={openBlogs}>
            <div>
              <Nav.Link
                className={`ps-4 py-2 ${getNavLinkClass("/blogs/table")}`}
                as={Link}
                to="/blogs/table"
                style={{ color: "#94A3B8" }}
              >
                {!isSidebarCollapsed && "View Blog"}
              </Nav.Link>
            </div>
          </Collapse>

          {/* Collections */}
          <Nav.Link
            onClick={handleCollections}
            className={`d-flex align-items-center px-3 py-2 ${getNavLinkClass(
              "/collections"
            )}`}
            style={{ color: "#94A3B8" }}
          >
            <FaFolder
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Collections"}
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleCollections}
              className="ms-auto"
            >
              {openCollections ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          {/* Collapse section for Create Collection */}
          <Collapse in={openCollections}>
            <div>
              {openCollections && ( 
                <Nav.Link
                  className={`ps-4 py-2 ${getNavLinkClass(
                    "/collections/create"
                  )}`}
                  as={Link}
                  to="/collections/create"
                  style={{ color: "#94A3B8" }}
                >
                  {!isSidebarCollapsed && "Create Collection"}
                </Nav.Link>
              )}
            </div>
          </Collapse>

          {/* Collapse section for View Collection */}
          <Collapse in={openCollections}>
            <div>
              {openCollections && ( 
                <Nav.Link
                  className={`ps-4 py-2 ${getNavLinkClass(
                    "/collections/table"
                  )}`}
                  as={Link}
                  to="/collections/table"
                  style={{ color: "#94A3B8" }}
                >
                  {!isSidebarCollapsed && "View Collection"}
                </Nav.Link>
              )}
            </div>
          </Collapse>

          {/* E-commerce */}
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
                {!isSidebarCollapsed && "Products"}
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
                {!isSidebarCollapsed && "Orders Overview"}
              </Nav.Link>
            </div>
          </Collapse>
        </Nav>
      </Navbar>
    </Container>
  );
}
