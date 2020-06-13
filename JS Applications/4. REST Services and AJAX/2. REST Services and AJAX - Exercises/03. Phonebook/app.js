const phonebookUL = document.querySelector("#phonebook");
let phonebookIDs = {};

const loadBtn = document.querySelector("#btnLoad");
loadBtn.addEventListener("click", loadPhonebook);

const createBtn = document.querySelector("#btnCreate");
createBtn.addEventListener("click", createContact);

function loadPhonebook() {
   fetch("https://phonebook-nakov.firebaseio.com/phonebook.json")
      .then(verifyResponse)
      .then(res => res.json())
      .then(handleSuccess)
      .catch(handleError);
}

function verifyResponse(res) {
   if (!res.ok) {
      return Promise.reject("Invalid response!");
   }

   return res;
}

function handleError() {
   window.alert("Something went wrong :(");
}

function handleSuccess(data) {
   phonebookUL.innerHTML = "";

   Object.entries(data)
      .forEach(kvp => {
         const [id, { person, phone }] = kvp;

         const contact = `${person}: ${phone}`;
         phonebookIDs[contact] = id;

         const li = document.createElement("li");
         li.textContent = contact;

         const deleteBtn = document.createElement("button");
         deleteBtn.textContent = "Delete";
         deleteBtn.addEventListener("click", deleteContact.bind(undefined, contact));

         li.appendChild(deleteBtn);
         phonebookUL.appendChild(li);
      })
}

function deleteContact(contact) {
   const contactID = phonebookIDs[contact];
   
   const headers = {
      method: "DELETE"
   }

   fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${contactID}.json`, headers)
      .then(() => {
         delete phonebookIDs[contact];

         loadPhonebook();
      });
}

function createContact() {
   phonebookUL.innerHTML = "";

   const personInput = document.querySelector("#person");
   const phoneInput = document.querySelector("#phone");
   const person = personInput.value;
   const phone = phoneInput.value;

   const headers = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person, phone })
   }

   fetch("https://phonebook-nakov.firebaseio.com/phonebook.json", headers)
      .then(() => {
         personInput.value = "";
         phoneInput.value = "";

         loadPhonebook();
      })
      .catch(handleError);
}