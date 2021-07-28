import React, { Component } from "react";
import Header from "./header/Header";

export default class MainWrapper extends Component {
  render() {
    return (
      <div style = {{display:'flex'}}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
