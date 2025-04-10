import { orglogin } from "../Features/orgauthSlice";
import request from "../../Utils/request";
import { toast } from "react-toastify";


export const loginOrg = (org) => {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/login", org);
      dispatch(orglogin(data));
      localStorage.setItem("orgInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}; 