function displayDetails(e) {
   e.parentElement.lastElementChild.style.display = "block";
}

$(async () => {
   const source = await fetch("./monkey-template.hbs")
      .then(res => res.text())

   const template = Handlebars.compile(source);
   const html = template({monkeys: monkeys});
   
   document.querySelector("#container").innerHTML = html;
})