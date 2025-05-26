// args 'callback', Callback körs när vi fått användaren plats. 
export function getUserLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          callback(`${latitude},${longitude}`);
        }, 
        (err) => {
          console.warn("Geolocation error:", err.message);
        }
      );
    }
  }
  