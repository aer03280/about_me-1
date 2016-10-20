'use strict';
//
var score = 0;
var favoriteFoods = ['pizza', 'korean', 'sushi', 'pie'];
//
// QUESTION 1
function yesNoQuestions(question , correctResponse , incorrectResponse, answerOne , answerTwo) {
  var ans = prompt(question);
  if (ans.toLowerCase() === answerOne || ans.toLowerCase() === answerTwo) {
    console.log('Correct');
    alert(correctResponse);
    score = score + 1;
  } else {
    console.log('Incorrect');
    alert(incorrectResponse);
  }
}
alert('The first five questions accept yes or no answers.');
yesNoQuestions('Is Stephen from California?' , 'Correct. Stephen is from Florida' , 'Inorrect. Stephen is from Florida' , 'no' , 'n');

yesNoQuestions('Does Stephen have a cat?' , 'Correct. Stephen does like cats though.' , 'Incorrect. Stephen does like cats though.' , 'no' , 'n');

yesNoQuestions('Does Stephen like kimchi?' , 'Correct. Stephen loves Kimchi! and Korean bbq too.' , 'Incorrect. Stephen loves Kimchi! and Korean bbq too.' , 'yes' , 'y');

yesNoQuestions('Did Stephen graduate from university?' , 'Correct. Stephen graduated from The American University with a degree in Business Administration' , 'Incorrect. Stephen graduated from The American University with a degree in Business Administration' , 'yes' , 'y');

yesNoQuestions('Would Stephen like to start a business?' , 'Correct. Someday Stephen would like to start his own business.' , 'Incorrect. Someday Stephen would like to start his own business.' , 'yes' , 'y');

alert('These last two questinos accept all forms of answer');

function guessNumber(question , correctResponse , tooSmall , tooLarge , noAttempts , correctAnswer, optionAttempt){
  for (var attempts = 0; attempts < optionAttempt; attempts++) {
    var ans = prompt(question);
    if (parseInt(ans) === correctAnswer) {
      console.log('correct');
      alert(correctResponse);
      score += 1;
      break;
    } else if (attempts < optionAttempt && parseInt(ans) < correctAnswer) {
      console.log('Incorrect');
      alert(tooSmall);
      // attempts += 1;
    } else if (attempts < optionAttempt && parseInt(ans) > correctAnswer) {
      console.log('Incorrect');
      alert(tooLarge);
      // attempts += 1;
    }
  }
  if (attempts === 4) {
    console.log('Incorrect.');
    alert(noAttempts);
  }
}

guessNumber('Can you guess how many dogs have I had in my life? Hint: < 10' , 'Correct, Stephen has had 5 dogs throughout his life' , 'Incorrect. Your answer is too small. Please try again.' , 'Incorrect. Your answer is too large. Please try again.' , 'You have run out of attempts. Stephen has had 5 dogs throughout his life' , 5 , 4);

// for (var attempts = 0; attempts < 4; attempts ++) {
//   var question6 = prompt('Can you guess how many dogs have I had in my life? Hint: < 10');
//   if (parseInt(question6) === 5) {
//     console.log('correct');
//     alert('Correct, Stephen has had 5 dogs throughout his life');
//     score = score + 1;
//     attempts = attempts + 4;
//   } else if (attempts < 3 && question6 < 5) {
//     console.log('Incorrect');
//     alert('Incorrect. Your answer is too small. Please try again. You have ' + (3 - attempts) + ' attempts remaining.');
//   } else if (attempts < 3 && question6 > 5) {
//     console.log('Incorrect');
//     alert('Incorrect. Your answer is too large. Please try again. You have ' + (3 - attempts) + ' attempts remaining.');
//   } else {
//     console.log('Incorrect.');
//     alert('You have run out of attempts. Stephen has had 5 dogs throughout his life');
//   }
// }

function guessString ( guessLimit , correctAnswer , question , correctResponse , incorrectResponse , noAttempts) {
  for (var attempts1 = 0; attempts1 < guessLimit; attempts1 ++) {
    var ans = prompt(question);
    i = 0;
    while (ans !== correctAnswer[i] && i < correctAnswer.length) {
      i++;
    }
    if (ans.toLowerCase() === correctAnswer[i]) {
      console.log(correctResponse);
      alert(correctResponse);
      score += 1;
      break;
    } else if (attempts1 < guessLimit) {
      console.log(incorrectResponse);
      alert(incorrectResponse);
    } else {
      console.log(noAttempts);
      alert(noAttempts);
    }
  }
  guessString(6, favoriteFoods , 'Can you guess one of my favorite foods?' , 'Correct. The accepted answers are' + favoriteFoods.split(', ') , 'Incorrect. Please try again. You have ' + (5 - attempts1) + ' remaining.' , 'You have run out of attempts. The accepted answers are ' + favoriteFoods.split(', ') );
}
//
// if (score = 7) {
//   console.log('You earned a perfect score!');
//   alert('Congratulations!');
//   alert('You earned a perfect score! You know me really well.');
// } else {
//   console.log('You answered ' + score + '/7 questions correctly.');
//   alert('You answered ' + score + '/7 questions correctly. Maybe we should spend more time together.');
// }
