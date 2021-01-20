/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
  {
    species: "Clown Fish",
    name: "Bonkers",
    food: "zooplankton or phytoplankton",
    Size: 3,
    Native: "Western Pacific",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcVmGFgab_t6csWsym1FcrwOLt6Q-6LRoFg&usqp=CAU"
  },
  {
    species: "Gold Fish",
    name: "Goldy",
    food: "Live Plants",
    Size: 5,
    Native: "Eastern and Central Asia",
  },

  {
    species: "Shark",
    name: "Chompers",
    food: "Fish and Invertebrates",
    Size: 60,
    Native: "In every kind of Ocean habitat",
  },

  {
    species: "Betta Fish",
    name: "Killer",
    food: "Insects and smaller fish",
    Size: 3,
    Native: "Asia",
  },

  {
    species: "Muskie",
    name: "Chomper",
    food: "fish",
    Size: 22,
    Native: "Northern United States and Canada",
  },

  {
    species: "Catfish",
    name: "Pickles",
    food: "Snails, insects, smaller fish",
    Size: 3,
    Native: "Rivers and Streams",
  },

  
]

// a function for fish of multiples of 3
export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];

  for (const fish of fishCollection) {
      if (fish.Size % 3 === 0){
        holyFish.push(fish);
      }
  }
  
  return holyFish
}

const angelFish = mostHolyFish();
console.log(angelFish)

export const soldierFish = () => {
  const soldiers = [];
  // only display multiples of 5
  for (const fish of fishCollection){
    if(fish.Size % 5 === 0){
      soldiers.push(fish)
    }
  }
  return soldiers
}

const roughFish = soldierFish();
console.log(roughFish);

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = [];

  // Only display non-multiples of 3 or 5
  for (const fish of fishCollection) {
    if (fish.Size % 3 !== 0 && fish.Size % 5 !== 0) {
        regularFish.push(fish);
    }
  }

  return regularFish

}

const unholyFish = nonHolyFish();
console.log(unholyFish);




//this is a function another way to write it:
//export function useFish(){}
//.slice makes a copy so we can edit it
export function useFish () {
  return fishCollection.slice()
}
