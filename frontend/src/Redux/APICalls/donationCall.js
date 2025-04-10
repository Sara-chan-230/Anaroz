import request from "../../Utils/request";
import {
  setLoading,
  clearLoading,
  setOrderID,
  setPurchaseSuccess,
  setError,
  clearError,
  setArtworkId,
  clearPurchaseSuccess
} from "../Features/donationSlice";

export const createHopePieceOrder = (amount) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await request.post("/api/paypal/create-order", { amount });
      dispatch(setOrderID(data.id));
      dispatch(clearLoading());
    } catch (error) {
      dispatch(setError(error.response?.data?.message || "Failed to create order"));
      dispatch(clearLoading());
    }
  };
};

export const captureHopePieceOrder = (orderID, artworkId) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      
      // Capture PayPal order
      const { data: paymentData } = await request.post(`/api/paypal/capture-order/${orderID}`);
      
      // Save hope piece purchase
      await request.post("/api/hope-pieces", {
        artworkId,
        paymentInfo: paymentData,
      });

      dispatch(setPurchaseSuccess());
      dispatch(clearLoading());
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        dispatch(clearPurchaseSuccess());
      }, 3000);
    } catch (error) {
      dispatch(setError(error.response?.data?.message || "Purchase failed"));
      dispatch(clearLoading());
    }
  };
};

export const selectArtworkForPurchase = (artworkId) => {
  return (dispatch) => {
    dispatch(setArtworkId(artworkId));
    dispatch(clearError());
  };
};