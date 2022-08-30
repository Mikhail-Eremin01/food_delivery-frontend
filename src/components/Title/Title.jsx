import React from "react";
import styles from './Title.module.scss';

const Title = function({ name, ownStyled }){
    return(
        <p style = {ownStyled} className={styles.title}>{name}</p>
    )
}

export { Title }