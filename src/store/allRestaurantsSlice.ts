import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Restaurant = {
  _id: string,
  address: object,
  image: string,
  name: string,
  telephone: string
}

type RestaurantsState = {
  list: Restaurant[];
  loading: boolean;
  error: string | null;
}

export const fetchRestaurants = createAsyncThunk<Restaurant[], void, {rejectValue: string}>(
  "allRestaurants/fetchRestaurants",
  async function () {
    const response = await fetch("/mainData");

    const data = await response.json();

    return data;
  }
);

const initialState:RestaurantsState = {
  list: [],
  loading: false,
  error: null,
}
const allRestaurants = createSlice({
  name: "allRestaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchRestaurants.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    }) 
  }
});

// export const {  } = allRestaurants.actions;
export default allRestaurants.reducer;
