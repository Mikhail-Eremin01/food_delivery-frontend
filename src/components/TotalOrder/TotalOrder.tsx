import styles from "./TotalOrder.module.scss";
import { CardForShopingCart } from "../CardForShopingCart/CardForShopingCart";
import { BsFillCartXFill } from "react-icons/bs";
import { useAppSelector } from "../../hook";

const TotalOrder = function () {
    const totalDishes = useAppSelector((state) => state.totalDishes.list);

    return (
        <div className={styles.totalOrder}>
            <div className={styles.totalOrder__title}>Shopping cart</div>
            <div className={styles.totalOrder_container}>
                {!totalDishes.length ? (
                    <p className={styles.shopingCartEmpty}>
                        <BsFillCartXFill />
                    </p>
                ) : (
                    totalDishes.map((item) => {
                        return <CardForShopingCart item={item} />;
                    })
                )}
            </div>
        </div>
    );
};

export { TotalOrder };
