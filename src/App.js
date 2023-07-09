import React, {useState} from "react";
import ProductsContainer from "./containers/ProductsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ShopProduct from "./components/Product";
import Checkout from "./components/Checkout"

function App() {

  const [product, setProduct] = useState("")

  return (
    <div className="App">
      <h1>Ye Old Shoppe</h1>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<ShopProduct products={product}/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
