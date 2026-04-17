const API = "https://recipe-extractor-b8mz.onrender.com";

export const extractRecipe = async (url) => {
  const res = await fetch(`${API}/extract`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  return res.json();
};