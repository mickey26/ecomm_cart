import React, { Component } from "react";
import Header from "./header/Header";

export default class MainWrapper extends Component {
  render() {
    return (
      <>
        <Header />
        <div>{this.props.children}</div>
      </>
    );
  }
}
