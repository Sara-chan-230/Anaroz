import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns : [],
  isCampaignCreated : false,
  loading : false,
  camp : {}
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
    setCamp : (state,action)=>{
      state.camp = action.payload;
    }

  },
});

export const {setCampaigns, setCampaignCreated,setloading,clearLoading,clearCampaignCreated, setCamp} = campaignsSlice.actions;
export const campaignsReducer = campaignsSlice.reducer;