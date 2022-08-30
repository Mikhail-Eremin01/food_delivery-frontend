import React from "react";
import styles from './ShopingCart.module.scss';
import { Button } from "../../Button/Button";
import { FormGetUsersData } from "../../Form_getUsersData/Form_getUsersData";
import { TotalOrder } from "../../TotalOrder/TotalOrder";
import classNames from 'classnames';

const ShoppingCart = function({ cardItems, totalPrice, plusPrice, minusPrice}){

    const plusTotalPrice = (price) => {
        plusPrice(price);
    }
    const minusTotalPrice = (price) => {
        minusPrice(price);
    }

    return(
        <div className={styles.shopingCart}>
            <div className={classNames(styles.shopingCart_mainInfo, styles.shopingCart_container)}>
                <FormGetUsersData />
                <TotalOrder
                    totalOrder = {cardItems}
                    plusTotalPrice = {plusTotalPrice}
                    minusTotalPrice = {minusTotalPrice}
                />
            </div>
            <div className={styles.submitInfo}>
                <p className={styles.submitInfo__totalPrice}>Total price: <span>{totalPrice}₴</span></p>
                <Button text = {'Submit'}/>
            </div>
        </div>
    )
}

export {ShoppingCart}