import { configureStore } from '@reduxjs/toolkit';
import totalPriceReducer from './totalPriceSlice';
import totalDishesReducer from './totalDishesSlice';
import changeCardsStateReducer from './dishAddedToCartSlice';
import shoppingCart_iconReducer from './shoppingCart_iconSlice';
import allRestaurantsReducer from './allRestaurantsSlice';
import restaurantsMenuReducer from './restaurantsMenuSlice';
import dishesInShoppingCartReducer from './dishesInShoppingCartSlice';

export default configureStore({
    reducer: {
        totalPrice: totalPriceReducer,
        totalDishes: totalDishesReducer,
        changeCardsState: changeCardsStateReducer,
        shoppingCart_icon: shoppingCart_iconReducer,
        allRestaurants: allRestaurantsReducer,
        restaurantsMenu: restaurantsMenuReducer,
        dishesInShoppingCart: dishesInShoppingCartReducer
    }
})