// vår fina searchfield där de lägger in sina 

"use client";

import React, { useState } from 'react';

export default function SearchField() {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bara för att kolla så datan tas emot tills api är kopplat. 
    console.log(location, time, age);
  };

  return (
    <form onSubmit={handleSubmit} className="search-field">
      <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Malmö..." />
      <input value={time} onChange={e => setTime(e.target.value)} placeholder="16-22..." />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="20-35 år..." />
      <button type="submit">Sök</button>
    </form>
  );
}

