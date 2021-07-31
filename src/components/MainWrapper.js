import React, { Component } from "react";
import Header from "./header/Header";

export default class MainWrapper extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}
