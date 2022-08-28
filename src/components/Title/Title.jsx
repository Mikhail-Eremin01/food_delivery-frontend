import React from "react";
import styles from './Title.module.scss';

const Title = function({ name }){
    return(
        <p className={styles.title}>{name}</p>
    )
}

export { Title }