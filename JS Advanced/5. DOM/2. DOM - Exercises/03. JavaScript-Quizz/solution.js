function solve() {
  const sections = document.querySelector("#quizzie").children;
  let rightAnswers = 0;
  let tempIndex = 1;

  Array.from(sections)
    .forEach(x => x.addEventListener("click", function nextQuestion(e) {
      const answer = e.target.innerHTML;
      const rightAnswersList = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];

      if (rightAnswersList.includes(answer)) {
        rightAnswers++;
      }

      x.style.display = "none";
      x.nextElementSibling.style.display = "block";

      if (tempIndex >= 3) {
        showResult(rightAnswers);
      }

      tempIndex++;
    }))

  function showResult(rightAnswers) {
    if (rightAnswers >= 3) {
      document.querySelector("#results > li > h1").innerHTML = "You are recognized as top JavaScript fan!"
    } else {
      document.querySelector("#results > li > h1").innerHTML = `You have ${rightAnswers} right answers`
    }
  }
}