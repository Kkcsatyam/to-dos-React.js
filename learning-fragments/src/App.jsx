import React, { useState } from "react";
import "./App.css";
import FoodItem from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Cointainer from "./components/Cointainer";
import FoodInput from "./components/FoodInput";


function App() {
  let [foodItem, setfoodItem] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newItem = event.target.value.trim();
      if (newItem) {
        event.target.value = '';
        setfoodItem((prevItems) => [...prevItems, newItem]);
      }
    }
  };

  return (
    <>
      <Cointainer>
        <h1 className="foodHeading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItem}></ErrorMsg>
        <FoodItem items={foodItem} setItems={setfoodItem}></FoodItem>
      </Cointainer>
    </>
  );
}
export default App;
