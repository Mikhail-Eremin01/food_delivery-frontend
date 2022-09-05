import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice = createSlice({
    name: 'totalPrice',
    initialState: {
        totalPrice: 0,
    },
    reducers: {
        totalPrice__addPrice(state, action) {
            state.totalPrice += action.payload;
        },
        totalPrice__removePrice(state, action) {
            state.totalPrice -= action.payload;
        },
    }
})

export const { totalPrice__addPrice, totalPrice__removePrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;