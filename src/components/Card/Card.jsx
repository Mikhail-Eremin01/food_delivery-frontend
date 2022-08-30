import React, { useState } from "react";
import {Title} from '../Title/Title';
import styles from './Card.module.scss';
import classNames from 'classnames';

const Card = function({ item, addCardToBasket }){

    const [isAdded, setIsAdded] = useState(false);

    const addItemToBasket = (e) => {
        addCardToBasket(item);
        setIsAdded(true);
    }
    
    return(
        <div className={!item.available ? classNames(styles.card_notAvailable, styles.card) : styles.card} key={item.id}>
            <div className={styles.mainInfo}>
                <img src={item.image} width={200} alt="" />
                <Title name = {item.dishesName[0].toUpperCase() + item.dishesName.slice(1)}/>
                <div className={styles.price}>
                    <span>{item.price}</span>
                    <span>₴</span>
                </div>
                <div className={item.available === true ? styles.available : styles.notAvailable}>
                    {item.available === true ? 'available': 'not available'}
                </div>
            </div>
            <div className={styles.container_button}>
                {isAdded ? 
                <input
                    className={styles.container_button__button_added}
                    type="button"
                    value="Added to shopping cart"
                /> :

                <input
                    className={!item.available ? classNames(styles.container_button__button_notAvailable, styles.container_button__button) : styles.container_button__button}
                    type="button"
                    value="add to Cart"
                    onClick={addItemToBasket}
                />
                }
            </div>
        </div>
    )
}

export { Card }