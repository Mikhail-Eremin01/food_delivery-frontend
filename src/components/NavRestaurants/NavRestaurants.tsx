import styles from "./NavRestaurants.module.scss";
import { Loading } from "../Loading/Loading";
import { NavLink } from "react-router-dom";
import { fetchRestaurantsMenu } from "../../store/restaurantsMenuSlice";
import { useAppDispatch, useAppSelector } from "../../hook";

const NavRestaurants = function () {
    const dispatch = useAppDispatch();

    const allRestaurants = useAppSelector(
        (state) => state.allRestaurants.list
    );
    const changeRestaurant = async (e:any) => {
        dispatch(fetchRestaurantsMenu(e.target.pathname.substring(1)));
    };

    return (
        <aside className={styles.navRestaurants}>
            <ul>
                {!allRestaurants
                    ? <Loading />
                    : allRestaurants.map((elem) => {
                          return (
                              <li style={{
                                backgroundImage: `url(logosCompanies${elem.image})`,
                            }} className = {styles.restLogo} onClick={changeRestaurant} key={elem._id}>
                                  <NavLink className = {styles.restLogo__text} to={elem._id}>{elem.name}</NavLink>
                              </li>
                          );
                      })}
            </ul>
        </aside>
    );
};
export { NavRestaurants };
