import { login, register } from "../Features/authSlice";
import request from "../../Utils/request";
import {toast} from "react-toastify"

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/signin", user);
      dispatch(login(data.user));
      console.log(data)
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};

export const CreateAcount = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/signup", user);
      toast.success("the the acount created succesfuly please login")
      dispatch(register(data.message));
    } catch (error) {
      toast.error(error.message);
    }
  };
};
