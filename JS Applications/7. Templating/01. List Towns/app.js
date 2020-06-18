const selectors = {
   townsInput: () => document.querySelector("#towns"),
   loadTownsBtn: () => document.querySelector("#btnLoadTowns"),
   townsContainer: () => document.querySelector("#root")
}

selectors.loadTownsBtn()
   .addEventListener("click", async function () {
      selectors.townsContainer().innerHTML = "";

      const towns = selectors.townsInput()
         .value.split(", ");

      const source = await fetch("./town-template.hbs")
         .then(res => res.text());

      const template = Handlebars.compile(source);
      const context = { towns };
      const html = template(context);

      selectors.townsContainer().innerHTML = html;
   });