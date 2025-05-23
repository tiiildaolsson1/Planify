// vår homepage
import React from 'react';
import SearchField from '../Components/searchfield';
import '../Style/Components.css';
import NavBar from '../Components/navigationbar';

export default function HomePage() {
  return (
    <div className="homepage">
      <NavBar/>
      <main className="searchbox">
        <h1 className='rubrik1'>Uttråkad?</h1>
        <h2 className='rubrik2'>Låt oss hjälpa dig!</h2>
        <SearchField />
      </main>
    </div>
  );
}
 