import request from "../../Utils/request";
import { setHelpCalls } from "../Features/mapSlice";

export const getHelpCalls = () => {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/api/campaigns");
      dispatch(setHelpCalls());
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};