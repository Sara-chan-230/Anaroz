import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    org : null,
}

export const orgauthSlice = createSlice({
    name : "orgauth",
    initialState,
    reducers : {
        orglogin : (state,action) => {
            state.org = action.payload;
        },
    }
});

export const {orglogin} = orgauthSlice.actions;
export const orgauthReducer = orgauthSlice.reducer;