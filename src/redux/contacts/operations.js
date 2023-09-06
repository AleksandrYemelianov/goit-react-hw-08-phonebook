import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/services/instanceAPI";
import { token } from "redux/services/tokenAPI";

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
export const updateContact = createAsyncThunk('contacts/updateContact', async (dataContact, thunkAPI) => {
    try {
        const tokenAPI = thunkAPI.getState().auth.token;
        token.set(tokenAPI);

        const {data} = await instance.patch(`/contacts/${dataContact.id}`, {
        name: dataContact.name,
        number: dataContact.number,
        });
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
