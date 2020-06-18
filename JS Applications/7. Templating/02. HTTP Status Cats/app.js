(() => {
   renderCatTemplate();

   async function renderCatTemplate() {
      const source = await fetch("./cat-template.hbs")
         .then(res => res.text());

      const template = Handlebars.compile(source);
      const context = { cats: window.cats};
      const html = template(context);
      document.querySelector("#cats-container").innerHTML = html;
   }
})()