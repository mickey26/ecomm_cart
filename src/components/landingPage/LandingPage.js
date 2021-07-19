import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductData, addDataToCart } from "../../actions/landingActions";
import Cards from "../card/Cards";
import "./LandingPage.css";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getProductData();
  }

  addDataInCart(data) {
    let tempList = this.props.productData;
    tempList.map((item) => {
      if (item.id === data.id) {
        item.count = item.count + 1;
      }
    });
    this.props.addDataToCart(tempList, data);
  }

  render() {
    return (
      <div className="mainContainer">
        {this.props.productData.map((data) => (
          <Cards
            product={data}
            addDataInCart={() => this.addDataInCart(data)}
          />
        ))}
      </div>
    );
  }
}

const mapStateTOProps = ({ LandingReducers }) => {
  const { productData, count } = LandingReducers;
  return {
    productData,
    count,
  };
};

export default connect(mapStateTOProps, { getProductData, addDataToCart })(
  LandingPage
);
