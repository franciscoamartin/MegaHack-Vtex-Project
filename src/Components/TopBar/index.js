import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Logos from "../../Assets/avatarVtex.png";
import "./styles.css";

export default function Topbar() {
  return (
    <div className="containerTopBar">
      <AppBar position="static">
        <Toolbar className="Toolbar" variant="dense">
          <div className="InfoUser">
            <img src={Logos} className="Logos" alt="Vtex"></img>
            <h1 className="NomeUsuario">Olá, João Paulo</h1>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
