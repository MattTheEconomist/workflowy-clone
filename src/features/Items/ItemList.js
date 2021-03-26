import React, { useState } from "react";
import Item from "./Item";
import { useSelector, shallowEqual } from "react-redux";
<<<<<<< HEAD
// import itemReducer from "./ItemSlice";
=======
import itemReducer from "./ItemSlice";
>>>>>>> 1531da16265b447e2563bf757295a00b13e76dd9

export function ItemList() {
  // const allItems = useSelector((state) => state.item.itemList);
  const allItems = useSelector((state) => state.item.itemList);
  // const allItems = useSelector((state) => state);
  // const count = useSelector((state) => state.count);

  // console.log("itemReducer", itemReducer);
  // console.log("other  ", counterReducer);

  // const renderedListItems = allItems.map((currentItem) => {
  //   return (
  //     <li key={`li ${currentItem.id}`}>
  //       <Item key={currentItem.id} id={currentItem.id} />
  //     </li>
  //   );
  // });

  return (
    <>
<<<<<<< HEAD
      {/* <div>{JSON.stringify(allItems)}</div> */}
      <div key={`div items`}>{renderedListItems}</div>
      {/* <div key={`div items`}>{renderedListItems}</div> */}
      {/* <div>{JSON.stringify(allItems)}</div> */}
=======
      {/* <div key={`div items`}>{renderedListItems}</div> */}
      {/* <div key={`div items`}>{renderedListItems}</div> */}
      <div>{JSON.stringify(allItems)}</div>
>>>>>>> 1531da16265b447e2563bf757295a00b13e76dd9
    </>
  );
}
