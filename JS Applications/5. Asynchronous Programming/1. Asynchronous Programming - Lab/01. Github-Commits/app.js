import {createValidLI, createInvalidLI} from "./visualize.js";
import {fetchData} from "./fetchData.js";

const selectors = {
   usernameTextBox: () => document.querySelector("#username"),
   repoTextBox: () => document.querySelector("#repo"),
   loadBtn: () => document.querySelector("#loadButton"),
   commitsUL: () => document.querySelector("#commits")
}

selectors.loadBtn().addEventListener("click", loadCommits);

async function loadCommits() {
   const username = selectors.usernameTextBox().value;
   const repository = selectors.repoTextBox().value;
   const rootUrl = "https://api.github.com/repos";
   const url = `${rootUrl}/${username}/${repository}/commits`;

   selectors.commitsUL().innerHTML = "";

   const data = await fetchData(createValidLI, createInvalidLI, url);
   selectors.commitsUL().appendChild(data);

   selectors.usernameTextBox().value = "";
   selectors.repoTextBox().value = "";
}