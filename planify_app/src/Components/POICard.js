import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// POICard-komponenten visar en plats av intresse (POI - Point of Interest)
export default function POICard({ poi, onSave, getPOIIcon }) {
    // State för att hålla reda på om platsen är sparad.
    const [isSaved, setIsSaved] = useState(false);

    // useEffect körs när komponenten mountas eller när platsens id ändras.
    // Kollar även om platsen redan finns sparad i localStorage.
    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = JSON.parse(localStorage.getItem("savedActivities")) || [];
            setIsSaved(saved.some((s) => s.id === poi.id));
        }
    }, [poi.id]);

    // Funktion för att spara platsen när användaren klickar på hjärtikonen.
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
            <img src={getPOIIcon(poi)} alt="POI ikon" style={{ width: "80px", marginRight: "20px" }} />
            <div className="event-content">
                <div>
                    <h3>{poi.tags.name || "Okänd plats"}</h3>
                    <p className="pletter">{poi.tags.amenity || poi.tags.tourism || "Sevärdhet"}</p>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${poi.lat},${poi.lon}`} target="_blank" rel="noopener noreferrer">Mer info</a>
                </div>
                <button onClick={handleSave} aria-label="Spara plats">
                    {isSaved ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
        </li>
    );
}
