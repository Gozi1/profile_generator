// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// import { arrayBuffer } from 'stream/consumers';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["What's your name? Nicknames are also acceptable :)  ","What's an activity you like doing?  ","What do you listen to while doing that?  ","Which meal is your favourite (eg: dinner, brunch, etc.)  ",
  "What's your favourite thing to eat for that meal?  ",
  "Which sport is your absolute favourite?  ",
  "What is your superpower? In a few words, tell us what you are amazing at!  "];

const answers = [];

const profileQuestions = function(questionArray,index,answersArray) {
  rl.question(questionArray[index], function(answer) {
       
    answersArray.push(answer);
    //closing RL and returning from function.
    if (answer === 'exit' || index === questionArray.length - 1) {
      //need some base case, for recursion
      printProfile(answersArray);
      return rl.close();
    }
    profileQuestions(questionArray,index + 1,answersArray); //Calling this function again to ask new question
  });
};

profileQuestions(questions,0,answers);

const printProfile = function(array) {
  console.clear();
  console.log(`Hi my name is  ${array[0]}.I like ${array[1]} and love to listen to ${array[2]} while doing it . My favourite meal-time is ${array[3]} and I usually love to eat ${array[4]}. My best sport is ${array[5]}. I am amazing at ${array[6]}`);
  return;
};
