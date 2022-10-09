import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const totalPrice:number = 0;

const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState: {
        totalPrice,
    },
    reducers: {
        totalPrice__addPrice(state, action: PayloadAction<number>) {
            state.totalPrice += action.payload;
        },
        totalPrice__removePrice(state, action) {
            state.totalPrice -= action.payload;
        },
    },
});

export const { totalPrice__addPrice, totalPrice__removePrice } =
    totalPriceSlice.actions;
export default totalPriceSlice.reducer;
