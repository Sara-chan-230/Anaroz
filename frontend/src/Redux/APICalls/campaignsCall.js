import {
  setCampaigns,
  setCampaignCreated,
  clearCampaignCreated,
  setloading,
  clearLoading
} from "../Features/campaignsSlice";
import request from "../../Utils/request";
import { toast } from "react-toastify";

export const getCampaings = () => {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/api/campaigns");
      dispatch(setCampaigns(data));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};
export const getCampaingsByOrganizationId = (orgId) => {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/campaigns/${orgId}`);
      dispatch(setCampaigns(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};
export const CreateCampaign = (campaign) => {
  return async (dispatch) => {
    try {
      dispatch(setloading);
      await request.post("/api/campaigns", campaign);
      dispatch(setCampaignCreated());
      setTimeout(() => {
        clearCampaignCreated();
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(clearLoading)

    }
  };
};
