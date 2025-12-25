import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../slices/navbar_slice';   

const store = configureStore({
  reducer: {
    navbar: navbarReducer,  
  },
});

export default store;