import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Dish = {
    dishesName: string,
    itemsId: string
};

interface ICardsState {
    [name: string]: string
}

const cardsState:ICardsState = {};
const dishAddedToCartSlice = createSlice({
    name: 'dishAddedToCart',
    initialState: {
        cardsState,
    },
    reducers: {
        changeCardsState(state, action: PayloadAction<Dish>) {
            state.cardsState[action.payload.dishesName] = action.payload.itemsId;
        },
        removeProperty(state, action) {
            delete state.cardsState[action.payload];
        }
    }
})

export const { changeCardsState, removeProperty } = dishAddedToCartSlice.actions;
export default dishAddedToCartSlice.reducer;