"use client";

import React from "react";
import { FaHeart } from "react-icons/fa";

export default function POICard({ poi, getPOIIcon, onSave }) {
    return (
        <li id="eventboxar">
            <img
                src={getPOIIcon(poi)}
                alt="POI ikon"
                style={{ width: "50px", marginRight: "10px" }}
            />
            <div
                className="event-content"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <div>
                    <h3>{poi.tags.name || "Okänd plats"}</h3>
                    <p>{poi.tags.amenity || poi.tags.tourism || "Sevärdhet"}</p>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${poi.lat},${poi.lon}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mer info
                    </a>
                </div>
                <button
                    onClick={() =>
                        onSave({
                            id: poi.id,
                            type: "poi",
                            name: poi.tags.name || "Okänd plats",
                            category: poi.tags.amenity || poi.tags.tourism || "Sevärdhet",
                            lat: poi.lat,
                            lon: poi.lon
                        })
                    }
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#e60073",
                        fontSize: "20px"
                    }}
                    aria-label="Spara plats"
                >
                    <FaHeart />
                </button>
            </div>
        </li>
    );
}
