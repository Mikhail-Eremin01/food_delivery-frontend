import { Routes, Route } from "react-router-dom";
import { Shop } from "./components/pages/Shop/Shop";
import { useEffect } from "react";
import { ShoppingCart } from "./components/pages/ShopingCart/ShopingCart";
import { NonFoundPage } from "./components/pages/NonFoundPage/NonFoundPage";
import { Layout } from "./components/Layout/Layout";
import "./index.css";
import { fetchRestaurants } from "./store/allRestaurantsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantsMenu } from "./components/RestaurantsMenu/RestaurantsMenu";
import { Loading } from "./components/Loading/Loading";
import { useAppSelector, useAppDispatch } from "./hook";

const App = function () {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, []);

    const allRestaurants = useAppSelector(
        (state) => state.allRestaurants.list
    );
    return (
        <div className="App">
            {allRestaurants.length === 0 ? (
                <Loading />
            ) : (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Shop />}>
                            <Route
                                index
                                element={
                                    <RestaurantsMenu/>
                                }
                            />
                            {allRestaurants.map((elem) => {
                                return (
                                    <Route
                                        key={elem._id}
                                        path={":id"}
                                        element={
                                            <RestaurantsMenu/>
                                        }
                                    ></Route>
                                );
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
        </div>
    );
};

export { App };
