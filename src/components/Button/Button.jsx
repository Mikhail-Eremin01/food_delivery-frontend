import React from "react";
import styles from './Button.module.scss';

const Button = function({ text }){
    return(
        <input className = {styles.submitButton} type = 'button' value = {text}/>
    )
}

export {Button}