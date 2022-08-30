import React from "react";
import styles from './CardForShopingCart.module.scss';
import { Title } from "../Title/Title";
import InputTypeNumber from "../InputTypeNumber/InputTypeNumber";

const CardForShopingCart = function({ item, plusPrice, minusPrice }){

    const plusTotalPrice = () => {
        plusPrice(item.price);
    }
    const minusTotalPrice = () => {
        minusPrice(item.price);
    }

    return(
        <div className={styles.CardForShopingCart}>
            <div className={styles.CardForShopingCart_imgContainer}>
                <img className={styles.CardForShopingCart__img} src={item.image} alt="" />
            </div>
            <div className={styles.CardForShopingCart_infoAboutDish}>
                <Title ownStyled = {{textAlign : 'center'}} name = {item.dishesName} />
                <span>{item.amount}</span>
                <p className={styles.CardForShopingCart_infoAboutDish__price}>price: {item.price}</p>
                <InputTypeNumber plusTotalPrice = {plusTotalPrice} minusTotalPrice = {minusTotalPrice} />
            </div>
        </div>
    )
}

export {CardForShopingCart}