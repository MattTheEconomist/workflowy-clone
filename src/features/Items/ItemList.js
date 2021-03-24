import React, { useState } from "react";
import Item from "./Item";
import { useSelector, shallowEqual } from "react-redux";
// import itemReducer from "./ItemSlice";
// import store from "../../structure/store";

export function ItemList() {
  const allItems = useSelector((state) => state.item.itemList);

  //   console.log(allItems);

  const renderedListItems = allItems.map((currentItem) => {
    // return <Item key={`keyId${currentItem.id}`} content={currentItem.content} />;
    // console.log("from parent", currentItem.id);
    return <Item key={currentItem.id} id={currentItem.id} />;
  });

  return (
    <>
      <div>{renderedListItems}</div>
      <div>i'm a placeholder</div>
    </>
  );
}
