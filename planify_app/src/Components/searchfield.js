// vår fina searchfield där de lägger in sina 

"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserLocation } from '../APIs/geolocation';


export default function SearchField() {
  // skapar react state för location, time och age 
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [age, setAge] = useState('');
  const router = useRouter();

  // för hindrar standard beteende och validation  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!location && !time && !age) {
      window.alert("Du måste fylla i minst ett fält!");
      return;
    }

    // Skickar användaren till rätt sida när de skickar forumälret
    const query = new URLSearchParams({ location, time, age }).toString();
    router.push(`/activitypage?${query}`);
  };

  // Geolocation för att hämta användarens plats 
  useEffect(() => {
    getUserLocation((loc) => setLocation(loc));
  }, []);
  
  // vanligt förumlär som blir vårt sökfält 
  return (
    <form onSubmit={handleSubmit} className="search-field">
      <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Malmö..." />

      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="">Välj tid...</option>
        <option value="8-14">8.00 - 14.00 </option>
        <option value="15-20">15.00 -20.00</option>
        <option value="20-02">20.00 02.00</option>
      </select>

      <select value={age} onChange={e => setAge(e.target.value)}>
        <option value="">Välj ålder...</option>
        <option value="5-10">0-10 år</option>
        <option value="10-15">10-15 år</option>
        <option value="15-17">15-17 år</option>
        <option value="15-17">18+ år</option>
        <option value="15-17">60+ år</option>
      </select>

      <button type="submit" className="searchbutton">
        <img src="../images/search.svg" alt="Sök" />
      </button>
    </form>
  );
}

