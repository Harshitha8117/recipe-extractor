const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const getRecipes = async () => {
  const res = await fetch(`${API}/recipes`);
  return res.json();
};

export const extractRecipe = async (url) => {
  const res = await fetch(`${API}/extract`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

  return res.json();
};