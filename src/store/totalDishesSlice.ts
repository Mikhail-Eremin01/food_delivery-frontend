import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NewDish = {
    _id: string;
    dishesName: string;
    price: number;
    weight: number;
    image: string;
    available: boolean;
    restaurantsId: string;
};
type TotalDishesState = {
    list: NewDish[];
}

const initialState: TotalDishesState = {
    list: [],
}

const totalDishesSlice = createSlice({
    name: "totalDishes",
    initialState,
    reducers: {
        addNewDish(state, action: PayloadAction<NewDish>) {
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
