import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";
import RecipeCard from "./RecipeCard";

export default function HistoryTab() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(res => setRecipes(res.data));
  }, []);

  return (
    <div>
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r.data} />
      ))}
    </div>
  );
}