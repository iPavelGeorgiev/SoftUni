function solution() {
   const selections = {
      listOfGifts: () => document.querySelector("body > div > section:nth-child(2) > ul"),
      sendGifts: () => document.querySelector("body > div > section:nth-child(3) > ul"),
      discardedGifts: () => document.querySelector("body > div > section:nth-child(4) > ul")
   }

   const giftNameInput = document.querySelector("body > div > section:nth-child(1) > div > input[type=text]")

   const addGiftBtn = document.querySelector("body > div > section:nth-child(1) > div > button")

   addGiftBtn.addEventListener("click", createGift)

   function createGift() {
      const giftName = giftNameInput.value;

      const li = document.createElement("li");
      li.textContent = giftName;
      li.className = "gift";

      const sendBtn = document.createElement("button");
      sendBtn.textContent = "Send";
      sendBtn.id = "sendButton"
      sendBtn.addEventListener("click", sendGift);

      const discardBtn = document.createElement("button");
      discardBtn.textContent = "Discard";
      discardBtn.id = "discardButton";
      discardBtn.addEventListener("click", discardGift);

      [sendBtn, discardBtn].forEach(x => li.appendChild(x));
      selections.listOfGifts().appendChild(li);

      sortGifts();
      giftNameInput.value = "";
   }

   function sendGift(e) {
      let target = e.target.parentElement;

      target.removeChild(target.lastChild);
      target.removeChild(target.lastChild);

      selections.sendGifts().appendChild(target);
   }

   function discardGift(e) {
      let target = e.target.parentElement;

      target.removeChild(target.lastChild);
      target.removeChild(target.lastChild);

      selections.discardedGifts().appendChild(target);
   }

   function sortGifts() {
      let ul = selections.listOfGifts();

      Array.from(ul.getElementsByTagName("LI"))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => ul.appendChild(li));
   }
}