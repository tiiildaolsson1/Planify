"use client";
import React from "react";
import NavBar from "@/Components/navigationbar";
import SavedCalendar from "@/Components/SavedCalendar";

export default function CalendarPage() {
  return (
    <div className="homepage">
      <NavBar />
      <main className="List">
        <SavedCalendar />
      </main>
    </div>
  );
}
