import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const extractRecipe = (url) =>
  API.post("/extract", { url });

export const getRecipes = () =>
  API.get("/recipes");