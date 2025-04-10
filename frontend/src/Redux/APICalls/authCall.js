import { login, register } from "../Features/authSlice";
import request from "../../Utils/request";

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/login", user);
      dispatch(login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};

export const CreateAcount = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/register", user);
      dispatch(register(data.message));
    } catch (error) {
      console.log(error);
    }
  };
};
