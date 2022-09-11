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
        removeDish(state, action) {
            state.totalDishes = state.totalDishes.filter(elem => elem._id !== action.payload);
        }
    }
})

export const { addNewDish, removeDish } = totalDishesSlice.actions;
export default totalDishesSlice.reducer;