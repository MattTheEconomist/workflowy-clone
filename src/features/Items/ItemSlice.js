import { createSlice, current } from "@reduxjs/toolkit";

// import store from "../../structure/store";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    idCount: 2,
    itemList: [
      {
        id: 0,
        content: "i am the root item",
        parentId: null,
      },
      {
        id: 1,
        content: "i am a child of the root item",
        parentId: 0,
      },
    ],
  },

  reducers: {
    addItem: (state, action) => {
      const { content, parentId } = action.payload;
      const newItem = {
        id: state.idCount,
        content: content,
        parentId: parentId,
      };
      state.itemList = [...state.itemList, newItem];
      state.idCount += 1;
    },
    changeText: (state, action) => {
      const { content, currentId } = action.payload;
      state.itemList.find(
        (current) => current.id === currentId
      ).content = content;
    },
  },
});

export default itemSlice.reducer;

export const { addItem, changeText } = itemSlice.actions;
