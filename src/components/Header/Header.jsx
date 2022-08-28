import React from "react";
import {LinkHeader} from '../LinkHeader/LinkHeader'
import styles from './Header.module.scss';

const Header = function() {
    return(
        <header className={styles.header}>
            <div className={styles.headerLinks}>
                <LinkHeader innertext = {'shop'} href = {'/'} />
                <div className={styles.vertLine}></div>
                <LinkHeader innertext = {'Shopping Cart'} href = {'/shopping_cart'}/>
            </div>
        </header>
    )
}

export {Header}