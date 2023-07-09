import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsContainer from "../containers/ProductsContainer";
import Checkout from "./Checkout";
import AddToBasket from "./AddToBasket";

const ShopProduct = () => {
  const productList = [
    { title: "PS5", category: "electronics", price: 500 },
    { title: "X-box", category: "electronics", price: 400 },
    { title: "TV", category: "electronics", price: 1000 },
    { title: "Jacket", category: "clothing", price: 50 },
    { title: "Trousers", category: "clothing", price: 30 },
    { title: "T-Shirts", category: "clothing", price: 10 },
    { title: "Sofa", category: "furniture", price: 5000 },
    { title: "Coffee Table", category: "furniture", price: 300 },
    { title: "Desk", category: "furniture", price: 200 },
  ];

  const [basket, setBasket] = useState([]);

  const saveProduct = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
    console.log(basket);
  };

  const nodeList = productList.map((product, index) => (
    <li key={index} className={product.category}>
      {product.category}: {product.title}: £{product.price}
      <button onClick={() => saveProduct(product)}>Add to Basket</button>
    </li>
  ));

  const basketItem = basket.map((item, index) => {
     return <li key={index}>{item.title} £{item.price}</li>
  })

  return (
    <>
      <h1>Products</h1>
      <ul>{nodeList}</ul>

        <h2>Basket</h2>
        <ul>{basketItem}</ul>
    </>
  );
};

export default ShopProduct;
