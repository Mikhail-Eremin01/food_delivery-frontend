import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const stateAuthFormsPosition:boolean = true;
const authFormsPosition = createSlice({
    name: 'authFormsPosition',
    initialState: {
        stateAuthFormsPosition,
    },
    reducers: {
         changeAuthFormsPosition(state, action: PayloadAction<boolean>) {
            state.stateAuthFormsPosition = action.payload;
        }
    }
})

export const { changeAuthFormsPosition } = authFormsPosition.actions;
export default authFormsPosition.reducer;