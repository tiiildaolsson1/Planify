// sidan för att visa korten med aktiviter
import React from 'react';
import '../../Style/Components.css';
import NavBar from '../../Components/navigationbar';
import ActivityCard from '../../Components/ActivityCard';

export default function activityPage() {
  return (
    <div className="homepage">
      <NavBar/>
      <main className="List">
        <h2 className='rubrik3'>rekomenderade aktiviter</h2>
        <ActivityCard/>
      </main>
    </div>
  );
}
 