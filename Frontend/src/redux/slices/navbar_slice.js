import {createSlice} from '@reduxjs/toolkit';




// Managing only navbar states here like if it open or closed , active page.
const navbarSlice= createSlice({
    name:'navbar',
    initialState:{ 
                 activePage:'Home',
                  isOpen:false
    },
    reducers: {

        // to set the active page
         setActivePage:(state,action)=>{
            state.activePage= action.payload;
         },

        //  to toggle navbar open or close
         toggleNavbar:(state)=>{
            state.isOpen= !state.isOpen;
         },


    }
})
export const {setActivePage, toggleNavbar}= navbarSlice.actions;
export default navbarSlice.reducer;