"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getEventsNearby } from "@/APIs/ticketmaster";
import NavBar from "@/Components/navigationbar";
import EventList from "@/Components/EventList";
import POIList from "@/Components/POIList";
import "../../Style/Components.css";
import { getNearbyPOIs } from "@/APIs/api";


// Visar aktiviteter och platser nära användarens valda position. 
export default function ActivityPage() {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const location = searchParams.get("location");

  // State för att lagra hämtade event och POIs
  const [events, setEvents] = useState([]);
  const [pois, setPois] = useState([]);

  useEffect(() => {
    if (lat && lon) {
      getEventsNearby(lat, lon, "").then(setEvents);
      getNearbyPOIs(lat, lon).then((data) => setPois(data.slice(0, 7)));
    }
  }, [lat, lon]);

  const getPOIIcon = (poi) => {
    if (poi.tags.amenity === "restaurant") return "/Images/restaurant.png";
    if (poi.tags.amenity === "cafe") return "/Images/coffee-cup.png";
    if (poi.tags.amenity === "bar") return "/Images/bag.png";
    if (poi.tags.tourism === "attraction") return "/Images/destination.png";
    return "/Images/bag.png";
  };

  // Funktion för att spara ett objekt till localStorage. 
  const saveItemToLocalStorage = (item) => {
    if (typeof window === "undefined") return;

    const saved = JSON.parse(localStorage.getItem("savedActivities")) || [];
    const exists = saved.some((s) => s.id === item.id);
    if (!exists) {
      const updated = [...saved, item];
      localStorage.setItem("savedActivities", JSON.stringify(updated));
      alert(`Sparat: ${item.name}`);
    } else {
      alert(`${item.name} är redan sparad.`);
    }
  };

  return (
    <div className="homepage">
      <NavBar />
      <main className="List">
        <div className="recommendation-container">
          <EventList events={events} location={location} onSave={saveItemToLocalStorage}/>
          <POIList pois={pois} getPOIIcon={getPOIIcon} onSave={saveItemToLocalStorage}/>
        </div>
      </main>
    </div>
  );
}
