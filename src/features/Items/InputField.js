import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "./ItemSlice";

export function InputField() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleEnter = (e) => {
    const trimmedText = text.trim();
    // if (e.which === 13 && trimmedText) {
    if (e.key === "Enter" && trimmedText) {
      console.log("triggerd from component", trimmedText);

      dispatch(addItem(trimmedText));
      setText("");
    }
  };

  return <input onChange={handleChange} onKeyDown={handleEnter} value={text} />;
}
