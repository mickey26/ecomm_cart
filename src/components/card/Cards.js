import React, { Component } from "react";
import "./Cards.css";
import Counter from "../counter/Counter";

class Cards extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="imageContainer">
          <img
            src={this.props.product.image}
            height="140px"
            width="155px"
            alt="image_product"
          />
        </div>
        <div className="detailContainer">
          <div className="titleContainer">
            {" "}
            <p>{this.props.product.title}</p>
          </div>

          <h4 style={{ color: "red" }}>Price: {this.props.product.price}</h4>
        </div>
        <div className="buttonContainer">
          {this.props.product.count !== 0 ? (
            <Counter productId={this.props.product} />
          ) : (
            <button onClick={this.props.addDataInCart}>Add to Cart</button>
          )}
        </div>
      </div>
    );
  }
}

export default Cards;
