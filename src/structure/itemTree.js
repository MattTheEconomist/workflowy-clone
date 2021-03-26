// import store from "./store";

// let tree;

// function treeUpdate(list) {
//   const idMapping = list.reduce((acc, el, i) => {
//     acc[el.id] = i;
//     return acc;
//   }, {});

//   let root;

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

// const list = store.getState().item.itemList;
// let tree;

// const unsubscribe = store.subscribe(
//   () => (tree = treeUpdate(list)),
//   console.log(tree)
// );

// unsubscribe();
