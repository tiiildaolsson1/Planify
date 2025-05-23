// vår navigationsbar som ska återanvändas
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function NavBar() {
  return (
    <nav>
      <Link href="/" className='navbar-link'>
        <Image src="../images/home.svg" alt="Hem" width={30} height={30} />
        <p>Hem</p>
      </Link>
      
      <Link href="/saved" className='navbar-link'>
        <Image src="../images/heart.svg" alt="Sparade aktiviteter" width={30} height={30} />
        <p>Sparade</p>
      </Link>
    </nav>
  );
}
