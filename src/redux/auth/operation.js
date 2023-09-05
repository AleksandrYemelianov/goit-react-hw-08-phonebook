import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: token => {
    instance.defaults.headers['Authorization'] = token;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};


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
        const response = await instance.post(`/users/logout`);
        console.log(response);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
    try {
        const tokenAPI = thunkAPI.getState().auth.token;

        token.set(tokenAPI);

        const { data } = await instance.get(`/users/current`);
        
        return data.user;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
