'use strict';

var score = 0;

alert('The first five questinos accept yes or no answers.');
var question1 = prompt('Is Stephen from California?');
if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {console.log('Correct');
  alert('Correct. Stephen is from Florida');
  score = score + 1;
} else {
  console.log('Incorrect');
  alert('Inorrect. Stephen is from Florida');
}

var question2 = prompt('Does Stephen have a cat?');
if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {console.log('Correct');
  alert('Correct. Stephen does like cats though.');
  score = score + 1;
} else {
  console.log('Incorrect');
  alert('Incorrect. Stephen does like cats though');
}

var question3 = prompt('Does Stephen like kimchi?');
if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {console.log('Correct');
  alert('Correct. Stephen loves Kimchi! and Korean bbq too.');
  score = score + 1;
} else {
  console.log('Incorrect.');
  alert('Incorrect. Stephen loves Kimchi! and Korean bbq too.');
}

var question4 = prompt('Did Stephen graduate from university?');
if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {console.log('Correct');
  alert('Correct. Stephen graduated from The American University with a degree in Business Administration');
  score = score + 1;
} else {
  console.log('Incorrect.');
  alert('Incorrect. Stephen graduated from The American University with a degree in Business Administration');
}

var question5 = prompt('Would Stephen like to start a business?');
if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {console.log('correct');
  alert('Correct. Someday Stephen would like to start his own business.');
  score = score + 1;
} else {
  console.log('Incorrect.');
  alert('Incorrect. Someday Stephen would like to start his own business.');
}

alert('These last two questinos accept all forms of answer');

for (var attempts = 0; attempts < 4; attempts ++) {
  var question6 = prompt('Can you guess how many dogs have I had in my life? Hint: < 10');
  if (question6 === 5) {
    console.log('correct');
    alert('Correct, Stephen has had 5 dogs throughout his life');
    score = score + 1;
    attempts = attempts + 4;
  } else if (attempts < 3 && question6 < 5) {
    console.log('Incorrect');
    alert('Incorrect. Your answer is too small. Please try again. You have ' + (3 - attempts) + ' remaining.');
  } else if (attempts < 3 && question6 > 5) {
    console.log('Incorrect');
    alert('Incorrect. Your answer is too large. Please try again. You have ' + (3 - attempts) + ' remaining.');
  } else {
    console.log('Incorrect.');
    alert('You have run out of attempts. Stephen has had 5 dogs throughout his life');
  }
}

favoriteFoods = [pizza, korean, sushi, pie];

for (var q7attempts = 0; attempts < 6; attempts ++) {
  var question7 = prompt('Can you guess one of my favorite foods?');
  i = 0;
  while (question question7 != favoriteFoods[i] && i < favoriteFoods.length) {
    i++
  }
  if (question7.toLowerCase() = favoriteFoods[i]) {
    console.log('Correct. The accepted answers are ' + favoriteFoods[0] + ', ' + favoriteFoods[1] + ', ' + favoriteFoods[2] + ', ' + favoriteFoods[3] + '.')
    alert('Correct. The accepted answers are ' + favoriteFoods[0] + ', ' + favoriteFoods[1] + ', ' + favoriteFoods[2] + ', ' + favoriteFoods[3] + '.')
    score = score + 1;
    q7attempts = q7attempts + 6;
  } else if (attempts < 6) {
    console.log('Incorrect.')
    alert('Incorrect. Please try again. You have ' + (5 - q7attempts) ' remaining.')
  } else {
    console.log('Incorrect');
    alert('You have run out of attempts. The accepted answers are ' + favoriteFoods[0] + ', ' + favoriteFoods[1] + ', ' + favoriteFoods[2] + ', ' + favoriteFoods[3] + '.')
  }
  }

if (score = 7) {
  console.log('You earned a perfect score!');
  alert('Congratulations!');
  alert('You earned a perfect score! You know me really well.');
} else {
  console.log('You answered ' + score + '/7 questions correctly.');
  alert('You answered ' + score + '/7 questions correctly. Maybe we should spend more time together.');
}
