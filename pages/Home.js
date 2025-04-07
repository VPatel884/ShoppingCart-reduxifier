import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";

export default function Home() {
  const productsList = useSelector((state) => state.products.list);
  const productsLoading = useSelector((state) => state.products.loading);
  const productsError = useSelector((state) => state.products.error);

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
