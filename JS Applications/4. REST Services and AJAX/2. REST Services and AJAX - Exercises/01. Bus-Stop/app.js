const stopIdInput = document.querySelector("#stopId");
const stopNameDiv = document.querySelector("#stopName");
const busesContainer = document.querySelector("#buses");

const checkBtn = document.querySelector("#submit");
checkBtn.addEventListener("click", checkBusSchedules);

function checkBusSchedules() {
   const stopId = stopIdInput.value;
   const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

   fetch(url)
      .then(res => res.json())
      .then(handleSuccess)
      .catch(handleError)
}

function handleSuccess(data) {
   busesContainer.innerHTML = "";

   const stopName = data.name;
   stopNameDiv.textContent = stopName;

   let buses = Object.entries(data.buses)
      .reduce((accu, curr) => {
         const [busId, time] = curr;
         const bus = `<li>Bus ${busId} arrives in ${time} minutes</li>`;
         accu.push(bus);

         return accu;
      }, [])

   busesContainer.innerHTML += buses;
}

function handleError() {
   stopNameDiv.textContent = "Error...";
   window.alert("Something went wrong :(");
}