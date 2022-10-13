import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";
import AuthServise from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from '../models/response/AuthResponse';
import { API_URL } from "../http";

// type UserInfo = {
//     email: string;
//     password: string;
// };
type User = {
    user: any;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}

const initialState:User = {
    user: {} as IUser,
    isAuth: false,
    loading: false,
    error: null,
}


export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async function(usersInfo:any, {rejectWithValue}){
        try{
            const {email, password} = usersInfo
        const response = await AuthServise.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        return response.data.user;
        } catch(err:any) {
            return rejectWithValue(err.message)
        }
    }
);

export const fetchRegistration = createAsyncThunk(
    'user/fetchRegistration',
    async function(usersInfo:any, {rejectWithValue}){
        try{
            const {email, password} = usersInfo
            const response = await AuthServise.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            console.log(`REGISTRATION: ${response}`);
            return response.data.user;
        } catch(err:any) {
            console.log(1111)
            return rejectWithValue(err.message)
        }
    }
);

export const fetchLogout = createAsyncThunk(
    'user/fetchLogout',
    async function(_, {rejectWithValue}){
        try{
        await AuthServise.logout()
        localStorage.removeItem('token')
        return {} as IUser;
        } catch(err:any) {
            return rejectWithValue(err.message)
        }
    }
);

export const fetchCheckAuth = createAsyncThunk(
    'user/fetchCheckAuth',
    async function(_, {rejectWithValue}){
        try{
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
        console.log(response);
        localStorage.setItem('token', response.data.accessToken)
        return response.data.user;
        } catch(err:any) {
            return rejectWithValue(err.message)
        }
    }
);

const loginUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.loading = false;
        })
        
        builder
        .addCase(fetchLogout.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLogout.fulfilled, (state, action) => {
            state.isAuth = false;
            state.user = action.payload;
            state.loading = false;
        })

        builder
        .addCase(fetchRegistration.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchRegistration.fulfilled, (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.loading = false;
        })

        builder
        .addCase(fetchCheckAuth.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCheckAuth.fulfilled, (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.loading = false;
        })
    }
})

export default loginUser.reducer;