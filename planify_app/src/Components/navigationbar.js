// vår navigationsbar som ska återanvändas
import React from 'react';

// denna kod hanterar layouten till vår navbar, lägg till här om man vill ändra något
export default function NavBar() {
  return (
    <nav className="navbar">
      <span id='Planify'> PLANIFY </span>
      <div id="navlinks">
        <a href="/" className="navbar-link">
          <img src="../images/home.svg" alt="Hem" width={30} height={30} />
          <p>Hem</p>
        </a>

        <a href="/saved" className="navbar-link">
          <img src="../images/heart.svg" alt="Sparade aktiviteter" width={30} height={30} />
          <p>Sparade</p>
        </a>

        <a href="/calendar" className="navbar-link">
          <img src="../images/calendar.svg" alt="Kalender" width={30} height={30} />
          <p>Kalender</p>
        </a>
      </div>
    </nav>
  );
}
