import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/services/instanceAPI";
import { token } from "redux/services/tokenAPI";


export const registrationUser = createAsyncThunk('auth/registrationUser', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post('/users/signup', credentials);
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post('/users/login', credentials);
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOutUser = createAsyncThunk('auth/logOutUser', async (_, thunkAPI) => {
    try {
        await instance.post(`/users/logout`);
        token.clear()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
    try {
        const tokenAPI = thunkAPI.getState().auth.token;

        token.set(tokenAPI);

        const { data } = await instance.get(`/users/current`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
