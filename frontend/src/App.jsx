import React from "react";
import Home from "./pages/Home";

export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#f5f5f5",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h1 style={{ textAlign: "center" }}>
        🍳 Recipe Extractor
      </h1>

      <Home />
    </div>
  );
}