const quiz = require('./candidate-testing');

const input = require('readline-sync');
let candidateName = "";
let question = "Who was the first American woman in space? ";
let candidateAnswer = "";
let candidateAnswers = [];
let correctAnswer = "Sally Ride";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];


function askForName() {
  // TODO 1.1b: Ask for candidate's name
  candidateName = input.question("Whats your name: ");
}

function askQuestion() {
  for(let i = 0; i < questions.length; i = i + 1){
    candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {
  let studentScore = 0;
  console.log("Candidate Name: " + candidateName);
  for(let x = 0; x < questions.length; x++){
    if(candidateAnswers[x].toLowerCase() == correctAnswers[x].toLowerCase()){
      studentScore = studentScore + 1;
    }
  }

  let grade = (studentScore/questions.length) * 100;
  console.log("Grade: " + grade + "%");
  if(grade >= 80){
    console.log("TEST PASSED");
  }
  else{
    console.log("TEST FAILED")
  }
  return grade;
}

function runProgram() {
  askForName();
  console.log("Welcome " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

quiz.runProgram();