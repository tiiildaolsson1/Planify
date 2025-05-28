"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getEventsNearby } from "@/APIs/ticketmaster";
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

  useEffect(() => {
    if (lat && lon) {
      getEventsNearby(lat, lon, "").then((data) => {
        setEvents(data);
      });
    }
  }, [lat, lon]);

  return (
    <div className="homepage">
      <NavBar />

      <main className="List">
        <h1 className="rubrik3">Event nära {location}</h1>

        <ul>
          {events.map((event) => (
            <li id="eventboxar" key={event.id}>
              {event.images && event.images[0] && (
                <img
                  src={event.images[0].url}
                  alt={event.name}
                />
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


      </main>
    </div>
  );
}
