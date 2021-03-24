import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Item } from "./features/Items/Item";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Item />
    </div>
  );
}

export default App;
