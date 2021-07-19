import React, { Component } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import {
  MdHelpOutline,
  MdInsertEmoticon,
  MdArrowDropDown,
} from "react-icons/md";
import { LOGO_URL } from "../../constants/url";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: ["Home", "Trending", "Movies", "New & Popular"],
      mobileView: false,
      catagoryDropdown: false,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        mobileView: window.globalThis.innerWidth >= 620 ? true : false,
      });
    });
  }
  // componentWillUnmount(){
  //   window.removeEventListener("resize");
  // }

  render() {
    return (
      <div className="headerContainer">
        {this.state.mobileView ? (
          <div className="navLinkContainer">
            <img
              style={{
                height: "30px",
              }}
              src={LOGO_URL}
              alt="logo"
            />
            {this.state.navLinks.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
        ) : (
          <div className="navLinkMobileView">
            <img
              style={{
                height: "20px",
              }}
              src={LOGO_URL}
              alt="logo"
            />
            <div>
            <div
              className="catagoryDropdownContainer"
              onClick={() =>
                this.setState({
                  catagoryDropdown: !this.state.catagoryDropdown,
                })
              }
            >
              <p>Choose Catagory</p>
              <span>
                <MdArrowDropDown size="30" />
              </span>
              </div>
              {this.state.catagoryDropdown ? (
                <div className="dropdownContainer">
                  {this.state.navLinks.map((data, index) => (
                    <ul key={index}>{data}</ul>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}

        <div className="navbarLastContainer">
          <div className="navbarLastIconcontainer">
            <FaSearch size="25" />
          </div>
          <div className="navbarLastIconcontainer">
            <MdInsertEmoticon size="30" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
