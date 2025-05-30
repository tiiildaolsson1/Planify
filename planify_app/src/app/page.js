import React from 'react';
import SearchField from '../Components/searchfield';
import '../Style/Components.css';
import NavBar from '../Components/navigationbar';

export default function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <div className="my-div">
        <main className="searchbox">
          <div className="rubriker">
            <h1 className='rubrik1'>Upptäck något nytt</h1>
            <h2 className='rubrik2'>Hitta aktiviteter och upplevelser nära dig.</h2>
          </div>
          <SearchField />
        </main>
      </div>

      <div className="visit-countries">
        <h2 className="section-title">Hämta inspiration från följande länder</h2>
        <p className="section-desc">
          Upptäck några av de vackraste platserna runt om i världen!
        </p>

        <div className="countries-map-section">
          <div className="countries-container">
            <div className="country-item">
              <img src="/Images/sverige.jpg" alt="Sverige" />
              <div className="country-info">
                <h3>Sverige</h3>
                <p>Europa</p>
                <p>Utforska de vackra sjöarna, skogarna och städerna.</p>
                <div className="country-stats">
                  <span>👥 10,4M</span>
                  <span>🌍 450 295 KM²</span>
                  <span>💲 530 000 USD</span>
                </div>
              </div>
              <a href="#" className="explore-button">Utforska Mer</a>
            </div>

            <div className="country-item">
              <img src="/Images/kurdistan.jpg" alt="Kurdistan" />
              <div className="country-info">
                <h3>Kurdistan</h3>
                <p>Mellanöstern</p>
                <p>Upptäck de majestätiska bergen och den rika kulturen.</p>
                <div className="country-stats">
                  <span>👥 45M</span>
                  <span>🌍 190 000 KM²</span>
                  <span>💲 300 000 USD</span>
                </div>
              </div>
              <a href="#" className="explore-button">Utforska Mer</a>
            </div>

            <div className="country-item">
              <img src="/Images/lebanon.jpg" alt="Libanon" />
              <div className="country-info">
                <h3>Libanon</h3>
                <p>Mellanöstern</p>
                <p>Upplev Medelhavskusten och historiska platser.</p>
                <div className="country-stats">
                  <span>👥 5,7M</span>
                  <span>🌍 10 452 KM²</span>
                  <span>💲 150 000 USD</span>
                </div>
              </div>
              <a href="#" className="explore-button">Utforska Mer</a>
            </div>
          </div>

          {/* Kartsektion */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.337943423441!2d2.292292615674722!3d48.85884437928764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f0aaf6464b7%3A0x40b82c3688c9460!2sEiffeltornet!5e0!3m2!1ssv!2sse!4v1616009046631!5m2!1ssv!2sse"
              width="400"
              height="600"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div >
  );
}
