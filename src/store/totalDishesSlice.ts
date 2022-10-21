import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../models/IDish";

type TotalDishesState = {
    list: Dish[];
}

const initialState: TotalDishesState = {
    list: [],
}

const totalDishesSlice = createSlice({
    name: "totalDishes",
    initialState,
    reducers: {
        addNewDish(state, action: PayloadAction<Dish>) {
            state.list.push(action.payload);
        },
        removeDish(state, action: PayloadAction<string>) {
            state.list = state.list.filter(
                (elem) => elem._id !== action.payload
            );
        },
    },
});

export const { addNewDish, removeDish } = totalDishesSlice.actions;
export default totalDishesSlice.reducer;
