import React from "react";
import styles from "./Shop.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsMenu } from "../../../store/restaurantsMenuSlice";

const Shop = function () {
  const dispatch = useDispatch();
  const restaurantsMenu = useSelector(
    (state) => state.restaurantsMenu.restaurantsMenu
  );

  const allRestaurants = useSelector(
    (state) => state.allRestaurants.allRestaurants
  );
  const clickk = async (e) => {
    dispatch(fetchRestaurantsMenu(e.target.pathname.substring(1)));
  };

  return (
    <div className={styles.shop}>
      <ul>
        {!allRestaurants
          ? "Loading"
          : allRestaurants.map((elem) => {
              return (
                <li onClick={clickk} key={elem._id}>
                  <NavLink to={elem._id}>{elem.name}</NavLink>
                </li>
              );
            })}
      </ul>
      <Outlet />
    </div>
  );
};

export { Shop };
