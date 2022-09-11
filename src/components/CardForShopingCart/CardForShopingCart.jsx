import React from "react";
import styles from './CardForShopingCart.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../Title/Title";
import InputTypeNumber from "../InputTypeNumber/InputTypeNumber";
import { ImBin } from "react-icons/im";
import { removeDish } from '../../store/totalDishesSlice'
import { totalPrice__removePrice } from '../../store/totalPriceSlice';
import { decrement_quantityOfGoods } from '../../store/shoppingCart_iconSlice';
import { removeProperty } from "../../store/dishAddedToCartSlice";
import { deleteDishFromShoppingCart } from "../../store/dishesInShoppingCartSlice";

const CardForShopingCart = function({ item }){
    const dispatch = useDispatch();
    const dishesInShoppingCart = useSelector(state => state.dishesInShoppingCart.dishesInShoppingCart);

    const removeItem = () => {
        dispatch(removeDish(item._id));
        dispatch(totalPrice__removePrice((item.price * dishesInShoppingCart[item.dishesName])));
        dispatch(decrement_quantityOfGoods());
        dispatch(removeProperty(item.dishesName));
        dispatch(deleteDishFromShoppingCart({ name: item.dishesName }));
    }

    return(
        <div className={styles.CardForShopingCart}>
            <div className={styles.CardForShopingCart_imgContainer}>
                <img className={styles.CardForShopingCart__img} src={item.image} alt="" />
            </div>
            <div className={styles.CardForShopingCart_infoAboutDish}>
                <Title ownStyled = {{textAlign : 'center'}} name = {item.dishesName} />
                <p className={styles.CardForShopingCart_infoAboutDish__price}>price: {item.price}</p>
                <InputTypeNumber name = {item.dishesName} price = {item.price} />
            </div>
            <button className={styles.deleteItemFromShoppingCart}>
                <ImBin onClick={removeItem}/>
            </button>
        </div>
    )
}

export {CardForShopingCart}