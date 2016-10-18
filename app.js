'use strict';

var score = 0;

var question1 = prompt('Is Stephen from California?');
  if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {console.log('Correct')
    alert('Correct. Stephen is from Florida');
    question1 = true;
    score = score + 1;
    } else {
    console.log('Incorrect')
    alert('Inorrect. Stephen is from Florida')
    question1 === false;
    }

var question2 = prompt('Does Stephen have a cat?');
  if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {console.log('Correct')
    alert('Correct. Stephen does like cats though.');
    question2 = true;
    score = score + 1;
    } else {
    console.log('Incorrect')
    alert('Incorrect. Stephen does like cats though')
    question2 === false;
    }

var question3 = prompt('Does Stephen like kimchi?');
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {console.log('Correct')
    alert('Correct. Stephen loves Kimchi! and Korean bbq too.');
    question3 = true;
    score = score + 1;
    } else {
    console.log('Incorrect.')
    alert('Incorrect. Stephen loves Kimchi! and Korean bbq too.')
    question3 === false;
    }

var question4 = prompt('Did Stephen graduate from university?');
  if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {console.log('Correct')
    alert('Correct. Stephen graduated from The American University with a degree in Business Administration');
    question4 = true;
    score = score + 1;
    } else {
    console.log('Incorrect.')
    alert('Incorrect. Stephen graduated from The American University with a degree in Business Administration')
    question4 === false;
    }

var question5 = prompt('Would Stephen like to start a business?');
  if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {console.log('correct')
    alert('Correct. Someday Stephen would like to start his own business.');
    question5 = true;
    score = score + 1;
  } else {
    console.log('Incorrect.')
    alert('Incorrect. Someday Stephen would like to start his own business.')
    question5 === false;
    }

if (question1 === true && question2 === true && question3 === true && question4 === true && question5 === true) {
  console.log('You earned a perfect score!')
  alert('Congratulations!')
  alert('You earned a perfect score! You know me really well.')
} else {
  console.log('You answered ' + score + '/5 questions correctly.')
  alert('You answered ' + score + '/5 questions correctly. Maybe we should spend more time together.')
}
