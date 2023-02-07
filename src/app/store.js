import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import movieReducer from "../reducers/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
