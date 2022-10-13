import styles from "./RestaurantsMenu.module.scss";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";
import {useAppSelector} from '../../hook';
import { useAppDispatch } from "../../hook";
import { fetchRestaurantsMenu } from "../../store/restaurantsMenuSlice";

const RestaurantsMenu = function () {

    // const dispatch = useAppDispatch();
    // dispatch(fetchRestaurantsMenu('/62fd0c4a1f3a671a69e62a15'));

    const { id } = useParams();
    // console.log(id);
    const restaurantsMenu = useAppSelector(
        (state) => state.restaurantsMenu.list
    );
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
