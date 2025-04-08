import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchError,
  fetchProducts,
  updateAllProducts,
} from "../store/slices/productsSlice";
import {
  fetchCartItems,
  fetchCartItemsError,
  loadCartItems,
} from "../store/slices/cartSlice";
import { fetchData } from "../store/middleware/apiMiddleware";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchData({
        url: "products",
        onStart: fetchProducts.type,
        onSuccess: updateAllProducts.type,
        onError: fetchError.type,
      })
    );

    dispatch(
      fetchData({
        url: "carts/5",
        onStart: fetchCartItems.type,
        onSuccess: loadCartItems.type,
        onError: fetchCartItemsError.type,
      })
    );
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(updateAllProducts(data)))
    //   .catch(() => dispatch(fetchError()));

    // dispatch(fetchCartItems());
    // fetch("https://fakestoreapi.com/carts/5")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(loadCartItems(data));
    //   })
    //   .catch(() => {
    //     dispatch(fetchCartItemsError());
    //   });
  }, []);

  const cartItems = useSelector((state) => state.cartItems.list);
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Shopsy</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <IoCartOutline />
          <div className="cart-items-count">
            {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
