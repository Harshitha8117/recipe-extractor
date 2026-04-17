import React from "react";   // ADD THIS
import { useState } from "react";
import { extractRecipe } from "../services/api";
import RecipeCard from "./RecipeCard";

export default function ExtractTab() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleExtract = async () => {
    setLoading(true);
    const res = await extractRecipe(url);
    setData(res.data.data || res.data);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}>
        <input
          placeholder="Paste recipe URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleExtract}
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          {loading ? "Extracting..." : "Extract"}
        </button>
      </div>

      {data && <RecipeCard recipe={data} />}
    </div>
  );
}