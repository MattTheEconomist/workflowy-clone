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

  //do i need local state here? probs not
  // const [text, setText] = useState(contentCurrentItem);

  // const handleChange = (e) => setText(e.target.value);

  const handleChange = (e) => {
    // console.log(currentId);
    console.log(e.target.value);
    // setText(e.target.value);
    dispatch(changeText({ content: e.target.value, currentId: currentId }));
  };

  const dispatch = useDispatch();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      // console.log(currentId);
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
