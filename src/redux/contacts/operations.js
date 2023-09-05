import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "redux/services/instanceAPI";
import { token } from "redux/services/tokenAPI";


axios.defaults.baseURL = "https://64eb12d7e51e1e82c576f8a0.mockapi.io";

export const getContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const tokenAPI = thunkAPI.getState().auth.token;
        token.set(tokenAPI);

        const { data } = await instance.get('/contacts');
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const createContact = createAsyncThunk('contacts/createContact', async (dataContact, thunkAPI) => {
    try {
        const tokenAPI = thunkAPI.getState().auth.token;
        token.set(tokenAPI);

        const { data } = await instance.post('/contacts', dataContact);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const tokenAPI = thunkAPI.getState().auth.token;
        token.set(tokenAPI);

        const { data } = await instance.delete(`/contacts/${id}`);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const updateContact = createAsyncThunk('contacts/updateContact', async (id, thunkAPI) => {
    try {
        const tokenAPI = thunkAPI.getState().auth.token;
        token.set(tokenAPI);

        const { data } = await instance.patch(`/contacts/${id}`);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
