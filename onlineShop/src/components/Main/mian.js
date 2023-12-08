import React from "react";
import "./main.style.css";
import ProductsArray from "./productsArray";

export default function Main({ setCart }) {
  return (
    <main className="Main">
      <section className="ConteynerProducts">
        <div className="Products">
          <ProductsArray setCart={setCart} />
        </div>
      </section>
    </main>
  );
}