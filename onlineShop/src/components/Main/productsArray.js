import React, { useEffect, useState } from "react";
import "./main.style.css";
import ShhoppingCartIcon from "./img/shopping_cart_icon.png"

export default function ProductsArray({cart ,setCart }) {
    
  const [products, setProduct] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    setCart(prevCart => [...prevCart, selectedProduct]);
  }

  return (
    <div className="ConteynerProducts">
      {products.map((product) => (
        <div key={product.id} className="Product">
          <div className="AboutProduct">
            <img src={product.image} alt={product.title} />
            <span>{product.title}</span>
            <div className="ProductPrice">
                <span> $ {product.price} </span>
                <button onClick={() => handleAddToCart(product.id)}>
                    <img src={ShhoppingCartIcon} alt="Shopping Cart" />
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



