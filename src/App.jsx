import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/dashboard/Dashboard";
import ListView from "./components/products/listView/ListView";
import AddView from "./components/products/addView/AddView";
import Orders from "./components/orders/Orders";
import "bootstrap-icons/font/bootstrap-icons.css";

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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ecommerce">
              <Route path="products/view" element={<ListView />} />
              <Route path="products/add" element={<AddView />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
