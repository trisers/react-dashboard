import React, { useState, useEffect } from "react";
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
import BlogsTable from "./components/blogs/BlogsTable";
import LoginPage from "./components/login/LoginPage";
import Register from "./components/register/Register";
import OtpVerification from "./components/register/OtpVerification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import ForgetPassword from "./components/register/ForgetPassword";
import Update from "./components/products/listView/Update";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = Cookies.get("accessToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    setToken(null);
    toast.info("Logged out successfully");
  };

  return (
    <ColorProvider>
      <SidebarProvider>
        <Router>
          {token ? (
            <div style={{ display: "flex" }}>
              <SidebarComponent />
              <Container fluid style={{ flexGrow: 1, padding: "0px" }}>
                <Header onLogout={handleLogout} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/ecommerce">
                    <Route path="products/view" element={<ListView />} />
                    <Route path="products/add" element={<AddView />} />
                    <Route
                      path="/ecommerce/products/update/:slug"
                      element={<Update />}
                    />
                    <Route path="orders" element={<Orders />} />
                    <Route path="orderOverview" element={<OrderOverview />} />
                  </Route>
                  <Route path="/blogs">
                    <Route path="create" element={<CreateBlog />} />
                    <Route path="table" element={<BlogsTable />} />
                  </Route>
                </Routes>
              </Container>
            </div>
          ) : (
            <Routes>
              <Route
                path="/login"
                element={<LoginPage setToken={setToken} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/otp-verification" element={<OtpVerification />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route path="*" element={<LoginPage setToken={setToken} />} />
            </Routes>
          )}
        </Router>
        <ToastContainer />
      </SidebarProvider>
    </ColorProvider>
  );
}

export default App;
