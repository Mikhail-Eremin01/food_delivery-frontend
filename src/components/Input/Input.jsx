import React from "react";
import styles from './Input.module.scss';

const Input = function({ placeholder }){
    return(
        <input placeholder={placeholder} type="text" className={styles.input}/>
    )
}

export { Input }