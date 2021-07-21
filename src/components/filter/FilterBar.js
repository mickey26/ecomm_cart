import React, { useState, useEffect } from "react";
import { BiSquareRounded } from "react-icons/bi";
import { FiCheckSquare } from "react-icons/fi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./FilterBar.css";

const GET_CATEGORT_URL = "https://fakestoreapi.com/products/categories";
const GET_DATA_BY_CATEGORY = "https://fakestoreapi.com/products/category/";

function FilterBar() {
  const [categoryList, setCategoryList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const allProductList = useSelector((data) => data.LandingReducers.filterFor);
  useEffect(() => {
    axios.get(GET_CATEGORT_URL).then((res) => {
      if (res.status === 200) {
        let data = res.data;
        let list = data.map((item, index) => ({
          id: index,
          item,
          isChecked: false,
        }));
        setCategoryList(list);
      }
    });
  }, []);

  useEffect(() => {
    if (filteredData.length !== 0) {
      dispatch({ type: "FILTERED_DATA", payload: filteredData });
    } else if (filteredData.length === 0) {
      dispatch({ type: "FILTERED_DATA", payload: allProductList });
    }
  }, [filteredData]);

  const handleUncheck = (cat, status) => {
    let temp = categoryList;
    temp.map((items) => {
      if (items.id === cat.id) {
        items.isChecked = status;
      }
    });
    setCategoryList([...temp]);
    if (status === true) {
      fetchDataByCatagory(cat);
    } else if (status === false) {
      removeDataFromList(cat);
    }
  };

  const fetchDataByCatagory = (cat) => {
    axios.get(GET_DATA_BY_CATEGORY + cat.item).then((res) => {
      if (res.status === 200) {
        let result = res.data;
        let list = result.map((data) => ({
          ...data,
          count: 0,
          showCounter: false,
        }));
        setFilteredData([...filteredData, ...list]);
      }
    });
  };

  const removeDataFromList = (cat) => {
    let filList = filteredData;
    filList = filteredData.filter((data) => data.category !== cat.item);
    setFilteredData(filList);
  };

  return (
    <div className="filterBarContainer">
      <div className="filterHeading">
        <h5> Category Filter</h5>
      </div>
      {categoryList &&
        categoryList.map((category) => (
          <div className="checkCategory">
            {category.isChecked ? (
              <FiCheckSquare onClick={() => handleUncheck(category, false)} />
            ) : (
              <BiSquareRounded onClick={() => handleUncheck(category, true)} />
            )}
            &nbsp;
            <h5>{category.item}</h5>
          </div>
        ))}
    </div>
  );
}

export default FilterBar;
