import React from "react";
import styles from './ShopingCart.module.scss';
import { Button } from "../../Button/Button";
import { FormGetUsersData } from "../../Form_getUsersData/Form_getUsersData";
import { TotalOrder } from "../../TotalOrder/TotalOrder";
import classNames from 'classnames';

const ShoppingCart = function(){

    return(
        <div className={styles.shopingCart}>
            <div className={classNames(styles.shopingCart_mainInfo, styles.shopingCart_container)}>
                <FormGetUsersData />
                <TotalOrder />
            </div>
            <div className={styles.submitInfo}>
                <Button text = {'Submit'}/>
            </div>
        </div>
    )
}

export {ShoppingCart}