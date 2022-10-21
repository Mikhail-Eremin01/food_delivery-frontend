import styles from "./RestaurantsMenu.module.scss";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";
import {useAppSelector, useAppDispatch} from '../../hook';
import { useEffect } from "react";
import { useState } from "react";
import { fetchRestaurantsMenu } from "../../store/restaurantsMenuSlice";

const RestaurantsMenu = function () {
    const { id } = useParams();
    const pagination_skipPages = useAppSelector( state => state.restaurantsMenu.amount_skipPages);
    const restaurantsMenu = useAppSelector(state => state.restaurantsMenu.list);
    const dispatch = useAppDispatch();

    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if(fetching) {
            console.log('fetching');
            dispatch(fetchRestaurantsMenu({id: id, skipPage: pagination_skipPages}))
            .finally(() => setFetching(false));
        }
    }, [fetching])

    useEffect(() => document.addEventListener('scroll', scrollHandler));

    const scrollHandler = (e:any) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10) {
            setFetching(true);
        }
        return () => document.removeEventListener('scroll', scrollHandler);
    }

    return (
        <div className={styles.restaurantsMenu}>
            {restaurantsMenu.length === 0 ? (
                <Loading />
            ) : (
                restaurantsMenu.map(item => {
                    return <Card key={item._id} item={item} />;
                })
            )}
        </div>
    );
};

export { RestaurantsMenu };