import { createSlice } from "@reduxjs/toolkit";

const shoppingCart_icon = createSlice({
    name: 'shoppingCart_icon',
    initialState: {
        quantityOfGoods: 0,
    },
    reducers: {
       increment_quantityOfGoods(state) {
        state.quantityOfGoods += 1;
       },
       decrement_quantityOfGoods(state) {
        state.quantityOfGoods -= 1;
       }
    }
})

export const { increment_quantityOfGoods, decrement_quantityOfGoods } = shoppingCart_icon.actions;
export default shoppingCart_icon.reducer;