// vår fina searchfield där de lägger in sina 

import React from 'react';

export default function SearchField() {
  return (
    
    <div className="search-field">
      <input type="text" placeholder="malmö....." />
      <input type="text" placeholder="16-22....." />
      <input type="text" placeholder="20 år - 35 år....." />
      <button>Sök</button>
    </div>
  );
}
