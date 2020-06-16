import Fetch from '../fetchData.js';
import { selectors, rootUrl, loadCatches, exampleCatch } from './app.js';

export function showAllCatches(allCatches) {
   selectors.catches().innerHTML = "";

   Object.keys(allCatches).forEach(id => {
      const copy = exampleCatch.cloneNode(true);
      copy.setAttribute('data-id', id);

      Object.keys(selectors.catch)
         .forEach(key => {
            copy.querySelector(`input.${key}`).value = allCatches[id][key];
         });

      selectors.catches().appendChild(copy);
   });

   [...document.querySelectorAll('button.update')].forEach(b => b.addEventListener('click', updateCatch));
   [...document.querySelectorAll('button.delete')].forEach(b => b.addEventListener('click', removeCatch));
}

function updateCatch(e) {
   const id = e.currentTarget.parentElement.getAttribute('data-id');
   const url = rootUrl + `catches/${id}.json`;
   const elements = [...e.target.parentElement.querySelectorAll("input")];

   const params = {
      angler: elements[0].value,
      weight: elements[1].value,
      species: elements[2].value,
      location: elements[3].value,
      bait: elements[4].value,
      captureTime: elements[5].value
   }

   Fetch.update(url, params)
      .then(loadCatches)
      .catch(err => console.error(err));
}

function removeCatch(e) {
   const id = e.currentTarget.parentElement.getAttribute('data-id');
   const url = rootUrl + `catches/${id}.json`;

   Fetch.remove(url)
      .then(loadCatches)
      .catch(err => console.error(err));
}