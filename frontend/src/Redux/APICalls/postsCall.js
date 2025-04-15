import request from "../../Utils/request";
import { setPosts, clearPostCreated, clearPostLoading, setloadingPost, setPostCreated } from "../Features/postSlice";
import { toast } from "react-toastify";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/api/posts");
      dispatch(setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export const getPostsByOrganizationId = (orgId) => {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/compaigns/organisation/${orgId}`);
      dispatch(setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export const CreatePost = (postData) => {
  return async (dispatch) => {
    try {
      dispatch(setloadingPost());
      await request.post("/api/posts", postData);
      dispatch(setPostCreated());
      setTimeout(() => {
        clearPostCreated();
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(clearPostLoading());

    }
  };
};
