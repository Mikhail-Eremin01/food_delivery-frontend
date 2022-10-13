import {Link, useMatch} from "react-router-dom";
import styles from './CustomLink.module.scss';
import classNames from "classnames";

type Restaurant = {
    _id: string,
    address: object,
    image: string,
    name: string,
    telephone: string
}
interface ICustomLink {
    elem: Restaurant
}

function CustomLink({ elem }: ICustomLink) {
    const match = useMatch(elem._id);
    return (
        <Link 
            style={{
                background: match ? 'none' : 'rgba(0, 0, 0, 0.7)',
                height: match ? '100px' : '70px'
            }}
            className = {styles.restLogo__text}
            to={elem._id}>{elem.name}
        </Link>
    )
}

export {CustomLink}