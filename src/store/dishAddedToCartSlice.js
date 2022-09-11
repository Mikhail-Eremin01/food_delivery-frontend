import { createSlice } from "@reduxjs/toolkit";

const dishAddedToCartSlice = createSlice({
    name: 'dishAddedToCart',
    initialState: {
        cardsState: {},
    },
    reducers: {
        changeCardsState(state, action) {
            state.cardsState[action.payload.dishesName] = action.payload.itemsId;
        },
        removeProperty(state, action) {
            delete state.cardsState[action.payload];
        }
    }
})

export const { changeCardsState, removeProperty } = dishAddedToCartSlice.actions;
export default dishAddedToCartSlice.reducer;