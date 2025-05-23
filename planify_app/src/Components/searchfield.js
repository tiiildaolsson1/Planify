// vår fina searchfield där de lägger in sina 

import React from 'react';

export default function SearchField() {
  return (
    // Behövs uppdateras till ett form med onSubmit, gör i rätt bransch
    <div className="search-field">
      <input type="text" placeholder="Malmö....." />
      <input type="text" placeholder="16-22....." />
      <input type="text" placeholder="20 år - 35 år....." />
    </div>
    
  );
}
