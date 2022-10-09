import React from "react";
import styles from './Title.module.scss';

interface ITitle {
    name: string,
}

const Title = function({ name }:ITitle){
    return(
        <p className={styles.title}>{name}</p>
    )
}

export { Title }