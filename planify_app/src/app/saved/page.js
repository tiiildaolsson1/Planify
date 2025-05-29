"use client";

import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa"; // 🧼 Importera trash-ikon
import '../../Style/Components.css';
import NavBar from '../../Components/navigationbar';

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedActivities")) || [];
    setSavedItems(saved);
  }, []);

  const handleDelete = (id) => {
    const updated = savedItems.filter(item => item.id !== id);
    localStorage.setItem("savedActivities", JSON.stringify(updated));
    setSavedItems(updated);
  };

  const filteredItems = savedItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "event") return item.type === "event";
    if (filter === "evening") {
      if (item.type === "event" && item.date) {
        return item.date.includes("T19") || item.date.includes("T20") || item.date.includes("T21");
      }
      return false;
    }
    if (filter === "restaurant") {
      return item.type === "poi" && item.category === "restaurant";
    }
    if (filter === "cafe") {
      return item.type === "poi" && item.category === "cafe";
    }
    return true;
  });

  return (
    <div className="homepage">
      <NavBar />
      <main className="List">
        <h2 className="rubrik3">Sparade aktiviteter</h2>

        {/* Filtermeny */}
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setFilter("all")}>Alla</button>
          <button onClick={() => setFilter("event")}>Endast event</button>
          <button onClick={() => setFilter("evening")}>Event på kväll</button>
          <button onClick={() => setFilter("restaurant")}>Restauranger</button>
          <button onClick={() => setFilter("cafe")}>Caféer</button>
        </div>

        <ul>
          {filteredItems.map((item) => (
            <li id="eventboxar" key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="event-content">
                <h3>{item.name}</h3>
                {item.date && <p>{item.date}</p>}
                {item.category && <p>{item.category}</p>}
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Mer info
                  </a>
                )}
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "#ff3333"
                }}
                aria-label="Ta bort aktivitet"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>

        {filteredItems.length === 0 && <p>Inga aktiviteter matchar filtret.</p>}
      </main>
    </div>
  );
}
