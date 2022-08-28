import React from "react";
import styles from './RestaurantsMenu.module.scss';
import { Card } from '../Card/Card';

const RestaurantsMenu = function({ menu }){
    return(
        <div className={styles.restaurantsMenu}>
            {menu.map((item, index)=> {
                return <Card key={item.image + index} item = {item} />
            })}
        </div>
    )
}

export { RestaurantsMenu }