import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreated: false,
  setLoadign: false,
  isDonate: false,
  isVolunteer: false,
};

export const helpSlice = createSlice({
  name: "help",
  initialState,
  reducers: {
    setCreated: (state) => {
      state.isCreated = true;
    },
    clearCreated: (state) => {
      state.isCreated = false;
    },
    setHelpLoading: (state) => {
      state.setLoadign = true;
    },
    clearHelpLoading: (state) => {
      state.setLoadign = false;
    },
    setDonated: (state) => {
      state.isDonate = true;
    },
    clearDonated: (state) => {
      state.isDonate = false;
    },

    setVolunteer: (state) => {
      state.isVolunteer = true;
    },

    clearVolunteer: (state) => {
      state.isVolunteer = false;
    },
  },
});

export const { setCreated, setHelpLoading, clearCreated, clearHelpLoading, setDonated, clearDonated, setVolunteer, clearVolunteer } =
  helpSlice.actions;
export const helpReducer = helpSlice.reducer;
