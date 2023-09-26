const questions = [
    {
     question: "Which is the largest animal in the world",
     answers:[
        {text: "shark", correct: false},
        {text: "Blue Whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false},
     ]   
    },
    {
        question: "Which of this is not protein",
        answers:[
           {text: "moi-moi", correct: false},
           {text: "rice", correct: true},
           {text: "egg", correct: false},
           {text: "beans", correct: false},
        ]   
       },
       {
        question: "Which is the largest desert in the world",
        answers:[
           {text: "Kalahari", correct: false},
           {text: "Gobi", correct: false},
           {text: "sahara", correct: false},
           {text: "Antarctica", correct: true},
        ]   
       },
       {
        question: "Which is the smallest continent in the world",
        answers:[
           {text: "Asia", correct: false},
           {text: "Australia", correct: true},
           {text: "Arctic", correct: false},
           {text: "Africa", correct: false},
        ]   
       }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.amswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
    });
}
