import { NavLink } from "react-router-dom";
import styles from './LinkHeader.module.scss'

interface ILinkHeader {
    href: string,
    innertext: string
}

const LinkHeader = function({href, innertext}:ILinkHeader){
    return(
        <NavLink className={styles.link} to={href}>{innertext}</NavLink>
    )
}

export {LinkHeader}