import React from "react";
import Header from "./components/Header/Header.component";
import Main from "./components/Main/Main.component";
import ProductsArray from "./components/Main/Products/ProductApiCall/Product";

export default function App() {
  return (
    <>
      <Header/>
      <Main/>
      <ProductsArray/>
    </> 
  )
}