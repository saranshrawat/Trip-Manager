import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../slices/navbar_slice';   
import authSlice from '../slices/auth_slice';
import {tokenValid} from '../slices/auth_slice';


const store = configureStore({
  reducer: {
    navbar: navbarReducer, 
    auth: authSlice.reducer,
    tokenValid: tokenValid.reducer
  },
});

export default store;