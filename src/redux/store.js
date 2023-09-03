import { configureStore } from "@reduxjs/toolkit";
import {userApi} from './authUser/userSlice'

import contactsReducer from './contacts/slice';
import filterReducer from './filters/slice';
import token from './authUser/tokenSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    token: token,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

