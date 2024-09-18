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
import OrderOverview from "./components/orderOverview/OrderOverview";
import { SidebarProvider } from "./components/context/SidebarContext";
import { ColorProvider } from "./components/context/ColorContext";
import CreateBlog from "./components/blogs/Blogs";
function App() {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeSelect = (sizes) => {
    setSelectedSizes(sizes);
  };

  const handleRemoveSize = (size) => {
    setSelectedSizes((prevSizes) => prevSizes.filter((s) => s !== size));
  };

  return (
    <ColorProvider>
      <SidebarProvider>
        <Router>
          <div style={{ display: "flex" }}>
            <SidebarComponent />
            <Container fluid style={{ flexGrow: 1, padding: "0px" }}>
              <Header />
              <Routes>
                {/* Dashboard Route */}
                <Route path="/" element={<Dashboard />} />

                {/* Ecommerce Routes */}
                <Route path="/ecommerce">
                  <Route path="products/view" element={<ListView />} />
                  <Route
                    path="products/add"
                    onSizeSelect={handleSizeSelect}
                    element={<AddView />}
                  />
                  <Route path="orders" element={<Orders />} />
                  <Route path="orderOverview" element={<OrderOverview />} />
                </Route>

                {/* Blog Routes */}
                <Route path="/blogs">
                  <Route path="create" element={<CreateBlog />} />
                </Route>
              </Routes>
            </Container>
          </div>
        </Router>
      </SidebarProvider>
    </ColorProvider>
  );
}

export default App;
