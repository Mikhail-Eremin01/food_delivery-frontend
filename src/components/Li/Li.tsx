import React from "react";
import styles from './Li.module.scss';
import { Link } from "react-router-dom";

interface ILi {
    id: string,
    name: string
}

const Li = function({ id, name }:ILi){
    const wear = () => {
        console.log(111);
    }

    return(
        <li onClick = {wear} id = {id} className = {styles.li}><Link to = {name}></Link>{name}</li>
    )
}

export {Li}