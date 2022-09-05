import { configureStore } from '@reduxjs/toolkit';
import totalPriceReducer from './totalPriceSlice';
import totalDishesReducer from './totalDishesSlice';
import changeCardsStateReducer from './dishAddedToCartSlice';
import shoppingCart_iconReducer from './shoppingCart_icon';

export default configureStore({
    reducer: {
        totalPrice: totalPriceReducer,
        totalDishes: totalDishesReducer,
        changeCardsState: changeCardsStateReducer,
        shoppingCart_icon: shoppingCart_iconReducer
    }
})