"use client";
import React from "react";
import { saveFavorite } from "@/APIs/storage";

export default function EventCard({ event }) {
    const handleSave = () => {
        saveFavorite(event);
        alert("Sparat i favoriter!");
    };

    return (
        <li id="eventboxar" key={event.id}>
            {event.images && event.images[0] && (
                <img src={event.images[0].url} alt={event.name} />
            )}
            <div className="event-content">
                <h3>{event.name}</h3>
                <p>{event.dates.start.localDate}</p>
                <a className="merinfoboxrec" href={event.url} target="_blank" rel="noopener noreferrer">
                    Mer info
                </a>
            </div>
        </li>
    );
}
