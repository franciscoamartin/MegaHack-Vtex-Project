import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import SideBar from "./Components/Sidebar";
import Topbar from "./Components/TopBar";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <SideBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
