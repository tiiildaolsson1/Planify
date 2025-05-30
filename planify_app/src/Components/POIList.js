"use client";
import React from "react";
import POICard from "./POICard";

export default function POIList({ pois, getPOIIcon }) {
    return (
        <div className="pois-section">
            <h2 id="recfix" className="rubrik3">Rekommendationer i närheten</h2>
            <ul>
                {pois.map((poi) => (
                    <POICard key={poi.id} poi={poi} getPOIIcon={getPOIIcon} />
                ))}
            </ul>
        </div>
    );
}
