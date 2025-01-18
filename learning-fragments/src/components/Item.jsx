import { useState } from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem, active, handleBuyButton, handleRemove, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(foodItem);

  const handleEditSubmit = () => {
    handleEdit(editValue);
    setIsEditing(false);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item ${active && "active"}`}>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
          className={`${styles["edit-input"]}`}
        />
      ) : (
        <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      )}

      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>

      <button
        className={`${styles.button} btn btn-warning`}
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>

      <button
        className={`${styles.button} btn btn-danger`}
        onClick={handleRemove}
      >
        Remove
      </button>
    </li>
  );
};

export default Item;
