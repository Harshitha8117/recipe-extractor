import React from "react";

export default function Modal({ isOpen, onClose, recipe }) {
  if (!isOpen || !recipe) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        
        <button onClick={onClose} style={closeBtn}>
          ✖
        </button>

        <h2>{recipe.title}</h2>

        <p><b>Prep:</b> {recipe.prep_time}</p>
        <p><b>Cook:</b> {recipe.cook_time}</p>
        <p><b>Total:</b> {recipe.total_time}</p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((i, idx) => (
            <li key={idx}>
              {i.quantity} {i.unit} {i.item}
            </li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>

      </div>
    </div>
  );
}

/* 🎨 styles */

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "500px",
  maxHeight: "80vh",
  overflowY: "auto",
  position: "relative"
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  background: "transparent",
  fontSize: "18px",
  cursor: "pointer"
};