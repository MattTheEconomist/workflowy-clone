import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import itemReducer from "../features/Items/ItemSlice";

export default configureStore({
  reducer: {
    // counter: counterReducer,
    item: itemReducer,
  },
});
