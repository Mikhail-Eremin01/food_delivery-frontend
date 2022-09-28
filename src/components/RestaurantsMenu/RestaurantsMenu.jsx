import React, { useState } from "react";
import styles from "./RestaurantsMenu.module.scss";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurantsMenu } from "../../store/restaurantsMenuSlice";
import { useParams } from "react-router-dom";

const RestaurantsMenu = function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(restaurantsId);
  const restaurantsMenu = useSelector(
    (state) => state.restaurantsMenu.restaurantsMenu
  );
  // dispatch(fetchRestaurantsMenu(id));

  // console.log(restaurantsMenu);
  return (
    <div className={styles.restaurantsMenu}>
      {!restaurantsMenu ? (
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
