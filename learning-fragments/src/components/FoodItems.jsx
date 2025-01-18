import { useState } from "react";
import Item from "./Item";

const FoodItem = ({ items, setItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item) => {
    let newActive = [...activeItems, item];
    setActiveItems(newActive);
  };

  const onRemove = (item) => {
    setItems((prevItems) => prevItems.filter((food) => food !== item));
  };

  const onEdit = (item, newValue) => {
    setItems((prevItems) =>
      prevItems.map((food) => (food === item ? newValue : food))
    );
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          active={activeItems.includes(item)}
          handleBuyButton={() => onBuyButton(item)}
          handleRemove={() => onRemove(item)}
          handleEdit={(newValue) => onEdit(item, newValue)}
        />
      ))}
    </ul>
  );
};

export default FoodItem;
