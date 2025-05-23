// front-page för att visa listan
import React from 'react';
import '../../Style/Components.css';
import NavBar from '../../Components/navigationbar';

export default function HomePage() {
  return (
    <div className="homepage">
      <NavBar/>
      <main className="List">
        <h2 className='rubrik3'>Sparade aktiviter</h2>
      </main>
    </div>
  );
}
 