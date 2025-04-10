import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    regMessage : null,
}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state,action) => {
            state.user = action.payload;
        },
        register : (state,action) => {
            state.regMessage = action.payload;            
        }

    }
});

export const {login, register} = authSlice.actions;
export const authReducer = authSlice.reducer;