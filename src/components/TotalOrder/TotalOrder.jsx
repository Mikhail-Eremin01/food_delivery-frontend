import React from "react";
import styles from './TotalOrder.module.scss';
import { CardForShopingCart } from "../CardForShopingCart/CardForShopingCart";

const TotalOrder = function({ totalOrder = [], plusTotalPrice, minusTotalPrice }) {

    const plusPrice = (price) => {
        plusTotalPrice(price);
    }
    const minusPrice = (price) => {
        minusTotalPrice(price);
    }

    return(
        <div className={styles.totalOrder}>
            <div className={styles.totalOrder__title}>Shoping cart</div>
            <div className={styles.totalOrder_container}>
                {!totalOrder.length ? 
                <p className={styles.shopingCartEmpty}>Shoping cart is empty</p> :
                totalOrder.map((item) => {
                    return <CardForShopingCart
                                key = {item._id}
                                item = {item}
                                plusPrice = {plusPrice}
                                minusPrice = {minusPrice}
                            />
                })}
            </div>
        </div>
    )
}

export { TotalOrder }