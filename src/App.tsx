import { Routes, Route } from "react-router-dom";
import { Shop } from "./components/pages/Shop/Shop";
import { useEffect } from "react";
import { ShoppingCart } from "./components/pages/ShopingCart/ShopingCart";
import { NonFoundPage } from "./components/pages/NonFoundPage/NonFoundPage";
import { Layout } from "./components/Layout/Layout";
import "./index.css";
import { fetchRestaurants } from "./store/allRestaurantsSlice";
import { RestaurantsMenu } from "./components/RestaurantsMenu/RestaurantsMenu";
import { Loading } from "./components/Loading/Loading";
import { useAppSelector, useAppDispatch } from "./hook";
import { fetchCheckAuth, fetchLogout } from "./store/authorizationSlice";
import {Authorization} from './components/Authorization/Authorization';
import { MessageVerifyAccount } from "./components/MessageVerifyAccount/MessageVerifyAccount";

const App = function () {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRestaurants());
        if(localStorage.getItem('token')) {
            dispatch(fetchCheckAuth());
        }
    }, [dispatch]);

    const allRestaurants = useAppSelector(
        state => state.allRestaurants.list
    );
    const isAuth = useAppSelector( state => state.authorization.isAuth);
    const user = useAppSelector( state => state.authorization.user);
    if(!isAuth) {
        return <Authorization />
    }

    return (
        <div className="App">
            <button onClick={() => dispatch(fetchLogout())}>Logout</button>
            {user.email}
            {!user.isActivated ? 
                <MessageVerifyAccount link = {user.email} />: 
                <>
                    {allRestaurants.length === 0 ? (
                        <Loading />
                    ) : (
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route path="/" element={<Shop />}>
                                    {allRestaurants.map(elem => {
                                        return <Route key={elem._id} path={":id"} element={<RestaurantsMenu />}></Route>;
                                    })}
                                </Route>
                                <Route
                                    path="shopping_cart"
                                    element={<ShoppingCart />}
                                />
                                <Route path="*" element={<NonFoundPage />} />
                            </Route>
                        </Routes>
                    )}
                </>
            }
        </div>
    );
};

export { App };
