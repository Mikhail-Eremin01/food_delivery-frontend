import styles from "./RestaurantsMenu.module.scss";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";
import {useAppSelector} from '../../hook';

const RestaurantsMenu = function () {
    const { id } = useParams();
    console.log(id);
    const restaurantsMenu = useAppSelector(
        (state) => state.restaurantsMenu.list
    );
    console.log(restaurantsMenu);
    return (
        <div className={styles.restaurantsMenu}>
            {restaurantsMenu.length === 0 ? (
                <Loading />
            ) : (
                restaurantsMenu.map((item) => {
                    return <Card key={item._id} item={item} />;
                })
            )}
        </div>
    );
};

export { RestaurantsMenu };
