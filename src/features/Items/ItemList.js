import React, { useState } from "react";
import Item from "./Item";
import { useSelector, shallowEqual } from "react-redux";
// import itemReducer from "./ItemSlice";
// import store from "../../structure/store";

export function ItemList() {
  const allItems = useSelector((state) => state.item.itemList);

  const renderedListItems = allItems.map((currentItem) => {
    return (
      <li key={`li ${currentItem.id}`}>
        <Item key={currentItem.id} id={currentItem.id} />
      </li>
    );
  });

  return (
    <>
      <div key={`div items`}>{renderedListItems}</div>
    </>
  );
}
