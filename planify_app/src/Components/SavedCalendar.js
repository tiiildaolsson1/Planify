"use client";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function SavedCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("savedActivities")) || [];
    const formattedEvents = savedItems
      .filter(item => item.type === "event" && item.date)
      .map(item => ({
        title: item.name,
        date: item.date,
      }));
    setEvents(formattedEvents);
  }, []);

  return (
    <div style={{ margin: "30px" }}>
      <h2 className="rubrik3">Kalender med sparade event</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} height="auto"/>
    </div>
  );
}
