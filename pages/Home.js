import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import {
  getAllProducts,
  getProductsError,
  getProductsLoading,
} from "../store/slices/productsSlice";

export default function Home() {
  const productsList = useSelector(getAllProducts);
  const productsLoading = useSelector(getProductsLoading);
  const productsError = useSelector(getProductsError);

  return productsLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : productsError ? (
    <h3 style={{ textAlign: "center" }}>{productsError}</h3>
  ) : (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
