const quizDb = [
  {
    question: "Q1 : Ye hai pehla Sawal?",
    a: "Pehla jawab",
    b: "Dusra jawab",
    c: "Tisra jawab",
    d: "Chautha jawab",
    ans: "ans4",
  },
  {
    question: "Q2 : Ye hai Dusra Sawal?",
    a: "Pehla jawab",
    b: "Dusra jawab",
    c: "Tisra jawab",
    d: "Chautha jawab",
    ans: "ans1",
  },
  {
    question: "Q3 : Ye hai Tisra Sawal?",
    a: "Pehla jawab",
    b: "Dusra jawab",
    c: "Tisra jawab",
    d: "Chautha jawab",
    ans: "ans2",
  },
];


const  question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const  showQuestions = document.querySelector('.inner-div');


let questionCount = 0;
let score = 0;
// quizDb.forEach(question)
const loadQuestion=()=>{
 
 const questionList = quizDb[questionCount]; 
 question.innerHTML = questionList.question;
 option1.innerHTML = questionList.a;
 option2.innerHTML = questionList.b;
 option3.innerHTML = questionList.c;
 option4.innerHTML = questionList.d;
};
loadQuestion();
const getCheckAnswer = ()=>{
  let answer;
  answers.forEach((currentAnsElement)=>{
    currentAnsElement.checked ? answer = currentAnsElement.id : "";
    
  }) 
  return answer;
}

const deselectAll = ()=>{
  answers.forEach(eachValue=>{
    eachValue.checked = false;
  })
}
submit.addEventListener('click',()=>{
  const checkedAnswer = getCheckAnswer();
  if(checkedAnswer === quizDb[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if(questionCount < quizDb.length){
    loadQuestion();
  }else{
    showScore.innerHTML =`<h1> You scored ${score} / ${quizDb.length}</h1>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    showScore.style.display = "block";
    if(quizDb[questionCount] == undefined){
      showQuestions.style.display = "none";
    }
  }
});