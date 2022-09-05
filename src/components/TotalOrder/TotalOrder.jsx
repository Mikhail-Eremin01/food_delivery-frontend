import React from "react";
import styles from './TotalOrder.module.scss';
import { CardForShopingCart } from "../CardForShopingCart/CardForShopingCart";
import { useSelector } from 'react-redux';

const TotalOrder = function() {
    const totalDishes = useSelector(state => state.totalDishes.totalDishes);

    return(
        <div className={styles.totalOrder}>
            <div className={styles.totalOrder__title}>Shopping cart</div>
            <div className={styles.totalOrder_container}>
                {!totalDishes.length ? 
                <p className={styles.shopingCartEmpty}>Shopping cart is empty</p> :
                totalDishes.map((item) => {
                    return <CardForShopingCart
                                key = {item._id}
                                item = {item}
                            />
                })}
            </div>
        </div>
    )
}

export { TotalOrder }