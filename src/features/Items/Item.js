import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addItem } from "./ItemSlice";

const selectItemById = (state, itemId) => {
  return state.item.itemList.find((item) => (item.id = itemId));
};

export default function Item({ id }) {
  const allItems = useSelector((state) => state.item.itemList);
  const currentItem = allItems.find((thing) => thing.id === id);
  const contentCurrentItem = currentItem.content;
  const currentId = currentItem.id;

  const [text, setText] = useState(contentCurrentItem);

  const handleChange = (e) => setText(e.target.value);

  const dispatch = useDispatch();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      // console.log(currentId);
      dispatch(addItem({ content: "", parentId: currentId }));
    }
  };

  return (
    <input
      onKeyDown={handleEnter}
      onChange={handleChange}
      value={contentCurrentItem}
    ></input>
  );
}
