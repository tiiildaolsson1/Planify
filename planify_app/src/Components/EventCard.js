"use client";

import React from "react";
import { FaHeart } from "react-icons/fa";

export default function EventCard({ event, onSave }) {
  return (
    <li id="eventboxar">
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
            onSave({
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
  );
}
