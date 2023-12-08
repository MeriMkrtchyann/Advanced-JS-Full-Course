import React  from 'react';
import Fashion from "./img/FASHION.png"
import ShhoppingCartIcon from "./img/shopping_cart_icon.png"
import  "./header.style.css";
import {useState} from "react"


export default function Header({ cart }) {

  const [isOpen , setIsOpen] = useState(false)

  const value = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <header className="Header">
      <section className="Conteyner">
        <div className="Logo">
          <img src={Fashion} alt="Fashion Logo" />
        </div>
        <div className="ShoppingCartIcon">
          <button onClick={value}>
            <img src={ShhoppingCartIcon} alt="Shopping Cart" />
          </button>
        </div>
      </section>
    </header>
    {isOpen && (
          <section className="CartItems">
              <ul>
                  {cart.map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
              </ul>
          </section>
    )}
    </>
  );
}

