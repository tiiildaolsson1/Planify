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
  
// Denna kod är korrekt, men behöver koppla geolocation till google maps api för att få plats istället för koordinater