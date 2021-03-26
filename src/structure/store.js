// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../features/counter/counterSlice";
import itemReducer from "../features/Items/ItemSlice";
import { itemTreeUpdate } from "./middleware";

// // works;

// const mid = applyMiddleware(itemTreeUpdate);

const store = configureStore({
  reducer: {
    item: itemReducer,
  },
  // middlewares: [itemTreeUpdate],
  // middleware: mid,
  // middlewares: itemTreeUpdate,
  // middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M
});

// export const store = createStore(itemReducer, applyMiddleware(mid));

// const store = createStore(
//   itemReducer
// ["Use Redux"]
// applyMiddleware(itemTreeUpdate)
// );

//simplified version
// const composedEnhancer = composeWithDevTools();
// Add whatever middleware you actually want to use here
// applyMiddleware(itemTreeUpdate)

// const store = createStore(itemReducer, composedEnhancer);

// does not work
// const middlwareEnhancer = applyMiddleware([itemTreeUpdate])

// store.applyMiddleware(itemTreeUpdate);

// export default function configureStore() {
//   const middlewares = [itemTreeUpdate];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = compose(...enhancers);

//   const store = createStore(itemReducer, composedEnhancers);

//   return store;
// }

export default store;

// export default function configureStore()
