import { orglogin } from "../Features/orgauthSlice";
import request from "../../Utils/request";
import { toast } from "react-toastify";


export const loginOrg = (org) => {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/organisations/signin", org);
      toast.success("Logged in successfully!");
      dispatch(orglogin(data.organisation));
      console.log(data.organisation)
      localStorage.setItem("orgInfo", JSON.stringify(data.organisation));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}; 