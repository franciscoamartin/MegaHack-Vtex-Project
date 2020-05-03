import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import SideBar from "./Components/Sidebar";
import Topbar from "./Components/TopBar";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <SideBar />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
