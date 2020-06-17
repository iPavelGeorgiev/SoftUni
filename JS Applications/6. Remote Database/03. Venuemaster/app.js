const elements = {
   venueDataInput: document.querySelector('#venueDate'),
   listVenuesBtn: document.querySelector('#getVenues'),
   venueInfoDiv: document.querySelector('#venue-info')
};

const authInfo = `Basic ${btoa('guest:pass')}`;
const baseUrl = 'https://baas.kinvey.com';

const clearInput = () => {
   elements.venueDataInput.value = '';
};

const showHideInfo = function () {
   if (this.value === 'More info') {
       this.parentNode.nextElementSibling.style.display = 'block';
       this.value = 'Hide info';
   } else {
       this.parentNode.nextElementSibling.style.display = 'none';
       this.value = 'More info';
   }
};

const confirmPurchase = async function (id, qty) {
   const response = await fetch(`${baseUrl}/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${qty}`, {
       method: 'POST',
       headers: {
           'Authorization': authInfo,
           'Content-Type': 'application/json'
       }
   });
   const ticketInfo = await response.json();
   elements.venueInfoDiv.innerHTML = `You may print this page as your ticket. ${ticketInfo.html}`;
};

const purchaseTicket = function () {
   const mainDiv = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; //ugly...
   const quantityTd = this.parentNode.previousElementSibling;

   const name = mainDiv.querySelector('span.venue-name').textContent;
   const quantity = quantityTd.querySelector('select.quantity').value;
   const price = quantityTd.previousElementSibling.textContent.split(' ')[0];

   const confirmPurchaseSpan = document.createElement('span');
   confirmPurchaseSpan.classList.add('head');
   confirmPurchaseSpan.textContent = 'Confirm Purchase';
   confirmPurchaseSpan.innerHTML = `<div class="purchase-info">
   <span>${name}</span>
   <span>${quantity} x ${price}</span>
   <span>Total: ${(Number(quantity) * Number(price))} lv</span>
   <input type="button" value="Confirm">
   </div>`;

   confirmPurchaseSpan.querySelector('[type="button"]').addEventListener('click', () => confirmPurchase(mainDiv.id, quantity));

   elements.venueInfoDiv.innerHTML = '';
   elements.venueInfoDiv.appendChild(confirmPurchaseSpan);
};

const appendCurrentVenue = (currentVenue) => {
   const venueDiv = document.createElement('div');
   venueDiv.classList.add('venue');
   venueDiv.id = currentVenue._id;
   venueDiv.innerHTML = `<span class="venue-name">${currentVenue.name} <input class="info" type="button" value="More info"></span>
   <div class="venue-details" style="display: none;">
       <table>
           <tr>
               <th>Ticket Price</th>
               <th>Quantity</th>
               <th></th>
           </tr>
           <tr>
               <td class="venue-price">${currentVenue.price} lv</td>
               <td><select class="quantity">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                   </select></td>
               <td><input class="purchase" type="button" value="Purchase"></td>
           </tr>
       </table>
       <span class="head">Venue description:</span>
       <p class="description">${currentVenue.description}</p>
       <p class="description">Starting time: ${currentVenue.startingHour}</p>
   </div>`;

   venueDiv.querySelector('input.info').addEventListener('click', showHideInfo);
   venueDiv.querySelector('input.purchase').addEventListener('click', purchaseTicket);

   elements.venueInfoDiv.appendChild(venueDiv);
};

const displayCurrentVenue = async (venueId) => {
   const response = await fetch(`${baseUrl}/appdata/kid_BJ_Ke8hZg/venues/${venueId}`, {
       method: 'GET',
       headers: {
           'Authorization': authInfo,
           'Content-Type': 'application/json'
       }
   });
   const currentVenue = await response.json();
   appendCurrentVenue(currentVenue);
};

const displayAllVenues = (venueIds) => {
   elements.venueInfoDiv.innerHTML = '';
   venueIds.forEach(id => {
       displayCurrentVenue(id);
   });
};

const loadAllVenues = async () => {
   const date = elements.venueDataInput.value;
   elements.venueInfoDiv.innerHTML = 'Loading...';

   if (date) {
       try {
           const response = await fetch(`${baseUrl}/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`, {
               method: 'POST',
               headers: {
                   'Authorization': authInfo,
                   'Content-Type': 'application/json'
               }
           });
           const venueIds = await response.json();
           displayAllVenues(venueIds);
       } catch (err) {
           elements.venueInfoDiv.innerHTML = 'Invalid data input.';
       }
   }

   clearInput();
};

(function attachEvents() {
   elements.listVenuesBtn.addEventListener('click', loadAllVenues);
})();