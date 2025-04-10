import request from "../../Utils/request";
import { toast } from "react-toastify";
import { clearCreated, clearDonated, clearVolunteer, setCreated, setDonated, setHelpLoading, setVolunteer } from "../Features/helpSlice";
import { clearLoading } from "../Features/campaignsSlice";



export const CreateHelpCall = (helpData) => {
  return async (dispatch) => {
    try {
      dispatch(setHelpLoading());
      await request.post("/api/campaigns", helpData);
      dispatch(setCreated());
      setTimeout(() => {
        clearCreated();
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(clearLoading())

    }
  };
};


export const Donate = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setHelpLoading());
      await request.post("/api/campaigns", data);
      dispatch(setDonated());
      setTimeout(() => {
        clearDonated();
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(clearLoading())

    }
  };
};


export const Volunteer = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setHelpLoading());
      await request.post("/api/campaigns", data);
      dispatch(setVolunteer());
      setTimeout(() => {
        clearVolunteer();
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(clearLoading())

    }
  };
};