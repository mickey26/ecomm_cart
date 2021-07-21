import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="navLinkContainer">
          <img
            style={{
              height: "90px",
            }}
            src="https://www.logo.wine/a/logo/Snapdeal/Snapdeal-Logo.wine.svg"
            alt="logo"
          />
        </div>
      </div>
    );
  }
}

export default Header;
