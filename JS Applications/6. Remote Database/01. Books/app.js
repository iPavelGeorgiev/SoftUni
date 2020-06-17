import Fetch from "../requester.js"

const selectors = {
   booksContainer: () => document.querySelector("#books-container"),
   editForm: () => document.querySelector("#edit-form"),
   title: () => document.querySelector("#title"),
   author: () => document.querySelector("#author"),
   isbn: () => document.querySelector("#isbn")
}

const actions = {
   "load-books": async function () {
      try {
         const booksList = await Fetch.get("appdata", "books");
         const fragment = document.createDocumentFragment();
         const booksContainer = selectors.booksContainer();
         booksContainer.innerHTML = "";

         booksList.forEach(book => {
            const title = book.title;
            const author = book.author;
            const isbn = book.isbn;

            const tr = document.createElement("tr");

            const tdTitle = document.createElement("td");
            tdTitle.textContent = title;

            const tdAuthor = document.createElement("td");
            tdAuthor.textContent = author;

            const tdIsbn = document.createElement("td");
            tdIsbn.textContent = isbn;

            const tdButtons = document.createElement("td");

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.id = book._id;
            editBtn.addEventListener("click", this["load-edit-book"]);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.id = book._id;
            deleteBtn.addEventListener("click", this["delete-book"]);

            tdButtons.append(editBtn, deleteBtn);
            tr.append(tdTitle, tdAuthor, tdIsbn, tdButtons);
            fragment.appendChild(tr);
         });

         booksContainer.appendChild(fragment);
      } catch (err) {
         console.error(err);
      }

   },
   "create-book": function () {
      const title = selectors.title();
      const author = selectors.author();
      const isbn = selectors.isbn();

      if (title && author && isbn) {
         const params = {
            title: title.value,
            author: author.value,
            isbn: isbn.value
         }

         Fetch.create("appdata", "books", params)
            .catch(err => console.error(err));

         title.value = "";
         author.value = "";
         isbn.value = "";
      } else {
         alert("Please fill all input fields");
      }
   },
   "load-edit-book": async function () {
      const editForm = selectors.editForm();
      const id = this.id;
      const data = this.parentElement.parentElement.querySelectorAll("td");
      const title = data[0].textContent;
      const author = data[1].textContent;
      const isbn = data[2].textContent;

      editForm.querySelector("#edit-book").setAttribute("kinvey-id", id);
      editForm.querySelector("button").getAttribute("kinvey-id");
      editForm.querySelector("#edit-title").value = title;
      editForm.querySelector("#edit-author").value = author;
      editForm.querySelector("#edit-isbn").value = isbn;

      editForm.style.visibility = "visible";
   },
   "delete-book": async function () {
      if (confirm("Are you sure ?")) {
         const id = this.id;

         try {
            Fetch.remove("appdata", `books/${id}`);
            this.parentElement.parentElement.remove();
         } catch (err) {
            console.error(err);
         }
      }
   },
   "edit-book": async function () {
      const editForm = selectors.editForm();
      const id = editForm.querySelector("button").getAttribute("kinvey-id");
      const title = editForm.querySelector("#edit-title").value
      const author = editForm.querySelector("#edit-author").value
      const isbn = editForm.querySelector("#edit-isbn").value

      const params = {
         title,
         author,
         isbn
      }

      try {
         Fetch.update("appdata", `books/${id}`, params);
      } catch (err) {
         console.error(err);
      }

      editForm.style.visibility = "hidden";
   }
}

function handleEvent(e) {
   if (typeof actions[e.target.id] === "function") {
      e.preventDefault();
      actions[e.target.id]();
   }
}

(function attachEvents() {
   document.addEventListener("click", handleEvent);
}())