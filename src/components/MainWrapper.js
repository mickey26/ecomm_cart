import React, { Component } from "react";
import Header from "./header/Header";

export default class MainWrapper extends Component {
  render() {
    return (
      <div style = {{display:"flex",flexDirection:"column",overflowX:"hidden"}}>
        <Header />
        <div>{this.props.children}</div>
        
      </div>
    );
  }
}
