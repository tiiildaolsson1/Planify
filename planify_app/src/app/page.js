// vår homepage

// vår homepage
import React from 'react';
import SearchField from '../Components/searchfield';
import ActivityList from '../Components/ActivityList';

export default function HomePage() {
  return (
    <div className="homepage">
      <header className="searchbox">
        <h1>Uttråkad?<br />Låt oss hjälpa dig!</h1>
        <SearchField />
      </header>
      <main>
        <ActivityList />
      </main>
    </div>
  );
}
 