//Here we geolocate the user
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        const lon = position.coords.longitude;
        document.getElementById('longitude').textContent = lon;

        //Here I create an object which then is send back to the server.
        const data = { lat, lon };

        createMap(lat,lon);

        //This is an object that holds information about the data and structures of the package
        //More on that: https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const backMsg = await response.json();
        console.log(backMsg);
    });
} else {
    console.log('geolocation not available');
} 

//Leaflet Map implementation
function createMap(lat, lon){
    const mymap = L.map('leafletMap').setView([lat, lon], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const tiles = L.tileLayer(tileURL, { attribution });
    tiles.addTo(mymap);
    const myMarker = L.marker([lat,lon]).addTo(mymap);
    myMarker.bindTooltip("You're here!").openTooltip();
}
