import {useFish} from "./FishDataProvider.js";
import {Fish} from "./Fish.js";

// console.log("this is fish collection", fishCollection)
let fishContainer = document.querySelector("#fish-List");

export function FishList (){
    const allTheFish = useFish();
    
    let fishListHTMLString = "";

    for(let i = 0; i < allTheFish.length; i++){
        fishListHTMLString += Fish(allTheFish[i]);
      }
    
      // console.log(fishListHTMLString);
    
      fishContainer.innerHTML = `<h2>My Fish</h2>${fishListHTMLString}`;
    }
    


