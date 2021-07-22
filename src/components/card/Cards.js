import React, { Component } from "react";
import "./Cards.css";
import Counter from "../counter/Counter";

class Cards extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="detailContainer">
          <p>
            {this.props.product.title}
            &nbsp;
            <br/>
            Price: {this.props.product.price}
          </p>
          <div className="buttonContainer">
            {this.props.product.count !== 0 ? (
              <Counter productId={this.props.product} />
            ) : (
              <button onClick={this.props.addDataInCart}>Add to Cart</button>
            )}
          </div>
        </div>
        <div className="imageContainer">
          <img
            src={this.props.product.image}
            height="130px"
            width="155px"
            alt="image_product"
          />
        </div>
      </div>
    );
  }
}

export default Cards;
