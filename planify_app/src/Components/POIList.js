"use client";
import React from "react";
import POICard from "./POICard";

// Komponent som visar en lista med platser (pois) och använder POICard-komponenten
export default function POIList({ pois, getPOIIcon, onSave }) {
    return (
        <div className="pois-section">
            <h2  id="recdesign" className="rubrik3">Rekommendationer i närheten</h2>
            <ul>
                {pois.map((poi) => (
                    <POICard key={poi.id} poi={poi} getPOIIcon={getPOIIcon} onSave={onSave} />
                ))}
            </ul>
        </div>
    );
}
