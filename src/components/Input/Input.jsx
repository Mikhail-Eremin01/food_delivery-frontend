import React from "react";
import styles from './Input.module.scss';

const Input = function(){
    return(
        <input type="text" className={styles.input}/>
    )
}

export { Input }