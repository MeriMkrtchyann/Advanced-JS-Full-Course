import React from "react";
import Header  from "./components/Header/hader";
import Main from "./components/Main/mian"
import {useState} from "react"

export default function App() {

  const [cart, setCart] = useState([]);

  return (
    <React.Fragment>
      <Header cart={cart}/>
      <Main cart={cart} setCart={setCart}/>
    </React.Fragment> 
  )
}