import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SidebarComponent />
        <Container fluid style={{ flexGrow: 2, padding: "0px" }}></Container>
      </div>
    </Router>
  );
}

export default App;
