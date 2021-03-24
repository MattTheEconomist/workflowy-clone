import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { incrementCounter, addItem } from "./ItemSlice";

export function InputField() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleEnter = (e) => {
    const trimmedText = text.trim();
    // if (e.key === "Enter" && trimmedText) {
    if (e.which === 13 && trimmedText) {
      console.log("triggerd from component", trimmedText);
      //   dispatch(addItem(state, trimmedText));
      //   dispatch({ type: "addItem", payload: trimmedText });
      //   dispatch({ type: "incrementCounter" });

      //THIS WORKS!
      //   dispatch(incrementCounter());
      dispatch(addItem(trimmedText));
      setText("");
    }
  };

  return <input onChange={handleChange} onKeyDown={handleEnter} value={text} />;
}
