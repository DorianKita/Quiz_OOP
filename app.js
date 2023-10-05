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

    get correctAnswer(){
        return this.#correctAnswer;
    }

    // checkAnswer(answer){
    //     return this.#correctAnswer === answer;
    // }
}

class Quiz {
    #questions;
    #currentQuestionIndex;
    #score;

    constructor(questions){
        this.#questions = questions.map(question => new Question(question[0],question[1],question[2]));
        this.#currentQuestionIndex= 0;
        this.#score = 0;
    }

    displayQuestion(){
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');

        questionElement.textContent = this.#questions[this.#currentQuestionIndex].title;

      this.#questions[this.#currentQuestionIndex].answers.forEach((answer, index) => {
        const answerElement = document.createElement('li');
        answerElement.innerHTML = `<label><input type="radio" value=${index} name="answer"> ${answer}</label>`;
        answersElement.appendChild(answerElement);
      });
    }

    nextQuestion (){
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        
        if (selectedAnswer){

            if (parseInt(selectedAnswer.value) === this.#questions[this.#currentQuestionIndex].correctAnswer) {
                this.#score++;
            } else { 
                console.log('zła odpowiedź');
        }
        this.#currentQuestionIndex++;
        if(this.#currentQuestionIndex < this.#questions.length) {
            this.displayQuestion();
        } else {
            alert(`That's all. You got ${this.#score}/${this.#questions.length}`);
        }
        } else {
            alert('Pick answer please.');
        }
    }
    
}


const quiz = new Quiz(questionData);
quiz.displayQuestion();