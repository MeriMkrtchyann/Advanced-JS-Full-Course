import React from 'react'
import Fashion from "./img/FASHION.png"
import ShhoppingCartIcon from "./img/shopping_cart_icon.png"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.Header}>
            <section className={styles.Conteyner}>
                <div className={styles.Logo}>
                        <img src={Fashion} alt="Fashion Logo" />
                    </div>
                    <div className={styles.ShoppingCartIcon}>
                        <a href="">
                            <img src={ShhoppingCartIcon} alt="Shopping Cart" />
                        </a>
                    </div>
            </section>
        </header>
    );
}
