import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Dish } from "../models/IDish";

type RestaurantsMenu = {
    list: Dish[];
    actualRest: string;
    amount_skipPages: number;
    loading: boolean;
    error: string | null;
}

const initialState:RestaurantsMenu = {
    list: [],
    actualRest: '',
    amount_skipPages: 0,
    loading: false,
    error: null,
}

interface IParams {
    id: string | undefined,
    skipPage: number
}

export const fetchRestaurantsMenu = createAsyncThunk<Dish[], IParams, {rejectValue: string}>(
    'allRestaurants/fetchRestaurantsMenu',
    async function(params){
        const {id, skipPage} = params
        const response = await fetch(`/api/allRestaurantsDishes?id=${id}&skipPage=${skipPage}`);
        const data = await response.json();

        return data;
    }
);

const restaurantsMenu = createSlice({
    name: 'restaurantsMenu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRestaurantsMenu.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchRestaurantsMenu.fulfilled, (state, action) => {
            if(state.actualRest.length === 0) state.actualRest = action.payload[0].restaurantsId;
            
            if(state.actualRest !== action.payload[0].restaurantsId) {
                state.actualRest = action.payload[0].restaurantsId;
                state.amount_skipPages = 0;
                state.list = action.payload;
                state.amount_skipPages = state.amount_skipPages + 1;
                state.loading = false;
            } else {
                state.amount_skipPages = state.amount_skipPages + 1;
                state.list.push(...action.payload);
                state.actualRest = action.payload[0].restaurantsId;
                state.loading = false;
            } 
        }) 
    }
})

export default restaurantsMenu.reducer;