const myQuestions = [
    {
        question: 'Javascript is _________ language.',
        answers: {
            a: 'Programming',
            b: 'Application',
            c: 'None of These',
            d: 'Scripting'
        },
        multi: false,
        correctAnswer: 'd'
    },
    {
        question:
            'Which of the following is a valid type of function javascript supports?',
        answers: {
            a: 'named function',
            b: 'anonymous function',
            c: 'both of the above',
            d: 'none of the above'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question:
            'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: {
            a: 'getIndex()',
            b: 'location()',
            c: 'indexOf()',
            d: 'getLocation()'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which one of the following is valid data type of JavaScript',
        answers: {
            a: 'number',
            b: 'void',
            c: 'boolean',
            d: 'nothing'
        },
        multi: false,
        correctAnswer: 'c'
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionCtn = document.querySelector(".question-container")
const question = document.querySelector("#question");
const answers = document.querySelector(".answer");
const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");
const result = document.querySelector(".result");

//function show question 
function showQuestion() {
    const currentQuestion = myQuestions[currentQuestionIndex];
    question.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    answers.innerHTML = "";

    for (const [key, value] of Object.entries(currentQuestion.answers)) {
      const answer = document.createElement("label");
      answer.innerHTML = `<input type="radio" name="answer" value="${key}"> ${key}. ${value} <br>`;
      answer.onclick = () => checkAnswer(key);
      answers.appendChild(answer);
    }
    updateBtn();
}
//function check answer
function checkAnswer(selectedIndex) {
    const currentQuestion = myQuestions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        console.log("Correct!");
        score++;
    }
    else {
        console.log("Incorrect!");
    }
}
//Previous question
preBtn.addEventListener("click", function () {
    currentQuestionIndex--;
    showQuestion();
});
//Next question
nextBtn.addEventListener("click", function () {
    currentQuestionIndex++;
    showQuestion();
});
//function show or hide button
function updateBtn() {
    preBtn.style.display = currentQuestionIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentQuestionIndex === myQuestions.length - 1 ? "none" : "block";
    submitBtn.style.display = currentQuestionIndex === myQuestions.length - 1 ? "block" : "none";
}
//submit quiz
submitBtn.addEventListener("click", function () {
    result.textContent = `${score} out of ${myQuestions.length}`;
});

showQuestion();