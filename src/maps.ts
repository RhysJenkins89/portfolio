// import { Loader } from "@googlemaps/js-api-loader";

// const loader = new Loader({
//     apiKey: "AIzaSyBMrZzNh5ZmSi52ep2byYIzIyuTg8vQWUs",
//     version: "weekly",
// });

// loader.load().then(async () => {
//     const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
//     map = new Map(document.getElementById("map") as HTMLElement, {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// });

let map: google.maps.Map;
async function initMap(): Promise<void> {
    console.log("It's working maybe!");
    const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
    map = new Map(document.querySelector(".main-maps-container") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

export default initMap;
