import styles from "./InputTypeNumber.module.scss";
import {useAppDispatch, useAppSelector} from '../../hook';
import {
    totalPrice__addPrice,
    totalPrice__removePrice,
} from "../../store/totalPriceSlice";
import {
    increaseNumberOfDish,
    reduceDish,
} from "../../store/dishesInShoppingCartSlice";

interface IInputTypeNumber {
    name: string,
    price: number
}

function InputTypeNumber({ name, price }: IInputTypeNumber) {
    const dispatch = useAppDispatch();
    const dishesInShoppingCart = useAppSelector(
        (state) => state.dishesInShoppingCart.dishesInShoppingCartState
    );

    const addNewDish = () => {
        dispatch(increaseNumberOfDish(name));
        dispatch(totalPrice__addPrice(price));
    };
    const removeOneDish = () => {
        if (dishesInShoppingCart[name] > 1) {
            dispatch(reduceDish(name));
            dispatch(totalPrice__removePrice(price));
        }
    };
    const change = () => true;

    return (
        <div className={styles.container_inputNumber}>
            <button
                className={styles.quantity_arrow_minus}
                onClick={removeOneDish}
            >
                -
            </button>
            <input
                className={styles.quantity_num}
                type="number"
                value={dishesInShoppingCart[name]}
                onChange={change}
            />
            <button className={styles.quantity_arrow_plus} onClick={addNewDish}>
                +
            </button>
        </div>
    );
}

export default InputTypeNumber;
