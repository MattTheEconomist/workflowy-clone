import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
// import { Item } from "./features/Items/Item";
import { ItemList } from "./features/Items/ItemList";
import { InputField } from "./features/Items/InputField";
import "./App.css";

function App() {
  return (
    <div className="App">
      <InputField />
      <ItemList />
    </div>
  );
}

export default App;
