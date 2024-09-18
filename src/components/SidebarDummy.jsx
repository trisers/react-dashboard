import React from "react";
import {
  HiOutlineMenu,
  HiOutlineClipboardList,
  HiOutlineTable,
  HiOutlineChartBar,
  HiOutlineCollection,
  HiOutlineMap,
  HiOutlineDotsCircleHorizontal,
  HiLockClosed,
  HiDocumentText,
  HiViewGrid,
  HiPuzzle,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiOutlineViewGrid,
  HiOutlineHome,
  HiMail,
  HiShoppingCart,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import "./sidebarHeader.css";
const SidebarDummy = () => {
  const [openDashboards, setOpenDashboards] = useState(false);
  const [openLanding, setOpenLanding] = useState(false);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);

  const handleClick = () => setOpenDashboards(!openDashboards);
  const handleLanding = () => setOpenLanding(!openLanding);
  const handleEcommerce = () => setOpenEcommerce(!openEcommerce);
  const handleInvoice = () => setOpenInvoice(!openInvoice);
  const handleUsers = () => setOpenUsers(!openUsers);
  const handleAuth = () => setOpenAuth(!openAuth);
  const handleEmail = () => setOpenEmail(!openEmail);
  const handleProducts = () => setOpenProducts(!openProducts);
  const handleOrders = () => setOpenOrders(!openOrders);

  
  return (
    <div>
      <Nav.Link
      onClick={handleLanding}
      className="d-flex align-items-center px-3 py-2"
      style={{ color: "#94A3B8" }}
    >
      <HiOutlineHome
        className="me-2"
        style={{ width: "20px", height: "20px" }}
      />
      {!isSidebarCollapsed && "Landing Page"}
      <Button
        style={{ color: "#94A3B8" }}
        variant="link"
        onClick={handleLanding}
        className="ms-auto"
      >
        {openLanding ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </Button>
    </Nav.Link>
    <p style={{ color: "#94A3B8" }}> {!isSidebarCollapsed && "APPS"}</p>

    <Nav.Link
      className="d-flex align-items-center px-3"
      style={{ color: "#94A3B8" }}
    >
      <HiInbox
        className="me-2"
        style={{ width: "20px", height: "20px" }}
      />
      {!isSidebarCollapsed && "Chat"}
    </Nav.Link>

      {/* <Nav.Link
            onClick={handleInvoice}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiShoppingBag
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Invoice"}
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
            <HiUser
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Users"}
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleUsers}
              className="ms-auto"
            >
              {openUsers ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <p className="mt-2" style={{ color: "#94A3B8" }}>
            {!isSidebarCollapsed && "PAGES"}
          </p>

          <Nav.Link
            onClick={handleAuth}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiLockClosed
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Authentication"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiDocumentText
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Pages"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiViewGrid
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "UI"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiPuzzle
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Plugins"}
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>

          <p className="mt-2" style={{ color: "#94A3B8" }}>
            {!isSidebarCollapsed && "COMPONENTS"}
          </p>

          <Nav.Link
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiOutlineMenu
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Navigation"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiOutlineClipboardList
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Forms"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiOutlineTable
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Tables"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiOutlineChartBar
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Charts"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiOutlineCollection
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Icons"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiOutlineMap
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Maps"}
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
            className="d-flex align-items-center px-3 py-2"
            style={{ color: "#94A3B8" }}
          >
            <HiOutlineDotsCircleHorizontal
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            {!isSidebarCollapsed && "Multi"}
            <Button
              style={{ color: "#94A3B8" }}
              variant="link"
              onClick={handleAuth}
              className="ms-auto"
            >
              {openAuth ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link> */}
    </div>
  );
};

export default SidebarDummy;
