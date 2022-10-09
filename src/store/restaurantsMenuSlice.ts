import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Dish = {
    _id: string;
    dishesName: string;
    price: number;
    weight: number;
    image: string;
    available: boolean;
    restaurantsId: string;
};
type RestaurantsMenu = {
    list: Dish[];
    status: boolean;
    error: string | null;
}

const initialState:RestaurantsMenu = {
    list: [],
    status: false,
    error: null,
}

export const fetchRestaurantsMenu = createAsyncThunk<Dish[], void | string, {rejectValue: string}>(
    'allRestaurants/fetchRestaurantsMenu',
    async function(id){
        const response = await fetch(`/getAllRestaurantsDishes?id=${id}`);
        const data = await response.json();

        return data;
    }
);

const restaurantsMenu = createSlice({
    name: 'restaurantsMenu',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRestaurantsMenu.pending, (state) => {
          state.status = true;
          state.error = null;
        })
        .addCase(fetchRestaurantsMenu.fulfilled, (state, action) => {
          state.list = action.payload;
          state.status = false;
        }) 
      }
})

// export const {  } = restaurantsMenu.actions;
export default restaurantsMenu.reducer;