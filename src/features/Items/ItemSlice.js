import { createSlice } from "@reduxjs/toolkit";

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
      //   console.log("disptached");
      state.idCount += 1;

      //   //   you need to get the parent id from the payload
      //   //   const { content, parentId } = action.payload;
      //   const content = action.payload;

      //   const newItem = {
      //     id: state.idCount,
      //     content: content,
      //     parentId: state.idCount,
      //   };
      //   return [...state.item.itemList, newItem];
    },
    incrementCounter: (state) => {
      state.idCount += 1;
    },
  },
});

export default itemSlice.reducer;

export const { incrementCounter, addItem } = itemSlice.actions;
