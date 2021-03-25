// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../features/counter/counterSlice";
import itemReducer from "../features/Items/ItemSlice";
import itemTreeUpdate from "./middleware";

// works;

const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});

// //simplified version
// const composedEnhancer = composeWithDevTools(
//   // Add whatever middleware you actually want to use here
//   applyMiddleware(itemTreeUpdate)
//   // other store enhancers if any
// );

// // const store = createStore(itemReducer, composedEnhancer);
// const store = createStore(itemReducer);
// export default store;

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
