const usernameInput = document.querySelector("#username");
const ulOutput = document.querySelector("#repos");

const loadBtn = document.querySelector("button");
loadBtn.addEventListener("click", handleRepos)

function handleRepos() {
   ulOutput.innerHTML = '<a href="{repo.html_url}">{repo.full_name}</a>';
   const username = usernameInput.value;

   fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => {
         if (!res.ok) {
            return Promise.reject('Response not ok with status ' + res.status);
         }

         return res;
      })
      .then(res => res.json())
      .then(loadSuccess)
      .catch(handleError)

   usernameInput.value = "";
}

function loadSuccess(data) {
   ulOutput.firstElementChild.remove();

   data.forEach(d => {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.setAttribute("href", d.html_url);
      a.textContent = d.full_name;

      li.appendChild(a);
      ulOutput.appendChild(li);
   })
}

function handleError(data) {
   ulOutput.firstElementChild.innerHTML = data;
}