const questionData = [
    ['Which programming language is best for web development?', ['C#', 'Python', 'Javascript'],2],
    ['Co oznacza [] w JavaScript?', ['Array', 'Object', 'String'],0],
    ['How many primitive types are there in JavaScript?',['1','7','3'],1],
];

class Question  {
#title;
#answers;
#correctAnswer;

    constructor(title, answer, correctAnswer){
        this.#title = title;
        this.#answers = answer;
        this.#correctAnswer = correctAnswer;
        }

    get title(){
        return this.#title;
    }
    get answers(){
        return this.#answers;
    }
}

class Quiz {
    #questions;
    #currentQuestionIndex;
    #score;

    constructor(questions){
        this.#questions = questions.map(question => new Question(question[0],question[1],question[2]));
        console.log(this.#questions);
        this.#currentQuestionIndex= 0;
        this.#score = 0;
    }

    displayQuestion(){
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');

        questionElement.textContent = this.#questions[this.#currentQuestionIndex].title;

      this.#questions[this.#currentQuestionIndex].answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.innerHTML = `<label><input type="radio" value=${index}> ${answer}</label>`;
        answersElement.appendChild(answerElement);
      });
    }
}


const quiz = new Quiz(questionData);
quiz.displayQuestion();