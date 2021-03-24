import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const selectItemById = (state, itemId) => {
  return state.item.itemList.find((item) => (item.id = itemId));
};

export default function Item({ id }) {
  const allItems = useSelector((state) => state.item.itemList);

  const currentItem = allItems.find((thing) => thing.id === id);
  const contentCurrentItem = currentItem.content;

  return (
    <div>
      <h3>{contentCurrentItem}</h3>
      {/* <input></input> */}
    </div>
  );
}
