import request from "../../Utils/request";
import { toast } from "react-toastify";
import { clearCreated, clearDonated, clearVolunteer, setCreated, setDonated, setHelpLoading, setVolunteer } from "../Features/helpSlice";
import { clearLoading } from "../Features/campaignsSlice";



export const CreateHelpCall = (helpData) => {
  return async (dispatch) => {
    try {
      dispatch(setHelpLoading());
      const {data} = await request.post("/api/help_calls", helpData);
      toast.success(data.message)
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
      await request.post("/api/donations/donate", data);
      toast.success(data.message)
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
      await request.post("/api/donations/volunteer", data);
      toast.success(data.message)
      dispatch(setVolunteer());
      setTimeout(() => {
        clearVolunteer();
      }, 2000);
    dispatch(clearLoading())
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(clearLoading())

    }
  };
};