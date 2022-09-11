import React from "react";
import styles from './RestaurantsMenu.module.scss';
import { Card } from '../Card/Card';
import { Loading } from "../Loading/Loading";
import { useSelector } from "react-redux";

const RestaurantsMenu = function(){
    const restaurantsMenu = useSelector(state => state.restaurantsMenu.restaurantsMenu);

    return(
        <div className={styles.restaurantsMenu}>
            {!restaurantsMenu ? <Loading /> : 
            restaurantsMenu.map((item)=> {
                return <Card key={item._id} item = {item} />
            })}
        </div>
    )
}

export { RestaurantsMenu }