import {locationData} from "./LocationDataProvider.js"
import {locationCard} from "./Location.js"

let locationContainer = document.querySelector("#location-list");

export function LocationList(){
    const allTheLoc = locationData();

    let locationListHTMLString = "";
     for(let i = 0; i < allTheLoc.length; i++){
         locationListHTMLString += locationCard(allTheLoc[i]);
     }

     locationContainer.innerHTML = `<h2>Places I've been</h2>${locationListHTMLString}`;
}