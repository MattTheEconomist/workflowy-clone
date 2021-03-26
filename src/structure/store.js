import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import itemReducer from "../features/Items/ItemSlice";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    item: itemReducer,
  },
});

export default store;
