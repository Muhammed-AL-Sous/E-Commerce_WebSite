import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./features/Testing/TestingSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
