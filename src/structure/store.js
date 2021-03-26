import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import itemReducer from "../features/Items/ItemSlice";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    item: itemReducer,
  },
  // middlewares: [itemTreeUpdate],
  // middleware: mid,
  // middlewares: itemTreeUpdate,
  // middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M
});

export default store;
