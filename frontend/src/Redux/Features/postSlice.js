import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isPostCreated: false,
  loadingPost: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setloadingPost: (state) => {
      state.loadingPost = true;
    },
    clearPostLoading: (state) => {
      state.loadingPost = false;
    },
    setPostCreated: (state) => {
      state.isPostCreated = true;
    },
    clearPostCreated: (state) => {
      state.isPostCreated = false;
    },
    addNewComment: (state, payload) => {},
  },
});

export const {
  setPosts,
  setloadingPost,
  clearPostLoading,
  setPostCreated,
  clearPostCreated,
} = postSlice.actions;
export const postsReducer = postSlice.reducer;
