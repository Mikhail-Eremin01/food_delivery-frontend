import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurantsMenu = createAsyncThunk(
    'allRestaurants/fetchRestaurantsMenu',
    async function(id){
        const response = await fetch(`/getAllRestaurantsDishes?id=${id}`);
        const data = await response.json();

        return data;
    }
);

const restaurantsMenu = createSlice({
    name: 'restaurantsMenu',
    initialState: {
        restaurantsMenu: null,
        status: null,
        error: null
    },
    reducers: {
       
    },
    extraReducers: {
        [fetchRestaurantsMenu.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchRestaurantsMenu.fulfilled]: (state, action) => {
            state.status = 'resolve';
            state.restaurantsMenu = action.payload;
        },
        [fetchRestaurantsMenu.rejected]: (state, action) => {},
    }
})

// export const {  } = restaurantsMenu.actions;
export default restaurantsMenu.reducer;