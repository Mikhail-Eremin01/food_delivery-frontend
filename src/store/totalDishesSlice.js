import { createSlice } from "@reduxjs/toolkit";

const totalDishesSlice = createSlice({
    name: 'totalDishes',
    initialState: {
        totalDishes: [],
    },
    reducers: {
        addNewDish(state, action) {
            state.totalDishes.push(action.payload.item);
        },
    }
})

export const { addNewDish } = totalDishesSlice.actions;
export default totalDishesSlice.reducer;