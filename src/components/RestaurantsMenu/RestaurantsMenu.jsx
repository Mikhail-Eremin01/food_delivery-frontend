import React from "react";
import styles from './RestaurantsMenu.module.scss';
import { Card } from '../Card/Card';

const RestaurantsMenu = function({ menu }){

    return(
        <div className={styles.restaurantsMenu}>
            {menu.map((item)=> {
                return <Card key={item._id} item = {item} />
            })}
        </div>
    )
}

export { RestaurantsMenu }