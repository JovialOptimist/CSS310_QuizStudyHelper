let questions = [];
let questionIndex = 0;

function loadQuizQuestions() {
    fetch('questionsWithoutLetters.json')
        .then(response => response.json())
        .then(data => {
            questions = Array.isArray(data) ? data : [data];
            shuffle(questions);
            displayQuestion();
        })
        .catch(error => {
            console.error('Error fetching JSON file:', error);
        });
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function displayQuestion() {
    document.getElementById("option1").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option2").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option3").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option4").style.backgroundColor = 'rgb(60,60,60)';

    option1.addEventListener('mouseover', mouseoverHandler1);
    option1.addEventListener('mouseleave', mouseleaveHandler1);
    option2.addEventListener('mouseover', mouseoverHandler2);
    option2.addEventListener('mouseleave', mouseleaveHandler2);
    option3.addEventListener('mouseover', mouseoverHandler3);
    option3.addEventListener('mouseleave', mouseleaveHandler3);
    option4.addEventListener('mouseover', mouseoverHandler4);
    option4.addEventListener('mouseleave', mouseleaveHandler4);

    op1Clicked = false;
    op2Clicked = false;
    op3Clicked = false;
    op4Clicked = false;
    
    document.getElementById('question').textContent = questions[questionIndex].QuestionPrompt;
    document.getElementById('option1').textContent = questions[questionIndex].Answer1;
    document.getElementById('option2').textContent = questions[questionIndex].Answer2;
    document.getElementById('option3').textContent = questions[questionIndex].Answer3;
    document.getElementById('option4').textContent = questions[questionIndex].Answer4;
    document.getElementById('correctAnswerParagraph').textContent = "";
    document.getElementById('description').textContent = "";
}

document.getElementById("submitButton").addEventListener('click', function() {
    const selectedOption = document.querySelector('div[name="questionAnswer"][style*="background-color: rgb(100, 100, 100)"]');
    if (selectedOption) {
        const selectedValue = selectedOption.textContent;
        console.log('Selected answer:', selectedValue);
        if (selectedValue == questions[questionIndex].CorrectAnswer)
        {
            document.getElementById("correctAnswerParagraph").textContent = "Good job! The correct answer is '" + questions[questionIndex].CorrectAnswer + "'";
            document.getElementById("description").textContent = questions[questionIndex].AnswerExplanation;
        }
        else
        {
            document.getElementById("correctAnswerParagraph").textContent = "The correct answer is '" + questions[questionIndex].CorrectAnswer + "'";
            document.getElementById("description").textContent = questions[questionIndex].AnswerExplanation;
        }
    } else {
        console.log('Please select an answer.');
    }
});

document.getElementById("nextButton").addEventListener('click', function(event) {
    questionIndex++;
    displayQuestion();
});

// Load quiz questions when the page loads
loadQuizQuestions();

/*
 _   _                   _                _                   _               _ _             
| | | |                 | |              (_)                 | |             | (_)            
| | | | ___ _ __ _   _  | |__   ___  _ __ _ _ __   __ _   ___| |__   __ _  __| |_ _ __   __ _ 
| | | |/ _ \ '__| | | | | '_ \ / _ \| '__| | '_ \ / _` | / __| '_ \ / _` |/ _` | | '_ \ / _` |
\ \_/ /  __/ |  | |_| | | |_) | (_) | |  | | | | | (_| | \__ \ | | | (_| | (_| | | | | | (_| |
 \___/ \___|_|   \__, | |_.__/ \___/|_|  |_|_| |_|\__, | |___/_| |_|\__,_|\__,_|_|_| |_|\__, |
                  __/ |                            __/ |                                 __/ |
                 |___/                            |___/                                 |___/ 
*/

// OPTION 1
const option1 = document.getElementById("option1");
const mouseoverHandler1 = function() {
    option1.style.backgroundColor = 'rgb(85,85,85)';
    option1.style.transition = 'background-color 0.1s';
};
const mouseleaveHandler1 = function() {
    option1.style.backgroundColor = 'rgb(60,60,60)';
    option1.style.transition = 'background-color 0.1s';
};
option1.addEventListener('mouseover', mouseoverHandler1);
option1.addEventListener('mouseleave', mouseleaveHandler1);

// OPTION 2
const option2 = document.getElementById("option2");
const mouseoverHandler2 = function() {
    option2.style.backgroundColor = 'rgb(85,85,85)';
    option2.style.transition = 'background-color 0.1s';
};
const mouseleaveHandler2 = function() {
    option2.style.backgroundColor = 'rgb(60,60,60)';
    option2.style.transition = 'background-color 0.1s';
};
option2.addEventListener('mouseover', mouseoverHandler2);
option2.addEventListener('mouseleave', mouseleaveHandler2);

// OPTION 3
const option3 = document.getElementById("option3");
const mouseoverHandler3 = function() {
    option3.style.backgroundColor = 'rgb(85,85,85)';
    option3.style.transition = 'background-color 0.1s';
};
const mouseleaveHandler3 = function() {
    option3.style.backgroundColor = 'rgb(60,60,60)';
    option3.style.transition = 'background-color 0.1s';
};
option3.addEventListener('mouseover', mouseoverHandler3);
option3.addEventListener('mouseleave', mouseleaveHandler3);

// OPTION 4
const option4 = document.getElementById("option4");
const mouseoverHandler4 = function() {
    option4.style.backgroundColor = 'rgb(85,85,85)';
    option4.style.transition = 'background-color 0.1s';
};
const mouseleaveHandler4 = function() {
    option4.style.backgroundColor = 'rgb(60,60,60)';
    option4.style.transition = 'background-color 0.1s';
};
option4.addEventListener('mouseover', mouseoverHandler4);
option4.addEventListener('mouseleave', mouseleaveHandler4);

// OPTION 1 CLICKED
let op1Clicked = false;
option1.addEventListener('click', function() {
    op1Clicked = !op1Clicked;
    option1.style.backgroundColor = 'rgb(100,100,100)';
    document.getElementById("option2").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option3").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option4").style.backgroundColor = 'rgb(60,60,60)';

    if (op1Clicked) {
        option1.removeEventListener('mouseover', mouseoverHandler1);
        option1.removeEventListener('mouseleave', mouseleaveHandler1);

        op2Clicked = false;
        option2.addEventListener('mouseover', mouseoverHandler2);
        option2.addEventListener('mouseleave', mouseleaveHandler2);
        
        op3Clicked = false;
        option3.addEventListener('mouseover', mouseoverHandler3);
        option3.addEventListener('mouseleave', mouseleaveHandler3);
        
        op4Clicked = false;
        option4.addEventListener('mouseover', mouseoverHandler4);
        option4.addEventListener('mouseleave', mouseleaveHandler4);
    } else {
        option1.addEventListener('mouseover', mouseoverHandler1);
        option1.addEventListener('mouseleave', mouseleaveHandler1);
    }
});

// OPTION 2 CLICKED
let op2Clicked = false;
option2.addEventListener('click', function() {
    op2Clicked = !op2Clicked;
    option2.style.backgroundColor = 'rgb(100,100,100)';
    document.getElementById("option1").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option3").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option4").style.backgroundColor = 'rgb(60,60,60)';

    if (op2Clicked) {
        option2.removeEventListener('mouseover', mouseoverHandler2);
        option2.removeEventListener('mouseleave', mouseleaveHandler2);

        op1Clicked = false;
        option1.addEventListener('mouseover', mouseoverHandler1);
        option1.addEventListener('mouseleave', mouseleaveHandler1);

        op3Clicked = false;
        option3.addEventListener('mouseover', mouseoverHandler3);
        option3.addEventListener('mouseleave', mouseleaveHandler3);

        op4Clicked = false;
        option4.addEventListener('mouseover', mouseoverHandler4);
        option4.addEventListener('mouseleave', mouseleaveHandler4);
    } else {
        option2.addEventListener('mouseover', mouseoverHandler2);
        option2.addEventListener('mouseleave', mouseleaveHandler2);
    }
});

// OPTION 3 CLICKED
let op3Clicked = false;
option3.addEventListener('click', function() {
    op3Clicked = !op3Clicked;
    option3.style.backgroundColor = 'rgb(100,100,100)';
    document.getElementById("option1").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option2").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option4").style.backgroundColor = 'rgb(60,60,60)';

    if (op3Clicked) {
        option3.removeEventListener('mouseover', mouseoverHandler3);
        option3.removeEventListener('mouseleave', mouseleaveHandler3);

        op1Clicked = false;
        option1.addEventListener('mouseover', mouseoverHandler1);
        option1.addEventListener('mouseleave', mouseleaveHandler1);

        op2Clicked = false;
        option2.addEventListener('mouseover', mouseoverHandler2);
        option2.addEventListener('mouseleave', mouseleaveHandler2);

        op4Clicked = false;
        option4.addEventListener('mouseover', mouseoverHandler4);
        option4.addEventListener('mouseleave', mouseleaveHandler4);
    } else {
        option3.addEventListener('mouseover', mouseoverHandler3);
        option3.addEventListener('mouseleave', mouseleaveHandler3);
    }
});

// OPTION 4 CLICKED
let op4Clicked = false;
option4.addEventListener('click', function() {
    op4Clicked = !op4Clicked;
    option4.style.backgroundColor = 'rgb(100,100,100)';
    document.getElementById("option2").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option3").style.backgroundColor = 'rgb(60,60,60)';
    document.getElementById("option1").style.backgroundColor = 'rgb(60,60,60)';

    if (op4Clicked) {
        option4.removeEventListener('mouseover', mouseoverHandler4);
        option4.removeEventListener('mouseleave', mouseleaveHandler4);

        op1Clicked = false;
        option1.addEventListener('mouseover', mouseoverHandler1);
        option1.addEventListener('mouseleave', mouseleaveHandler1);

        op2Clicked = false;
        option2.addEventListener('mouseover', mouseoverHandler2);
        option2.addEventListener('mouseleave', mouseleaveHandler2);

        op3Clicked = false;
        option3.addEventListener('mouseover', mouseoverHandler3);
        option3.addEventListener('mouseleave', mouseleaveHandler3);
        
    } else {
        option4.addEventListener('mouseover', mouseoverHandler4);
        option4.addEventListener('mouseleave', mouseleaveHandler4);
    }
});

