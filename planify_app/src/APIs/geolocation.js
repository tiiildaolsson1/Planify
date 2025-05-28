  
export async function getUserLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Koordinater:", latitude, longitude);

        try {
          const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
          const response = await fetch(url);
          const data = await response.json();

          // Få platsnamnet
          const placeName = data.display_name || `${latitude},${longitude}`;
          callback(placeName);
        } catch (err) {
          console.warn("Fel vid hämtning av platsnamn:", err);
          callback(`${latitude},${longitude}`);
        }
      },
      (err) => {
        console.warn("Geolocation error:", err.message);
      }
    );
  }
}