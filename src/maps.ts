let map: google.maps.Map;
const mapElement = document.querySelector(".main-maps-container") as HTMLElement;

async function initMap(): Promise<void> {
    const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
    map = new Map(mapElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
    getMapData();
}

async function getMapData(): Promise<void> {
    const response = await fetch("./data/locations.json"); // Type the response
    const mapData = await response.json();
    plotLocations(mapData);
}

interface locationData {
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

function plotLocations(mapData: any): void {
    // this argument needs typing u r geh
    console.log(mapData);
    // for (const location in mapData) {
    //     console.log(location[coordinates]);
    // }
}

export default initMap;

// Remove the text from the map, leaving only the country borders. The user is given a country, and he must guess where the country is on the map. After the user guesses, the country is then revealed.