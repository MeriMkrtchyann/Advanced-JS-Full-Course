import React, { useState } from 'react';
import Fashion from "./img/FASHION.png";
import ShhoppingCartIcon from "./img/shopping_cart_icon.png";
import styles from "./Header.module.css";
import BasketSection from '../BasketSection/BasketSection'

export default function Header() {

  const [value,setValue] = useState(false)

  let isOpen = () =>{
    setValue(!value)
  }

  return (
    <>
    <header className={styles.Header}>
      <section className={styles.Conteyner}>
        <div className={styles.Logo}>
          <img src={Fashion} alt="Fashion Logo" />
        </div>
        <div className={styles.ShoppingCartIcon}>
          <button onClick={isOpen}>
            <img src={ShhoppingCartIcon} alt="Shopping Cart" />
          </button>
        </div>
      </section>
    </header>
    <BasketSection isOpen={value}/>
    </>
  );
}

