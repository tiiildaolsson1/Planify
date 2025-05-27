// här fetchar vi google places och ticketmaster

async function PlacesApi() {
    const response = await fetch("");
    const data = await response.json();

    return data.value;
}

export async function MasterApi(query) {
    const apiKey = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;
; console.log("API KEY:", apiKey); 
  
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${query}&locale=*`;
    const response = await fetch(url);
    const data = await response.json();
  
    return data._embedded?.events || [];
  }