"use client";

import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import '../../Style/Components.css';
import NavBar from '../../Components/navigationbar';

// Sidan där användaren kan se deras sparade events
export default function SavedPage() {
  const [savedItems, setSavedItems] = useState([]);
  const [filter, setFilter] = useState("all");

  // Hämtar sparade aktiviteter från localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedActivities")) || [];
    setSavedItems(saved);
  }, []);

  // Funktion för att ta bort en aktivitet
  const handleDelete = (id) => {
    const updated = savedItems.filter(item => item.id !== id);
    localStorage.setItem("savedActivities", JSON.stringify(updated));
    setSavedItems(updated);
  };

  // Filtrerar listan av sparade aktiviteter beroende på valt filter
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
        <h2 id="sparadeaktiviteter" className="rubrik3">Sparade aktiviteter</h2>

        {/* Filtermeny */}
        <div style={{ marginBottom: "20px" }}>
          <button className="filter-button" onClick={() => setFilter("all")}>Alla</button>
          <button className="filter-button" onClick={() => setFilter("event")}>Endast event</button>
          <button className="filter-button" onClick={() => setFilter("restaurant")}>Restauranger</button>
          <button className="filter-button" onClick={() => setFilter("cafe")}>Caféer</button>
        </div>

        <ul id="savedbox">
          {filteredItems.map((item) => (
            <li id="eventboxar" key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="event-content">
                <div>
                  <h3>{item.name}</h3>
                  {item.category && <p>{item.category}</p>}
                  {item.date && <p>{item.date}</p>}
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">Mer info</a>
                  )}
                </div>
              </div>

              <button onClick={() => handleDelete(item.id)} aria-label="Ta bort aktivitet">
                <FaTrash />
              </button>
            </li>
          ))}

          {filteredItems.length === 0 && <p id="ingaaktiviteter">Inga aktiviteter matchar filtret.</p>}
        </ul>
      </main>
    </div>
  );
}
