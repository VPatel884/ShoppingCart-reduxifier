import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cartIcon.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Shopsy</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
