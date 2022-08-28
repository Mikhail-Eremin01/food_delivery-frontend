import React from "react";
import { NavLink } from "react-router-dom";
import styles from './LinkHeader.module.scss'

const LinkHeader = function({href, innertext}){
    return(
        <NavLink className={styles.link} to={href}>{innertext}</NavLink>
    )
}

export {LinkHeader}