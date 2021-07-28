import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
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
        {this.props.isLoading ? (
          <div>
            <Skeleton count={40} height={200} width={200} />
          </div>
        ) : (
          this.props.productData.map((data,index) => (
            <Cards key = {index}
              product={data}
              addDataInCart={() => this.addDataInCart(data)}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateTOProps = ({ LandingReducers }) => {
  const { productData, count, isLoading } = LandingReducers;
  return {
    productData,
    count,
    isLoading,
  };
};

export default connect(mapStateTOProps, { getProductData, addDataToCart })(
  LandingPage
);
