const quizData = [
  {
    question: "How old is Gurkan?",
    a: "6",
    b: "27",
    c: "226",
    d: "4050",
    correct: "d",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "Gurkan",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of USA?",
    a: "Gurkan",
    b: "Biden",
    c: "Donald Trump",
    d: "McDonalds",
    correct: "b",
  },
  {
    question: "What does HTML stand for ?",
    a: "Hypertext Markup Language",
    b: "Gurkan",
    c: "Cascading Style Sheet",
    d: "Jason Object Notation",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched ?",
    a: "1996",
    b: "Gurkan",
    c: "1995",
    d: "1994",
    correct: "c",
  },
];

// define the elements
const questionTxt = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentAnswer = undefined;

let countQuest = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  defineQuestion();
}

// TODO turn the answer
function getSelected() {
  const answersEls = document.querySelectorAll(".answer");

  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);
  if (answer) {
    if (answer === currentAnswer) {
      score++;
    }
    countQuest++;

    if (countQuest < quizData.length - 1) {
      loadQuiz();
    } else {
      // TODO show it
      alert(`You Finish !! Your Score: ${score}`);
    }
  }
});

function defineQuestion() {
  const currentQuestion = quizData[countQuest];
  currentAnswer = currentQuestion.correct;

  questionTxt.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
}
