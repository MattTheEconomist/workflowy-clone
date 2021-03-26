export const itemTreeUpdate = (storeAPI) => (next) => (action) => {
  //   if (action.type === "addItem") {
  // Call the next dispatch method in the middleware chain.
  // const returnValue = next(action);

  // console.log("state after dispatch", getState());
  console.log("hi");

  // // This will likely be the action itself, unless
  // // a middleware further in chain changed it.
  // return returnValue;
  return next(action);
  //   }
};

// function itemTreeUpdate(storeAPI) {
//   return (next) => (action) => {
//     console.log("will dispatch", action);

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action);

//     // console.log('state after dispatch', getState())

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue;
//   };
// }

// export default itemTreeUpdate;
