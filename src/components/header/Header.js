import React, { Component } from "react";
import "./Header.css";
import {VscAccount} from "react-icons/vsc";
class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
          <img
            style={{
              height: "90px",
            }}
            src="https://www.logo.wine/a/logo/Snapdeal/Snapdeal-Logo.wine.svg"
            alt="logo"
          />
          <VscAccount size = {35} color = "white"/>
      </div>
    );
  }
}

export default Header;
