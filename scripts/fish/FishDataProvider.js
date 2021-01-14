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
    Size: "4.3 inches",
    Native: "Western Pacific",
  },
  {
    species: "Gold Fish",
    name: "Goldy",
    food: "Live Plants",
    Size: "1-14 inches",
    Native: "Eastern and Central Asia",
  },

  {
    species: "Shark",
    name: "Chompers",
    food: "Fish and Invertebrates",
    Size: "Up to 60 Feet",
    Native: "In every kind of Ocean habitat",
  },

  {
    species: "Betta Fish",
    name: "Killer",
    food: "Insects and smaller fish",
    Size: "2.25 inches",
    Native: "Asia",
  },

  {
    species: "Muskie",
    name: "Chomper",
    food: "fish",
    Size: "30 inches-70inches",
    Native: "Northern United States and Canada",
  },

  {
    species: "Catfish",
    name: "Pickles",
    food: "Snails, insects, smaller fish",
    Size: "3.9 - 8.2 feet",
    Native: "Rivers and Streams",
  },

  
]
//this is a function another way to write it:
//export function useFish(){}
//.slice makes a copy so we can edit it
export function useFish () {
  return fishCollection.slice()
}
