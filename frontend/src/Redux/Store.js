import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./Features/authSlice";
import { campaignsReducer } from "./Features/campaignsSlice";
import { donationReducer } from "./Features/donationSlice";
import { postsReducer } from "./Features/postSlice";
import { orgauthReducer } from "./Features/orgauthSlice";
import { helpReducer } from "./Features/helpSlice";
import { mapReducer } from "./Features/mapSlice";



export  const  store = configureStore({
    reducer : {
        auth : authReducer,
        campaigns : campaignsReducer,
        donation : donationReducer,
        posts : postsReducer,
        orgauth : orgauthReducer,
        help : helpReducer,
        helpCalls : mapReducer,

    }
})

export default store;