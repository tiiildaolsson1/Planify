
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchField() {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [age, setAge] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location && !time && !age) {
      window.alert("Du måste fylla i minst ett fält!");
      return;
    }

    try {
      // Hämta lat/lon från OSM
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
      const response = await fetch(url);
      const data = await response.json();
      if (!data.length) {
        alert("Hittade ingen plats.");
        return;
      }

      const { lat, lon } = data[0]; 

      // Skicka vidare med lat/lon i URL:en
      const query = new URLSearchParams({
        lat,
        lon,
        location,
        time,
        age
      }).toString();
      router.push(`/activitypage?${query}`);
    } catch (err) {
      console.error("Fel vid geokodning:", err);
      alert("Fel vid hämtning av plats");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-field">
      <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="T.ex. Paris..."
      />
      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="">Välj tid</option>
        <option value="8-14">8.00 - 14.00</option>
        <option value="15-20">15.00 - 20.00</option>
        <option value="20-02">20.00 - 02.00</option>
      </select>
      <select value={age} onChange={e => setAge(e.target.value)}>
        <option value="">Välj ålder</option>
        <option value="5-10">0-10 år</option>
        <option value="10-15">10-15 år</option>
        <option value="15-17">15-17 år</option>
        <option value="18+">18+ år</option>
        <option value="60+">60+ år</option>
      </select>
      <button type="submit" className="searchbutton">
        <img src="../images/search.svg" alt="Sök" />
      </button>
    </form>
  );
}
