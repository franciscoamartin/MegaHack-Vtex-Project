import React from "react";
import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import SideBar from "./../../Components/Sidebar";
import Topbar from "./../../Components/TopBar";
import CardPerfil from "./../../Components/CardPerfil";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <CardPerfil />
          <SideBar />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
