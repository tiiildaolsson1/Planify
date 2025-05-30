"use client";
import React from "react";
import EventCard from "./EventCard";

export default function EventList({ events, location }) {
    return (
        <div className="events-section">
            <h1 className="rubrik3">Event nära {location}</h1>
            <ul>
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </ul>
        </div>
    );
}
