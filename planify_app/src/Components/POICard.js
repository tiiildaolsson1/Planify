import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 

export default function POICard({ poi, onSave, getPOIIcon }) {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = JSON.parse(localStorage.getItem("savedActivities")) || [];
            setIsSaved(saved.some((s) => s.id === poi.id));
        }
    }, [poi.id]);

    const handleSave = () => {
        onSave({
            id: poi.id,
            type: "poi",
            name: poi.tags.name || "Okänd plats",
            category: poi.tags.amenity || poi.tags.tourism || "Sevärdhet",
            lat: poi.lat,
            lon: poi.lon
        });
        setIsSaved(true); 
    };

    return (
        <li id="eventboxar">
            <img
                src={getPOIIcon(poi)}
                alt="POI ikon"
                style={{ width: "80px", marginRight: "20px" }}
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
                    <p className="pletter">{poi.tags.amenity || poi.tags.tourism || "Sevärdhet"}</p>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${poi.lat},${poi.lon}`} target="_blank" rel="noopener noreferrer">Mer info</a>
                </div>
                <button
                    onClick={handleSave}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#e60073",
                        fontSize: "20px"
                    }}
                    aria-label="Spara plats"
                >
                    {isSaved ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
        </li>
    );
}
