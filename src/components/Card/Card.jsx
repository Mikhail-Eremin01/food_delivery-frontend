import React from "react";
import {Title} from '../Title/Title';
import styles from './Card.module.scss';

const Card = function({ item }){
    const addItemToBasket = (e) => {
        console.log(item);
    }

    return(
        <div className={styles.card} key={item.id}>
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
             <input type="button" value="add to Cart" onClick={addItemToBasket} />
            </div>
        </div>
    )
}

export { Card }