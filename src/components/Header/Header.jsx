import React from "react";
import {LinkHeader} from '../LinkHeader/LinkHeader'
import styles from './Header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux";

const Header = function() {
    const quantityOfGoods = useSelector(state => state.shoppingCart_icon.quantityOfGoods);

    return(
        <header className={styles.header}>
            <div className={styles.headerLinks}>
                <LinkHeader innertext = {'Shop'} href = {'/'} />
                <div className={styles.vertLine}></div>
                <div className={styles.shoppingCart_container}>
                    <div className={styles.shoppingCart_container_icon}>
                        <FaShoppingCart className={styles.shoppingCart} />
                        {quantityOfGoods >= 1 ? <span>{quantityOfGoods}</span> : undefined}
                        
                    </div>
                    <LinkHeader innertext = {`Shopping cart`} href = {'/shopping_cart'}/>
                </div>
            </div>
        </header>
    )
}

export {Header}