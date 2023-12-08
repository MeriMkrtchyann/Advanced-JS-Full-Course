import React, { useEffect, useState } from "react";
import style from "../../Main.module.css";
import Button from "./Button/Button";

export default function ProductsArray() {
    
  const [products, setProduct] = useState([]);
  const [basketProducts , setBasketProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToBasket = (product) => {
    try {
      if (basketProducts.some((p) => p.id === product.id)) {
        throw new Error("This product is already in the basket.");
      }
      setBasketProducts((prevSelected) => [...prevSelected, product]);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.ConteynerProducts}>
      {products.map((product) => (
        <div key={product.id} className={style.Product}>
          <div className={style.AboutProduct}>
            <img src={product.image} alt={product.title} />
            <span>{product.title}</span>
            <div className={style.ProductPrice}>
              <span> $ {product.price} </span>
              <Button  addToBasket ={addToBasket} product={product}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



