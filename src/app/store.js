import { configureStore } from "@reduxjs/toolkit";

// Agrega aquí tus reducers cuando los crees
export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // search: searchReducer,
    // categories: categoriesReducer,
  },
});
