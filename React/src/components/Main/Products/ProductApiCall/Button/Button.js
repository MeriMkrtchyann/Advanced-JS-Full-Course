import ShhoppingCartIcon from "../../../../Header/img/shopping_cart_icon.png"
import {useState} from "react"
import  "./Buton.style.css"

export default function Button({ product, addToBasket }) {
    const [value, setValue] = useState(false);

    const handleAddToBasket = () => {
        addToBasket(product);
        setValue(true);
    };

    return (
        <button onClick={handleAddToBasket} disabled={value}>
            <img src={ShhoppingCartIcon} alt="Shopping Cart" />
        </button>
    );
}