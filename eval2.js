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
      question: "Question 1. SQL injection is an attack in which _________ code is inserted into strings that are later passed to an instance of SQL Server?",
      answers: {
        a: "malicious",
        b: "redundant",
        c: "clean",
	d: "non malicious"
      },
      correctAnswer: "a"
    },
    {
      question: "Question 2. Point out the correct statement.",
      answers: {
        a: "Parameterized data cannot be manipulated by a skilled and determined attacker",
        b: "Procedure that constructs SQL statements should be reviewed for injection vulnerabilities",
        c: "The primary form of SQL injection consists of indirect insertion of code",
	d: "None of the mentioned"
      },
      correctAnswer: "b"
    },
    {
      question: "Question 3. Any user-controlled parameter that gets processed by the application includes vulnerabilities like ___________",
      answers: {
        a: "Host-related information",
        b: "Browser-related information",
        c: "Application parameters included as part of the body of a POST request",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 4. Point out the wrong statement.",
      answers: {
        a: "SQL injection vulnerabilities occur whenever input is used in the construction of an SQL query without being adequately constrained or sanitized",
        b: "SQL injection allows an attacker to access the SQL servers and execute SQL code under the privileges of the user used to connect to the database",
        c: "The use of PL-SQL opens the door to these vulnerabilities",
	d: "None of the mentioned"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 5. Which of the stored procedure is used to test the SQL injection attack?",
      answers: {
        a: "xp_write",
        b: "xp_regwrite",
        c: "xp_reg",
        d: "all of the mentioned"
      },
      correctAnswer: "b"
    },
    {
      question: "Question 6. If xp_cmdshell has been disabled with sp_dropextendedproc, we can simply inject the following code?",
      answers: {
        a: " sp_addextendedproc ‘xp_cmdshell’,’xp_log70.dll’",
        b: "sp_addproc ‘xp_cmdshell’,’xp_log70.dll’",
        c: "sp_addextendedproc ‘xp_cmdshell’,’log70.dll’",
        d: "none of the mentioned"
      },
      correctAnswer: "b"
    },
    {
      question: "Question 7.  Which of the following script is an example of Quick detection in the SQL injection attack?",
      answers: {
        a: "SELECT loginame FROM master..sysprocesses WHERE spid = @@SPID",
        b: "For integer inputs : convert(int,@@version)",
        c: "IF condition true-part ELSE false-part (S)",
        d: "SELECT header, txt FROM news UNION ALL SELECT name, pass FROM members"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 8. _______________ is time based SQL injection attack.",
      answers: {
        a: "Quick detection",
        b: "Initial Exploitation",
        c: "Blind SQL Injection",
        d: "Inline Comments"
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