"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getEventsNearby, getNearbyPOIs } from "@/APIs/api";
import NavBar from "@/Components/navigationbar";
import ActivityList from "@/Components/ActivityList";
import "../../Style/Components.css";

export default function ActivityPage() {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const location = searchParams.get("location");
  const time = searchParams.get("time");
  const age = searchParams.get("age");

  const [events, setEvents] = useState([]);
  const [pois, setPois] = useState([]);

  useEffect(() => {
    if (lat && lon) {
      // Hämta event från Ticketmaster
      getEventsNearby(lat, lon, "").then((data) => {
        setEvents(data);
      });

      // Hämta OSM-rekommendationer och begränsa till 7
      getNearbyPOIs(lat, lon).then((data) => {
        setPois(data.slice(0, 7));
      });
    }
  }, [lat, lon]);

  // Funktion för att välja ikon baserat på OSM-data
  const getPOIIcon = (poi) => {
    if (poi.tags.amenity === "restaurant") {
      return "/Images/restaurant.png";
    } else if (poi.tags.amenity === "cafe") {
      return "/Images/coffee-cup.png";
    } else if (poi.tags.amenity === "bar") {
      return "/Images/bag.png";
    } else if (poi.tags.tourism === "attraction") {
      return "/Images/destination.png";
    } else {
      return "/Images/bag.png"; // fallback-ikon
    }
  };

  return (
    <div className="homepage">
      <NavBar />

      <main className="List">
        <div className="recommendation-container">
          {/* Ticketmaster-event */}
          <div className="events-section">
            <h1 className="rubrik3">Event nära {location}</h1>
            <ul>
              {events.map((event) => (
                <li id="eventboxar" key={event.id}>
                  {event.images && event.images[0] && (
                    <img src={event.images[0].url} alt={event.name} />
                  )}
                  <div className="event-content">
                    <h3>{event.name}</h3>
                    <p>{event.dates.start.localDate}</p>
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      Mer info
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* OSM-rekommendationer */}
          <div className="pois-section">
            <h2 className="rubrik3">Rekommendationer i närheten</h2>
            <ul>
              {pois.map((poi) => (
                <li id="eventboxar" key={poi.id}>
                  <img
                    src={getPOIIcon(poi)}
                    alt="POI ikon"
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <div className="event-content">
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
                </li>
              ))}
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
}
