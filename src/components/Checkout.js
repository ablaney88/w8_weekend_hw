import React, {useState} from "react";
import AddToBasket from "./AddToBasket";
import ShopProduct from "./Product";

const Checkout = () => {

    // const [productList, setProductList] = useState([
    //     { title: "PS5", category: "electronics", price: 500},
    //     { title: "X-box", category: "electronics" ,price: 400},
    //     { title: "TV", category: "electronics", price: 1000},
    //     { title: "Jacket", category: "clothing", price: 50},
    //     { title: "Trousers", category: "clothing", price: 30},
    //     { title: "T-Shirts", category: "clothing", price: 10},
    //     { title: "Sofa", category: "furniture", price: 5000},
    //     { title: "Coffee Table", category: "furniture", price: 300},
    //     { title: "Desk", category: "furniture", price: 200},
    // ])

    // const [buyProduct, setBuyProduct] = useState([])

    // const priceTotal = productList.reduce((total, product) => {
    //     return total + product.price
    //   }, 0)

    return(
        <>
        <h1>Basket</h1>
        <AddToBasket />
        {/* <p>Total: {priceTotal}</p> */}
        </>

    )
}

export default Checkout