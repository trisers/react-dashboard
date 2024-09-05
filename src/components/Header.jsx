import React from "react";
import { Navbar, Form, FormControl, Button, Nav, Image } from "react-bootstrap";
import { Search, Bell, Cart, Gear } from "react-bootstrap-icons";
import { FaSun } from "react-icons/fa";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

export default function Header({ toggleSidebar, isSidebarCollapsed, toggleCart }) {
  return (
    <Navbar expand="lg" className="px-3" style={{ height: '75px' }}>
      <Button variant="link" onClick={toggleSidebar} className="d-flex align-items-center me-2">
        {isSidebarCollapsed ? (
          <AiOutlineDoubleRight style={{ color: 'black' }} />
        ) : (
          <AiOutlineDoubleLeft style={{ color: 'black' }} />
        )}
      </Button>

      {/* <Navbar.Brand href="#" className="me-auto">
        <Image
          src={customIcon1}
          alt="Logo"
          style={{ width: '40px', height: '40px' }}
        />
      </Navbar.Brand> */}

      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Form className="d-flex flex-grow-2 my-2 my-lg-0">
          <div className="position-relative flex-grow-1">
            <Search className="position-absolute top-50 translate-middle-y ms-2" />
            <FormControl
              type="search"
              placeholder="Search for ..."
              className="ps-5"
              aria-label="Search"
            />
          </div>
        </Form>

        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#">
            <Image
              src="https://flagcdn.com/w320/us.png"
              alt="USA Flag"
              width={24}
              height={24}
            />
          </Nav.Link>
          <Nav.Link href="#">
            <FaSun />
          </Nav.Link>

          <Nav.Link href="#">
            <Cart size={24} onClick={toggleCart}/>
          </Nav.Link>

          <Nav.Link href="#">
            <Bell size={24} />
          </Nav.Link>
          <Nav.Link href="#">
            <Gear size={24} />
          </Nav.Link>
          <Nav.Link href="#">
            <Image
              src="https://i.pravatar.cc/300"
              alt="User Avatar"
              roundedCircle
              width={30}
              height={30}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
