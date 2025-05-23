// här fetchar vi google places och ticketmaster

async function PlacesApi() {
    const response = await fetch("");
    const data = await response.json();

    return data.value;
}

async function MasterApi() {
    const response = await fetch("");
    const data = await response.json();

    return data.value;
}  
