import React from "react";
import "./Header.css";
import { FiShoppingCart } from 'react-icons/fi';
import {FaCartArrowDown} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";


function Header() {
  
  const isCartOpen = useSelector((data)=>data.LandingReducers.isCartOpen);
  const iconChange = useSelector((data)=>data.LandingReducers.cartData);
  const handleCart = useDispatch();

  const handleCartmodel = () =>{
    handleCart({type:"cartModel",payload:!isCartOpen});
  }
  return (
    <div className="headerContainer">
      <div>
        <img
          style={{
            height: "90px",
          }}
          src="https://www.logo.wine/a/logo/Snapdeal/Snapdeal-Logo.wine.svg"
          alt="logo"
        />
      </div>
      <div>
        {(iconChange.length === 0) ?
         <FiShoppingCart size={35} color="white" onClick = {()=>handleCartmodel()} style = {{padding:'0px 10px 0px 0px'}}  />
         :
         <FaCartArrowDown size={35} color="white" onClick = {()=>handleCartmodel()} style = {{padding:'0px 10px 0px 0px'}}  />
         }
      </div>
    </div>
  );
}


export default Header;
