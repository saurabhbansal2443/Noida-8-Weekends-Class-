import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice( {
    name : "user",
    initialState : {
        user : null 
    },
    reducers: {
        addUser : (state , action)=>{
            let data = action.payload;
            state.user = data ;
        },
        removeUser : (state )=>{
            state.user = null ;
        }
    }
})

export let { addUser , removeUser} = userSlice.actions;

export default userSlice.reducer;