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
    }
})

export const { changeCardsState } = dishAddedToCartSlice.actions;
export default dishAddedToCartSlice.reducer;