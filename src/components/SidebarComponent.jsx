
import React, { useState } from 'react';
import { Container, Navbar, Nav, Collapse, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { BsDot } from 'react-icons/bs';
import { HiOutlineViewGrid, HiMail, HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSidebar } from '../components/context/SidebarContext';
import './sidebarHeader.css';

export default function SidebarComponent() {
  const { isSidebarCollapsed } = useSidebar();
  const [openDashboards, setOpenDashboards] = useState(false);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);

  const handleClick = () => setOpenDashboards(!openDashboards);
  const handleEcommerce = () => setOpenEcommerce(!openEcommerce);
  const handleEmail = () => setOpenEmail(!openEmail);
  const handleProducts = () => setOpenProducts(!openProducts);
  const handleOrders = () => setOpenOrders(!openOrders);

  return (
    <Container
      fluid
      className="p-0 sidebar-container"
      style={{
        width: isSidebarCollapsed ? '90px' : '320px',
        padding: '10px',
        minHeight: '100vh',
        transition: 'width 0.3s',
        position: 'sticky',
        top: '0',
        overflowY: 'auto',
      }}
    >
      <Navbar className="flex-column h-100">
        <Navbar.Brand className="text-center fs-4 fw-bold">
          {!isSidebarCollapsed && 'LOGO'}
        </Navbar.Brand>
        <Nav className="flex-column">
          <p style={{ color: '#94A3B8' }}>{!isSidebarCollapsed && 'MENU'}</p>
          <Nav.Link
            onClick={handleClick}
            className="d-flex align-items-center px-3"
            style={{ color: '#3B82F6' }}
          >
            <HiOutlineViewGrid
              className="me-2"
              style={{ width: '20px', height: '20px' }}
            />
            {!isSidebarCollapsed && 'Dashboards'}
            <Button variant="link" onClick={handleClick} className="ms-auto">
              {openDashboards ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>
          <Collapse in={openDashboards}>
            <div>
              <Nav.Link
                className="ps-4 py-2"
                as={Link}
                to="/"
                style={{ color: '#3B82F6' }}
              >
                {!isSidebarCollapsed && 'Ecommerce'}
              </Nav.Link>
            </div>
          </Collapse>
          <Nav.Link
            onClick={handleEmail}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: '#94A3B8' }}
          >
            <HiMail
              className="me-2"
              style={{ width: '20px', height: '20px' }}
            />
            {!isSidebarCollapsed && 'Email'}
            <Button
              style={{ color: '#94A3B8' }}
              variant="link"
              onClick={handleEmail}
              className="ms-auto"
            >
              {openEmail ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </Button>
          </Nav.Link>
          <Nav.Link
            onClick={handleEcommerce}
            className="d-flex align-items-center px-3 py-2"
            style={{ color: '#94A3B8' }}
          >
            <HiShoppingCart
              className="me-2"
              style={{ width: '20px', height: '20px' }}
            />
            {!isSidebarCollapsed && 'E-commerce'}
            <Button
              style={{ color: '#94A3B8' }}
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
                className="ps-4 py-2"
                style={{ color: '#94A3B8' }}
                onClick={handleProducts}
              >
                <BsDot
                  className="me-1"
                  style={{ width: '20px', height: '20px' }}
                />{' '}
                {!isSidebarCollapsed && 'Products'}
                <Button
                  style={{ color: '#94A3B8' }}
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
                    className="ps-5 py-2 d-flex align-items-center"
                    style={{ color: '#94A3B8' }}
                  >
                    <BsDot
                      className="me-1"
                      style={{ width: '20px', height: '20px' }}
                    />{' '}
                    {!isSidebarCollapsed && 'View Product'}
                  </Nav.Link>
                </div>
              </Collapse>
              <Collapse in={openProducts}>
                <div>
                  <Nav.Link
                    as={Link}
                    to="/ecommerce/products/add"
                    className="ps-5 py-2 d-flex align-items-center"
                    style={{ color: '#94A3B8' }}
                  >
                    <BsDot
                      className="me-1"
                      style={{ width: '20px', height: '20px' }}
                    />{' '}
                    {!isSidebarCollapsed && 'Add New'}
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
                className="ps-4 py-2"
                style={{ color: '#94A3B8' }}
                onClick={handleOrders}
              >
                <BsDot
                  className="me-1"
                  style={{ width: '20px', height: '20px' }}
                />{' '}
                {!isSidebarCollapsed && 'Orders'}
                <Button
                  style={{ color: '#94A3B8' }}
                  variant="link"
                  onClick={handleOrders}
                  className="ms-auto"
                />
              </Nav.Link>
            </div>
          </Collapse>
          <Collapse in={openEcommerce}>
            <div>
              <Nav.Link
                as={Link}
                to="/ecommerce/orderOverview"
                className="ps-4 py-2"
                style={{ color: '#94A3B8' }}
                onClick={handleOrders}
              >
                <BsDot
                  className="me-1"
                  style={{ width: '20px', height: '20px' }}
                />{' '}
                {!isSidebarCollapsed && 'Orders Overview'}
                <Button
                  style={{ color: '#94A3B8' }}
                  variant="link"
                  onClick={handleOrders}
                  className="ms-auto"
                />
              </Nav.Link>
            </div>
          </Collapse>
        </Nav>
      </Navbar>
    </Container>
  );
}
