class Forum {
   constructor() {
      this._users = [];
      this._questions = [];
      this._id = 1;
      this._questions = [];
   }

   register(username, password, repeatPassword, email) {
      if (!username || !password || !repeatPassword || !email) {
         throw new Error("Input can not be empty");
      }

      if (password !== repeatPassword) {
         throw new Error("Passwords do not match");
      }

      const user = this._users.find(x => x.username === username);

      if (user) {
         throw new Error("This user already exists!");
      }

      const userObj = {
         username,
         password,
         email,
         status: "offline"
      }

      this._users.push(userObj);
      return `${username} with ${email} was registered successfully!`
   }

   login(username, password) {
      const user = this._users.find(x => x.username === username);

      if (!user) {
         throw new Error("There is no such user");
      }

      if (user.password === password) {
         user.status = "online";
         return "Hello! You have logged in successfully";
      }
   }

   logout(username, password) {
      const user = this._users.find(x => x.username === username);

      if (!user) {
         throw new Error("There is no such user");
      }

      if (user.password === password) {
         user.status = "offline";
         return "You have logged out successfully";
      }
   }

   postQuestion(username, question) {
      const user = this._users.find(x => x.username === username && x.status === "online");
      const id = this._id;

      if (!user) {
         throw new Error("You should be logged in to post questions");
      }

      if (question === "") {
         throw new Error("Invalid question");
      }

      const questionObj = {
         id,
         creator: username,
         question,
         answers: []
      }

      this._id++;
      this._questions.push(questionObj);

      return "Your question has been posted successfully";
   }

   postAnswer(username, questionId, answer) {
      const user = this._users.find(x => x.username === username && x.status === "online");

      if (!user) {
         throw new Error("You should be logged in to post answers");
      }

      if (answer === "") {
         throw new Error("Invalid answer");
      }

      const findQuestion = this._questions.find(x => x.id === questionId);

      if (!findQuestion) {
         throw new Error("There is no such question");
      }

      const answerObj = {
         username,
         answer
      }

      findQuestion.answers.push(answerObj);
      return "Your answer has been posted successfully";
   }

   showQuestions() {
      const print = [];

      this._questions.forEach(({ id, creator, question, answers }) => {
         const questionStr = `Question ${id} by ${creator}: ${question}`;
         print.push(questionStr);

         answers.forEach(({ username, answer }) => {
            const answerStr = `---${username}: ${answer}`;
            print.push(answerStr);
         });
      })

      return print.join("\n");
   }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
console.log(forum.showQuestions());