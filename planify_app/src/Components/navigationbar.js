// vår navigationsbar som ska återanvändas
import React from 'react';

// denna kod hanterar layouten till vår navbar, lägg till här om man vill ändra något
export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-link">
        <img src="../images/home.svg" alt="Hem" width={30} height={30} />
        <p>Hem</p>
      </a>

      <a href="/saved" className="navbar-link">
        <img src="../images/heart.svg" alt="Sparade aktiviteter" width={30} height={30} />
        <p>Sparade</p>
      </a>
      <span id='Planify'> Planify </span>
    </nav>
  );
}
