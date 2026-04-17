import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 15,
      marginTop: 20,
      borderRadius: 10
    }}>
      <h2>{recipe.title}</h2>

      <p><b>Prep:</b> {recipe.prep_time}</p>
      <p><b>Cook:</b> {recipe.cook_time}</p>

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
  );
}