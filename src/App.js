import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import "./App.css";
import SideBar from "./Components/Sidebar";
import Topbar from "./Components/TopBar";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Container>
        <SideBar />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
