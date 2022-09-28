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

const App = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  const allRestaurants = useSelector(
    (state) => state.allRestaurants.allRestaurants
  );

  return (
    <div className="App">
      {!allRestaurants ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Shop />}>
              <Route
                index
                element={
                  <RestaurantsMenu restaurantsId={"62fd0c4a1f3a671a69e62a15"} />
                }
              />
              {allRestaurants.map((elem) => {
                return (
                  <Route
                    key={elem._id}
                    path={":id"}
                    element={<RestaurantsMenu restaurantsId={elem._id} />}
                  ></Route>
                );
              })}
            </Route>
            <Route path="shopping_cart" element={<ShoppingCart />} />
            <Route path="*" element={<NonFoundPage />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export { App };
