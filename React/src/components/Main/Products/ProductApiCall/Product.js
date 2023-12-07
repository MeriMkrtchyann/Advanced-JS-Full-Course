import style from "../../Main.module.css";
import { useEffect, useState } from "react";
import Button from "./Button/Button";

export default function ProductsArray() {

    const [products, setProduct] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(json => setProduct(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addToBasket = (product) => {
        setBasket((prevBasket) => [...prevBasket, product]);
    };

    return (
        <div className={style.ConteynerProducts}>
            {products.map((product) => (
                <div key={product.id} className={style.Product}>
                    <div className={style.AboutProduct}>
                        <img src={product.image} alt={product.title} />
                        <span>{product.title}</span>
                        <div className={style.ProductPrice}>
                            <span> $ {product.price}</span>
                            <Button
                                product={product}
                                addToBasket={addToBasket}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}
