"use client";

import React, { useEffect, useState } from 'react';
import ActivityCard from '../../Components/ActivityCard';
import { MasterApi } from '../../APIs/api';
import NavBar from '../../Components/navigationbar';

export default function ActivityPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await MasterApi('musik'); 
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="homepage">
      <NavBar/>
      <h2 className='rubrik3'>Rekommenderade aktiviteter</h2>
      <ActivityCard events={events} />
    </div>
  );
}
