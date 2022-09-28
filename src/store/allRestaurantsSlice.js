import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "allRestaurants/fetchRestaurants",
  async function () {
    const response = await fetch("/mainData");

    const data = await response.json();

    return data;
  }
);

const allRestaurants = createSlice({
  name: "allRestaurants",
  initialState: {
    allRestaurants: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchRestaurants.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchRestaurants.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.allRestaurants = action.payload;
    },
    [fetchRestaurants.rejected]: (state, action) => {},
  },
});

// export const {  } = allRestaurants.actions;
export default allRestaurants.reducer;
