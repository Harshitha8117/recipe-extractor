import React from "react";
import { useState } from "react";
import ExtractTab from "../components/ExtractTab";
import HistoryTab from "../components/HistoryTab";

export default function Home() {
  const [tab, setTab] = useState("extract");

  return (
    <div style={{ padding: 20 }}>
      <h1>🍳 Recipe Extractor</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setTab("extract")}>Extract</button>
        <button onClick={() => setTab("history")}>History</button>
      </div>

      {tab === "extract" && <ExtractTab />}
      {tab === "history" && <HistoryTab />}
    </div>
  );
}