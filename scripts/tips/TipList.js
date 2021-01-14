import {useSalinityTips} from "./TipDataProvider.js"
// import { FishList } from "../fish/FishList.js";
import {Tip} from "./Tip.js"

let tipContainer = document.querySelector("#tip-list")

export function TipList(){
    const allTheSalinityTips = useSalinityTips();

    let tipListHTMLString = "";

    for (const currentTipInLoop of allTheSalinityTips){
        console.log(currentTipInLoop);
        tipListHTMLString = Tip(currentTipInLoop);
    }
    console.log(tipListHTMLString)
    tipContainer.innerHTML = `<h2> Fish Tips</h2>${tipListHTMLString}`
}