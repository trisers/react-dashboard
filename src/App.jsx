import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/dashboard/Dashboard";
import ListView from "./components/products/listView/ListView";
import AddView from "./components/products/addView/AddView";
import Orders from "./components/orders/Orders";
import OrderOverview from "./components/orderOverview/OrderOverview";
import { SidebarProvider } from "./components/context/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <Router>
        <div style={{ display: "flex" }}>
          <SidebarComponent />
          <Container fluid style={{ flexGrow: 1, padding: "0px" }}>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ecommerce">
                <Route path="products/view" element={<ListView />} />
                <Route path="products/add" element={<AddView />} />
                <Route path="orders" element={<Orders />} />
                <Route path="orderOverview" element={<OrderOverview />} />
              </Route>
            </Routes>
          </Container>
        </div>
      </Router>
    </SidebarProvider>
  );
}

export default App;
