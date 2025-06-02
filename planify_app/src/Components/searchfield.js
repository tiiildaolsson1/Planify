
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Sökfält där användaren kan ange plats, tid och ålder.
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
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${(location)}`;
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
      <input value={location} onChange={e => setLocation(e.target.value)} placeholder="T.ex. Paris..."/>
      <button type="submit" className="searchbutton">
        <img src="../images/search.svg" alt="Sök" />
      </button>
    </form>
  );
}
