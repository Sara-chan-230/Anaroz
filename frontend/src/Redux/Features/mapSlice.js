import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    helpCalls : []
}

export const mapSlice = createSlice({
    name : "helpCalls",
    initialState,
    reducers : {
        setHelpCalls : (state, actions)=>{
            state.helpCalls = actions.payload;            
        }
     }
});

export const {setHelpCalls} = mapSlice.actions;
export const mapReducer = mapSlice.reducer;