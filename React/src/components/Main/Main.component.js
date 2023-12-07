import style from "./Main.module.css";
import Products from "./Products/Products.component";

export default function Main() {
    return (
        <main className={style.Main}>
            <section className={style.ConteynerProducts}>
                <Products />
            </section>
        </main>
    );
}