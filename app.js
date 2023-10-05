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
        const answersElement = document.getElementById('answer');

        questionElement.textContent = this.#questions[this.#currentQuestionIndex].title;
    }
}


const quiz = new Quiz(questionData);
quiz.displayQuestion();