import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  purchaseSuccess: false,
  error: null,
  orderID: null,
  purchaseDetails: null,
  artworkId: null,
};

const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    clearLoading: (state) => {
      state.loading = false;
    },
    setOrderID: (state, action) => {
      state.orderID = action.payload;
    },
    setPurchaseSuccess: (state) => {
      state.purchaseSuccess = true;
    },
    clearPurchaseSuccess: (state) => {
      state.purchaseSuccess = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setArtworkId: (state, action) => {
      state.artworkId = action.payload;
    },
    resetHopePieceState: () => initialState,
  },
});

export const {
  setLoading,
  clearLoading,
  setOrderID,
  setPurchaseSuccess,
  clearPurchaseSuccess,
  setError,
  clearError,
  setArtworkId,
  resetHopePieceState,
} = donationSlice.actions;

export const donationReducer = donationSlice.reducer;