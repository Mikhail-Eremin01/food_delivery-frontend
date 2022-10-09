import { createSlice } from "@reduxjs/toolkit";

const quantityOfGoods:number = 0;

const shoppingCart_icon = createSlice({
    name: 'shoppingCart_icon',
    initialState: {
        quantityOfGoods,
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