const sendBtn = document.querySelector("#submit");
sendBtn.addEventListener("click", sendMessage)

const refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener("click", displayMessages)

function sendMessage() {
   const authorInput = document.querySelector("#author");
   const messageInput = document.querySelector("#content");

   const author = authorInput.value;
   const message = messageInput.value;

   const headers = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, message })
   }

   fetch("https://rest-messanger.firebaseio.com/messanger.json", headers)
      .then(() => {
         authorInput.value = "";
         messageInput.value = "";
      })
      .catch(handleError)
}

function displayMessages() {
   const textArea = document.querySelector("#messages");

   fetch("https://rest-messanger.firebaseio.com/messanger.json")
      .then(res => res.json())
      .then(data => {
         const messageLog =
            Object.values(data)
               .reduce((accu, curr) => {
                  const { author, message } = curr;
                  accu.push(`${author}: ${message}`);

                  return accu;
               }, [])
               .join("\n");

         textArea.value = messageLog;
      })
      .catch(handleError)
}

function handleError() {
   textArea.value = "Error...";
   window.alert("Something went wrong :(");
}