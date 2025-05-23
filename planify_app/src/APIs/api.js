// här fetchar vi google places och ticketmaster

async function PlacesApi() {
    const response = await fetch("");
    const data = await response.json();

    document.getElementById("").textContent = data.value;
}

async function MasterApi() {
    const response = await fetch("");
    const data = await response.json();

    document.getElementById("").textContent = data.value;
}  

