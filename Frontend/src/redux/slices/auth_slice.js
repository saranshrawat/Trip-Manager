import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    user: null,
};


const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginSuccess:(state, action)=>{
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logoutSuccess :(state)=>{
            state.isAuthenticated = false;
            state.user = null;
        }

            }
})

const tokenValid= createSlice({
    name:"tokenValid",
    initialState,
    reducers:{
        tokenValidSuccess:(state, action)=>{
            state.isAuthenticated = true;   },


        tokenInvalidSuccess :(state)=>{
            state.isAuthenticated = false;
        }
    }
})

export const {loginSuccess, logoutSuccess}= authSlice.actions;
export default authSlice;

export const {tokenValidSuccess, tokenInvalidSuccess}= tokenValid.actions;
export {tokenValid};