import React, { useState } from 'react';
import styles from './InputTypeNumber.module.scss';

function InputTypeNumber({ plusTotalPrice, minusTotalPrice }) {

    const [quantityNum, setQuantityNum] = useState(1);

    const increment = () => {
        plusTotalPrice();
        setQuantityNum(quantityNum + 1);
    }
    const decrement = () => {
        
        if(quantityNum > 1) {
            minusTotalPrice();
            setQuantityNum(quantityNum - 1);
        }
    }
    const change = () => true;

    return (
        <div className={styles.container_inputNumber}>
            <button className = {styles.quantity_arrow_minus} onClick = {decrement}> - </button>
            <input className = {styles.quantity_num} type="number" value={quantityNum} onChange = {change} />
            <button className = {styles.quantity_arrow_plus} onClick = {increment}> + </button>
        </div>
    )
}

export default InputTypeNumber