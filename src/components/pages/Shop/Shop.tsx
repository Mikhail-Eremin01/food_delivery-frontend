import styles from "./Shop.module.scss";
import { Outlet } from "react-router-dom";
import { NavRestaurants } from "../../NavRestaurants/NavRestaurants";

const Shop = function () {
    return (
        <div className={styles.shop}>
            <NavRestaurants />
            <Outlet />
        </div>
    );
};

export { Shop };
