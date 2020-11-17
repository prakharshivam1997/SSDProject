(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'Darkgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Question 1. What does CSRF stand for?",
      answers: {
        a: "Control Section Request Function",
        b: "Can't Stand Real Facts",
        c: "Cross Site Relative Function",
	d: "Cross Site Request Forgery"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 2. Who was the victim of the CSRF attacks?",
      answers: {
        a: "ALICE",
        b: "BOB",
        c: "MEL",
	d: "SERVER"
      },
      correctAnswer: "a"
    },
    {
      question: "Question 3. What does the user type in to get to the website?",
      answers: {
        a: "HTTP",
        b: "Bank's Name",
        c: "URL",
        d: "Google"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 4. The vulnerability of CSRF comes from?",
      answers: {
        a: "ALICE",
        b: "BOB",
        c: "MEL",
	d: "SERVER"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 5. What object does the attacker use to trick the server?",
      answers: {
        a: "Knife or a Gun",
        b: "Image with a URL embedded",
        c: "Magic",
        d: "None of the Above"
      },
      correctAnswer: "b"
    },
    {
      question: "Question 6. CSRF is performed via?",
      answers: {
        a: "Websites",
        b: "Instant Messaging",
        c: "Emails",
        d: "All of the Above"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 7.  The full form of Malware is?",
      answers: {
        a: "Malfunctioned Software",
        b: "Multipurpose Software",
        c: "Malicious Software",
        d: "Malfunctioning of Security"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 8.  This attack can be deployed by infusing a malicious code in a website’s comment section. What is “this” attack referred to here?",
      answers: {
        a: "SQL injection",
        b: "HTML injection",
        c: "Cross Site Scripting (XSS)",
        d: "Cross Site Request Forgery (XSRF)"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 9. Which of them is not a wireless attack?",
      answers: {
        a: "Eavesdropping",
        b: "MAC Spoofing",
        c: "Wireless Hijacking",
        d: "Phishing"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 10.  An attempt to harm, damage or cause threat to a system or network is broadly termed as?",
      answers: {
        a: "Cyber-crime",
        b: "Cyber Attack",
        c: "System hijacking",
        d: "Digital crime"
      },
      correctAnswer: "b"
    }
		
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();