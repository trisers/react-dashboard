import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SidebarComponent isSidebarCollapsed={isSidebarCollapsed} />
        <Container fluid style={{ flexGrow: 1, padding: "0px" }}>
          <Header
            toggleSidebar={toggleSidebar}
            isSidebarCollapsed={isSidebarCollapsed}
            toggleCart={toggleCart}
          />
        </Container>
      </div>
    </Router>
  );
}

export default App;
