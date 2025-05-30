"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getEventsNearby, getNearbyPOIs } from "@/APIs/api";
import NavBar from "@/Components/navigationbar";
import { FaHeart } from "react-icons/fa";
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
    if (poi.tags.amenity === "restaurant") return "/Images/restaurant.png";
    if (poi.tags.amenity === "cafe") return "/Images/coffee-cup.png";
    if (poi.tags.amenity === "bar") return "/Images/bag.png";
    if (poi.tags.tourism === "attraction") return "/Images/destination.png";
    return "/Images/bag.png"; 
  };

  // Spara aktivitet till localStorage utan dubletter
  const saveItemToLocalStorage = (item) => {
    if (typeof window === 'undefined') return;

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
          {/* Ticketmaster-event */}
          <div className="events-section">
            <h1 className="rubrik3">Event nära {location}</h1>
            <ul>
              {events.map((event) => (
                <li id="eventboxar" key={event.id}>
                  {event.images?.[0]?.url && (
                    <img src={event.images[0].url} alt={event.name} />
                  )}
                  <div
                    className="event-content"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <h3>{event.name}</h3>
                      <p>{event.dates.start.localDate}</p>
                      <a href={event.url} target="_blank" rel="noopener noreferrer">
                        Mer info
                      </a>
                    </div>
                    <button
                      onClick={() =>
                        saveItemToLocalStorage({
                          id: event.id,
                          type: "event",
                          name: event.name,
                          date: event.dates.start.localDate,
                          url: event.url,
                          image: event.images?.[0]?.url || ""
                        })
                      }
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#e60073",
                        fontSize: "20px"
                      }}
                      aria-label="Spara event"
                    >
                      <FaHeart />
                    </button>
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
                        saveItemToLocalStorage({
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
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}