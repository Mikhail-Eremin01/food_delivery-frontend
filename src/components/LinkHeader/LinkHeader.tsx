import { Link, useMatch } from "react-router-dom";
import styles from './LinkHeader.module.scss'

interface ILinkHeader {
    href: string,
    innertext: string
}

const LinkHeader = function({href, innertext}:ILinkHeader){
    const match = useMatch({
        path: href,
        end: href.length === 1
    });
    return(
        <Link 
            to={href}
            style={{
                textDecoration: match ? 'underline #f5d217 2px' : 'none'
            }}
            className={styles.link} 
        >
            {innertext}
        </Link>
    )
}

export {LinkHeader}