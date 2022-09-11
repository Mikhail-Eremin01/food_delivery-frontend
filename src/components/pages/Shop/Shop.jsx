import React, {useEffect} from "react";
import { NavRestaurants } from '../../NavRestaurants.jsx/NavRestaurants';
import { RestaurantsMenu } from '../../RestaurantsMenu/RestaurantsMenu';
import styles from './Shop.module.scss'
import { fetchRestaurants } from "../../../store/allRestaurantsSlice";
import { fetchRestaurantsMenu } from "../../../store/restaurantsMenuSlice";
import { useDispatch } from "react-redux";

const Shop = function() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchRestaurants());
        dispatch(fetchRestaurantsMenu('62fd0c4a1f3a671a69e62a15'));
    })

    return(
        <div className={styles.shop}>
            {<NavRestaurants />}
            {<RestaurantsMenu />}
        </div>
    )
}

export {Shop}