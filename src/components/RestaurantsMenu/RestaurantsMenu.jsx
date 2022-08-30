import React from "react";
import styles from './RestaurantsMenu.module.scss';
import { Card } from '../Card/Card';

const RestaurantsMenu = function({ menu, addCardToBasket }){

    const addCartToBasket = (item) => {
        addCardToBasket(item);
    }

    return(
        <div className={styles.restaurantsMenu}>
            {menu.map((item, index)=> {
                return <Card key={item.image + index} item = {item} addCardToBasket = {addCartToBasket} />
            })}
        </div>
    )
}

export { RestaurantsMenu }