import { LinkHeader } from "../LinkHeader/LinkHeader";
import styles from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../../hook";

const Header = function () {
    const quantityOfGoods = useAppSelector(
        (state) => state.shoppingCart_icon.quantityOfGoods
    );

    return (
        <header className={styles.header}>
            <div className={styles.headerLinks}>
                <LinkHeader href={"/"} innertext={"Shop"} />
                <div className={styles.vertLine}></div>
                <div className={styles.shoppingCart_container}>
                    <div className={styles.shoppingCart_container_icon}>
                        <FaShoppingCart className={styles.shoppingCart} />
                        {quantityOfGoods >= 1 ? (
                            <span>{quantityOfGoods}</span>
                        ) : null}
                    </div>
                    <LinkHeader
                        href={"/shopping_cart"}
                        innertext={`Shopping cart`}
                    />
                </div>
            </div>
        </header>
    );
};

export { Header };
