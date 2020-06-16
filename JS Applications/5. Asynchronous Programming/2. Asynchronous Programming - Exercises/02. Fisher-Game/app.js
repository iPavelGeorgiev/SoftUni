import Fetch from '../fetchData.js';
import { showAllCatches } from './view.js';

export const rootUrl = "https://fisher-game.firebaseio.com/";
export const selectors = {
   catch: {
      angler: () => document.querySelector("#catch-angler"),
      weight: () => document.querySelector("#catch-weight"),
      species: () => document.querySelector("#catch-species"),
      location: () => document.querySelector("#catch-location"),
      bait: () => document.querySelector("#catch-bait"),
      captureTime: () => document.querySelector("#catch-captureTime")
   },
   addBtn: () => document.querySelector("#addForm > button"),
   loadBtn: () => document.querySelector("body > aside > button"),
   catches: () => document.querySelector("#catches"),
   exampleCatch: () => document.querySelector('div.catch')
}
export const exampleCatch = selectors.exampleCatch().cloneNode(true);

selectors.addBtn().addEventListener("click", addCatch);
selectors.loadBtn().addEventListener("click", loadCatches)

function addCatch() {
   const angler = selectors.catch.angler().value
   const weight = selectors.catch.weight().value;
   const species = selectors.catch.species().value;
   const location = selectors.catch.location().value;
   const bait = selectors.catch.bait().value;
   const captureTime = selectors.catch.captureTime().value;
   const url = rootUrl + "catches.json";

   if (!angler || !weight || !species || !location || !bait || !captureTime) {
      alert('Please fill all text boxes located in the "Add Catch" container!');
      throw new Error("Missing input data!");
   }

   Fetch.create(url, { angler, weight, species, location, bait, captureTime })
      .catch(err => console.error(err));
   
   Object.values(selectors.catch)
      .forEach(input => input().value = "");
}

export function loadCatches() {
   const url = rootUrl + "catches.json";
   Fetch.get(url)
      .then(showAllCatches)
      .catch(err => console.error(err));
}