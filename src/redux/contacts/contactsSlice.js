import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { createContact, deleteContact, getContacts } from 'redux/contacts/operations';
import { handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected } from 'redux/contacts/contactsReducer';
import { operationsType } from 'redux/contacts/operationsType';

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContacts.fulfilled, handleFulfilledGet)
            .addCase(createContact.fulfilled, handleFulfilledCreate)
            .addCase(deleteContact.fulfilled, handleFulfilledDelete)
            .addMatcher(isAnyOf(...operationsType('pending')), handlePending)
            .addMatcher(isAnyOf(...operationsType('rejected')), handleRejected)
    },
});

export default contactsSlice.reducer