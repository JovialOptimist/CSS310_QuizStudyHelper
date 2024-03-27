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
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function displayQuestion() {
    document.getElementById('question').textContent = questions[questionIndex].QuestionPrompt;
    document.getElementById('option1').nextElementSibling.textContent = questions[questionIndex].Answer1;
    document.getElementById('option2').nextElementSibling.textContent = questions[questionIndex].Answer2;
    document.getElementById('option3').nextElementSibling.textContent = questions[questionIndex].Answer3;
    document.getElementById('option4').nextElementSibling.textContent = questions[questionIndex].Answer4;
    document.getElementById('correctAnswerParagraph').textContent = "";
    document.getElementById('description').textContent = "";

    document.getElementById('option1').checked = false;
    document.getElementById('option2').checked = false;
    document.getElementById('option3').checked = false;
    document.getElementById('option4').checked = false;
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const selectedOption = document.querySelector('input[name="questionAnswer"]:checked');
    if (selectedOption) {
        const selectedValue = selectedOption.nextElementSibling.textContent;
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