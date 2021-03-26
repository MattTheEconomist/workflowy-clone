import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addItem, changeText } from "./ItemSlice";

const selectItemById = (state, itemId) => {
  return state.item.itemList.find((item) => (item.id = itemId));
};

export default function Item({ id }) {
  const allItems = useSelector((state) => state.item.itemList);
  const currentItem = allItems.find((thing) => thing.id === id);
  const contentCurrentItem = currentItem.content;
  const currentId = currentItem.id;

  const handleChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeText({ content: e.target.value, currentId: currentId }));
  };

  const dispatch = useDispatch();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(addItem({ content: "", parentId: currentId }));
    }
  };

  return (
    <input
      className="item"
      onKeyDown={handleEnter}
      onChange={handleChange}
      value={contentCurrentItem}
    ></input>
  );
}
