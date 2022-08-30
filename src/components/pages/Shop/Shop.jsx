import React, {useState, useEffect} from "react";
import { NavRestaurants } from '../../NavRestaurants.jsx/NavRestaurants';
import { RestaurantsMenu } from '../../RestaurantsMenu/RestaurantsMenu';
import { Loading } from '../../Loading/Loading';
import styles from './Shop.module.scss'

const Shop = function({ addCardToBasket }) {
    
    const [menu, setData] = useState(null);
    const [restaurants, setNavbar] = useState(null);
  
    useEffect(()=> {
        fetch('/mainData')
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setData(res.allMcDonaldsDishes);
          setNavbar(res.restaurants);
        })
    }, [])

    const passMenu = function(e){
        console.log(e.target.id);
        fetch(`/getAllRestaurantsDishes?id=${e.target.id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setData(res);
        })

    }

    const addCartToBasket = (item) => {
        addCardToBasket(item);
    }

    return(
        <div className={styles.shop}>
            {!restaurants ? <Loading /> : <NavRestaurants restaurants = {restaurants} passMenu = {passMenu}/>}
            {!menu ? <Loading /> : <RestaurantsMenu menu = {menu} addCardToBasket = {addCartToBasket} />}
        </div>
    )
}

export {Shop}