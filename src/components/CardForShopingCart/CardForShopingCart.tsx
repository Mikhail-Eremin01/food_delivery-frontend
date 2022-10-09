import styles from "./CardForShopingCart.module.scss";
import { Title } from "../Title/Title";
import InputTypeNumber from "../InputTypeNumber/InputTypeNumber";
import { ImBin } from "react-icons/im";
import { removeDish } from "../../store/totalDishesSlice";
import { totalPrice__removePrice } from "../../store/totalPriceSlice";
import { decrement_quantityOfGoods } from "../../store/shoppingCart_iconSlice";
import { removeProperty } from "../../store/dishAddedToCartSlice";
import { deleteDishFromShoppingCart } from "../../store/dishesInShoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
interface IItem {
    _id: string;
    dishesName: string;
    price: number;
    weight: number;
    image: string;
    available: boolean;
    restaurantsId: string;
}

interface ICardForShopingCart {
    item: IItem
}

const CardForShopingCart = function ({ item }: ICardForShopingCart) {
    const dispatch = useAppDispatch();
    const dishesInShoppingCart = useAppSelector(
        (state) => state.dishesInShoppingCart.dishesInShoppingCartState
    );

    const removeItem = () => {
        dispatch(removeDish(item._id));
        dispatch(
            totalPrice__removePrice(
                item.price * dishesInShoppingCart[item.dishesName]
            )
        );
        dispatch(decrement_quantityOfGoods());
        dispatch(removeProperty(item.dishesName));
        dispatch(deleteDishFromShoppingCart(item.dishesName));
    };

    return (
        <div className={styles.CardForShopingCart}>
            <div className={styles.CardForShopingCart_imgContainer}>
                <img
                    className={styles.CardForShopingCart__img}
                    src={item.image}
                    alt=""
                />
            </div>
            <div className={styles.CardForShopingCart_infoAboutDish}>
                <Title
                    name={item.dishesName}
                />
                <p className={styles.CardForShopingCart_infoAboutDish__price}>
                    price: {item.price}
                </p>
                <InputTypeNumber name={item.dishesName} price={item.price} />
            </div>
            <button className={styles.deleteItemFromShoppingCart}>
                <ImBin onClick={removeItem} />
            </button>
        </div>
    );
};

export { CardForShopingCart };
