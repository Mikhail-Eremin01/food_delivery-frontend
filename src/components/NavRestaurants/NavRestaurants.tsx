import styles from "./NavRestaurants.module.scss";
import { Loading } from "../Loading/Loading";
import {CustomLink} from '../CustomLink/CustomLink';
import { useAppSelector } from "../../hook";
import { fetchRestaurantsMenu } from "../../store/restaurantsMenuSlice";
import { useAppDispatch } from "../../hook";

const NavRestaurants = function () {
    const dispatch = useAppDispatch();
    const changeRestaurant = async (id:string) => {
        dispatch(fetchRestaurantsMenu({id, skipPage: 0}));
    };
    const allRestaurants = useAppSelector(
        (state) => state.allRestaurants.list
    );

    return (
        <aside className={styles.navRestaurants}>
            <ul>
                {!allRestaurants
                    ? <Loading />
                    :   allRestaurants.map((elem) => {
                            return (
                            <li style={{
                                backgroundImage: `url(logosCompanies${elem.image})`,
                                }} 
                                className = {styles.restLogo} onClick={() => changeRestaurant(elem._id)} key={elem._id}
                            >
                                <CustomLink elem = {elem} />
                            </li>
                        );
                    })}
            </ul>
        </aside>
    );
};
export { NavRestaurants };
