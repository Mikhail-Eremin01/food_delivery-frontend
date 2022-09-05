import React from "react";
import {Title} from '../Title/Title';
import styles from './Card.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from "react-redux";
import { addNewDish } from '../../store/totalDishesSlice';
import { changeCardsState } from '../../store/dishAddedToCartSlice';
import { totalPrice__addPrice } from '../../store/totalPriceSlice';
import { increment_quantityOfGoods, decrement_quantityOfGoods } from '../../store/shoppingCart_icon';

const Card = function({ item }){
    const dispatch = useDispatch();
    const changeStateInCard = useSelector(state => state.changeCardsState.cardsState);

    const addDish = () => {
        dispatch(addNewDish({item}));
        dispatch(changeCardsState({dishesName: item.dishesName, itemsId: item._id}));
        dispatch(totalPrice__addPrice(item.price));
        dispatch(increment_quantityOfGoods());
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
                {changeStateInCard[item.dishesName] === item._id ?
                <input
                    className={styles.container_button__button_added}
                    type="button"
                    value="Added to shopping cart"
                /> :
                <input
                    className={!item.available ? classNames(styles.container_button__button_notAvailable, styles.container_button__button) : styles.container_button__button}
                    type="button"
                    value="add to Cart"
                    onClick={addDish}
                />
                }
            </div>
        </div>
    )
}

export { Card }