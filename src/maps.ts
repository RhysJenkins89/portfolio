let map: google.maps.Map;
const mapElement = document.querySelector(".main-maps-container") as HTMLElement;

async function initMap(): Promise<void> {
    const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
    map = new Map(mapElement, {
        center: { lat: 48.5734, lng: 7.75 },
        zoom: 6,
    });
    getMapData();
}

interface LocationData {
    [index: string]: Location;
}

interface Location {
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

async function getMapData(): Promise<void> {
    const response: Response = await fetch("./data/locations.json");
    const mapData: LocationData = await response.json();
    plotLocations(mapData);
}

function plotLocations(mapData: LocationData): void {
    for (const location in mapData) {
        new google.maps.Marker({
            position: { lat: mapData[location].coordinates.latitude, lng: mapData[location].coordinates.longitude },
            map,
            title: location.charAt(0).toUpperCase() + location.slice(1),
        });
    }
}

// function zoomToPlottedBounds(): void {
//     map.panToBounds( , 10)

// }

export default initMap;

// Remove the text from the map, leaving only the country borders. The user is given a country, and he must guess where the country is on the map. After the user guesses, the country is then revealed.
