import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns : [],
  isCampaignCreated : false,
  loading : false,
};

export const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setCampaigns : (state,action) => {
        state.campaigns = action.payload;
    },
    setloading : (state)=>{
      state.loading = true;
    },
    clearLoading : (state)=>{
      state.loading = false;
    },
    setCampaignCreated : (state)=>{
      state.isCampaignCreated = true;
    },
    clearCampaignCreated : (state)=>{
      state.isCampaignCreated = false;
    },
    

  },
});

export const {setCampaigns, setCampaignCreated,setloading,clearLoading,clearCampaignCreated} = campaignsSlice.actions;
export const campaignsReducer = campaignsSlice.reducer;