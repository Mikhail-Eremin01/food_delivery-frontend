import { configureStore } from "@reduxjs/toolkit";
import totalPriceReducer from "./totalPriceSlice";
import totalDishesReducer from "./totalDishesSlice";
import changeCardsStateReducer from "./dishAddedToCartSlice";
import shoppingCart_iconReducer from "./shoppingCart_iconSlice";
import allRestaurantsReducer from "./allRestaurantsSlice";
import restaurantsMenuReducer from "./restaurantsMenuSlice";
import dishesInShoppingCartReducer from "./dishesInShoppingCartSlice";

const store = configureStore({
    reducer: {
        totalPrice: totalPriceReducer,
        totalDishes: totalDishesReducer,
        changeCardsState: changeCardsStateReducer,
        shoppingCart_icon: shoppingCart_iconReducer,
        allRestaurants: allRestaurantsReducer,
        restaurantsMenu: restaurantsMenuReducer,
        dishesInShoppingCart: dishesInShoppingCartReducer,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;