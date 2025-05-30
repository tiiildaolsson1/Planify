"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getEventsNearby, getNearbyPOIs } from "@/APIs/api";
import NavBar from "@/Components/navigationbar";
import EventList from "@/Components/EventList";
import POIList from "@/Components/POIList";
import "../../Style/Components.css";

export default function ActivityPage() {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const location = searchParams.get("location");

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

  return (
    <div className="homepage">
      <NavBar />
      <main className="List">
        <div className="recommendation-container">
          <EventList events={events} location={location} />
          <POIList pois={pois} getPOIIcon={getPOIIcon} />
        </div>
      </main>
    </div>
  );
}

