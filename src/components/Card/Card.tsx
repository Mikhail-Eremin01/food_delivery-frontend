import { Title } from "../Title/Title";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector  } from "../../hook";
import { addNewDish } from "../../store/totalDishesSlice";
import { changeCardsState } from "../../store/dishAddedToCartSlice";
import { totalPrice__addPrice } from "../../store/totalPriceSlice";
import { increment_quantityOfGoods } from "../../store/shoppingCart_iconSlice";
import { increaseNumberOfDish } from "../../store/dishesInShoppingCartSlice";
import { BsCheckLg } from "react-icons/bs";


interface IItem {
    _id: string;
    dishesName: string;
    price: number;
    weight: number;
    image: string;
    available: boolean;
    restaurantsId: string;
}

interface ICard {
    item: IItem
}

const Card = function ({ item }:ICard) {
    const dispatch = useAppDispatch();
    const changeStateInCard = useAppSelector(
        (state) => state.changeCardsState.cardsState
    );
    const addDish = () => {
        dispatch(addNewDish(item));
        dispatch(
            changeCardsState({ dishesName: item.dishesName, itemsId: item._id })
        );
        dispatch(totalPrice__addPrice(item.price));
        dispatch(increment_quantityOfGoods());
        dispatch(increaseNumberOfDish(item.dishesName));
    };

    return (
        <div
            className={
                !item.available
                    ? classNames(styles.card_notAvailable, styles.card)
                    : styles.card
            }
            key={item._id}
        >
            <div className={styles.img_container}>
                <img src={item.image} width={200} alt="" />
            </div>
            <Title
                name={
                    item.dishesName[0].toUpperCase() + item.dishesName.slice(1)
                }
            />
            <div className={styles.container_priceAndButton}>
                <div className={styles.mainInfo}>
                    <div className={styles.price}>
                        <span>{item.price}</span>
                        <span>$</span>
                    </div>
                    <div
                        className={
                            item.available === true
                                ? styles.available
                                : styles.notAvailable
                        }
                    >
                        {item.available === true
                            ? "available"
                            : "not available"}
                    </div>
                </div>
                <div className={styles.container_button}>
                    {changeStateInCard[item.dishesName] === item._id ? (
                        <BsCheckLg className={styles.dishAdded} />
                    ) : (
                        <input
                            className={
                                !item.available
                                    ? classNames(
                                          styles.container_button__button_notAvailable,
                                          styles.container_button__button
                                      )
                                    : styles.container_button__button
                            }
                            type="button"
                            value="Add to Cart"
                            onClick={addDish}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export { Card };
