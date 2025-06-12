// filepath: c:\Users\alvar\Desktop\Dev\reddit-app\src\app\store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
