import React from "react";
import {
  Navbar,
  Button,
  Nav,
  Form,
  FormControl,
  Image,
  Container,
  Dropdown,
} from "react-bootstrap";
import { Search, Bell, Cart, Gear } from "react-bootstrap-icons";
import { FaSun } from "react-icons/fa";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useSidebar } from "../components/context/SidebarContext";
import "./sidebarHeader.css";

export default function Header({ onLogout }) {
  const { toggleSidebar, isSidebarCollapsed } = useSidebar();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Button
          variant="link"
          onClick={toggleSidebar}
          className="d-flex align-items-center me-2"
        >
          {isSidebarCollapsed ? (
            <AiOutlineDoubleRight style={{ color: "black" }} />
          ) : (
            <AiOutlineDoubleLeft style={{ color: "black" }} />
          )}
        </Button>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex my-2 my-lg-0">
            <div className="position-relative search-bar">
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
              <Cart size={24} />
            </Nav.Link>

            <Nav.Link href="#">
              <Bell size={24} />
            </Nav.Link>

            <Nav.Link href="#">
              <Gear size={24} />
            </Nav.Link>

            <Nav>
              <Dropdown align="end">
                <Dropdown.Toggle
                  as={Nav.Link}
                  id="dropdown-avatar"
                  bsPrefix="p-0"
                >
                  <Image
                    src="https://i.pravatar.cc/300"
                    alt="User Avatar"
                    roundedCircle
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as="div">
                    <Button variant="danger" onClick={onLogout}>
                      Logout
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
