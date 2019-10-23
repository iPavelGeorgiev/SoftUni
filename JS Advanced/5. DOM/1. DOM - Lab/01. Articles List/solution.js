function createArticle() {
	const titleInput = document.getElementById("createTitle");
	const contentInput = document.getElementById("createContent");
	const sectionOutput = document.getElementById("articles");

	if (titleInput.value !== "" && contentInput.value !== "") {
		const h3 = document.createElement("h3");
		h3.textContent = titleInput.value;

		const p = document.createElement("p");
		p.textContent = contentInput.value;

		const newArticle = document.createElement("article");
		newArticle.appendChild(h3);
		newArticle.appendChild(p);

		sectionOutput.appendChild(newArticle);

		titleInput.value = "";
		contentInput.value = "";
	}
}