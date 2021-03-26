import { createSlice, current } from "@reduxjs/toolkit";

import store from "../../structure/store";

// const idMapping = store.getState().item.itemList.reduce((acc, el, i) => {
//   acc[el.id] = i;
//   return acc;
// }, {});

// function treeUpdate(list) {
//   let root;

//   const idMapping = list.reduce((acc, el, i) => {
//     acc[el.id] = i;
//     return acc;
//   }, {});

//   // return idMapping;
//   return [1, 2];

//   return list.forEach((el) => {
//     // Handle the root element
//     if (el.parentId === null) {
//       root = el;
//       return;
//     }

//     // Use our mapping to locate the parent element in our data array
//     const parentEl = list[idMapping[el.parentId]];
//     // Add our current el to its parent's `children` array
//     parentEl.children = [...(parentEl.children || []), el];
//   });
// }

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
    // tree: { id: 0, parentId: null, children: [{ id: 1, parentId: 0 }] },
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

      // const list = state.itemList;

      // state.tree = treeUpdate(state.itemList);
      // state.tree = { a: 1, b: 2 };
      // state.tree = state.itemList.map((current) => current.id);
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
