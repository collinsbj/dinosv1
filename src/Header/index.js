import React, { Component } from "react";
import logo from "./g-dino.png";

export class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Dino" />
      </header>
    );
  }
}
