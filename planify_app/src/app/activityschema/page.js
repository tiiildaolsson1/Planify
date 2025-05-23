// front-page för att visa listan
import React from 'react';
import '../../Style/Components.css';
import NavBar from '../../Components/navigationbar';
import Activitycard from '@/Components/ActivityCard'; 

export default function ActivitiyPage() {
    return (
      <div className="ActivitiyPage">
        <NavBar/>
        <main className="List">
          <h2 className='rubrik3'>Rekomenderade aktiviter</h2>
          <Activitycard />
        </main>
      </div>
    );
  }