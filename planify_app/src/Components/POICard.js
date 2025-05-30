"use client";
import React from "react";
import { saveFavorite } from "@/APIs/storage";

export default function POICard({ poi, getPOIIcon }) {
    const handleSave = () => {
        saveFavorite(poi);
        alert("Sparat i favoriter!");
    };

    return (
        <li id="eventboxar" key={poi.id}>
            <img
                src={getPOIIcon(poi)}
                alt="POI ikon"
                style={{ width: "80px", marginRight: "20px" }}
            />
            <div className="event-content">
                <h3>{poi.tags.name || "Okänd plats"}</h3>
                <p className="pletter">{poi.tags.amenity || poi.tags.tourism || "Sevärdhet"}</p>
                <a className="merinfoboxrec"href={`https://www.google.com/maps/search/?api=1&query=${poi.lat},${poi.lon}`} target="_blank" rel="noopener noreferrer">
                    Mer info
                </a>
            </div>
        </li>
    );
}
