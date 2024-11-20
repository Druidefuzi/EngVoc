function backToStart() {
  window.location.replace('QuizStart.html');
}

function Quiz() {
  let points = 0;
  let chosenAnswerList = [];
  let solutionAnswerList = [];
  let answeredQuestion = [];
  let rightOrWrong = [];
  let showAnswer= localStorage.getItem("showAnswer");
  let currentChosen;
  let wrongQuestions = []; // Hier werden die falsch beantworteten Fragen gespeichert

  const questionOutput = document.getElementById("question");
  const answerButtons = [
      document.getElementById("answer1"),
      document.getElementById("answer2"),
      document.getElementById("answer3"),
      document.getElementById("answer4"),
  ];

  function regainData(dataString) {
      if (!dataString || dataString === "null") return [];
      return JSON.parse(dataString);
  }

  // Daten abrufen
  const questionObjects = regainData(localStorage.getItem("quizData"));

  // Überprüfen, ob genügend Daten für das Quiz vorhanden sind
  if (!questionObjects || questionObjects.length === 0) {
      alert("Es sind keine Daten für den Quiz-Modus vorhanden.");
      window.location.replace('QuizStart.html');
      return;
  }

  function choose(questionNumber) {
      const questionObj = questionObjects[questionNumber];

      // Setze die Frage
      questionOutput.textContent = questionObj.Frage;

      // Setze die Antwortmöglichkeiten in die Buttons
      const answers = [
          questionObj.Antwort1,
          questionObj.Antwort2,
          questionObj.Antwort3,
          questionObj.Antwort4
      ];

      answers.forEach((answer, index) => {
          if (answerButtons[index]) {
              answerButtons[index].textContent = answer;
              answerButtons[index].style.visibility = "visible"; // Zeige aktive Buttons
          }
      });

      // Verstecke nicht verwendete Buttons (falls weniger als 4 Antworten)
      for (let i = answers.length; i < answerButtons.length; i++) {
          answerButtons[i].style.visibility = "hidden";
      }
  }

  function chooseQuestion() {
      if (answeredQuestion.length === questionObjects.length) {
          let ergebnis = "";
          for (let i = 0; i < questionObjects.length; i++) {
              ergebnis += `
                  ${i + 1}. <h2>${questionObjects[answeredQuestion[i]].Frage}</h2>
                  <h5>Beantwortet mit: ${chosenAnswerList[i]}</h5>
                  <h5>Richtige Antwort: ${solutionAnswerList[i]}</h5>
                  <h3>${rightOrWrong[i]}!</h3><br>`;
          }

          localStorage.setItem("ergebnis", ergebnis);
          localStorage.setItem("points", points);
          localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions)); // Falsche Antworten speichern
          window.location.replace('QuizSolution.html');
          return;
      }

      let chosen;
      do {
          chosen = Math.floor(Math.random() * questionObjects.length);
      } while (answeredQuestion.includes(chosen));

      currentChosen = chosen;
      answeredQuestion.push(currentChosen);
      choose(chosen);
  }

  function handleAnswerClick(chosenIndex) {
      const questionObj = questionObjects[currentChosen];
      const correctAnswer = questionObj.richtigeAntwort;
      const chosenAnswer = answerButtons[chosenIndex].textContent;

      if (chosenAnswer === correctAnswer) {
          rightOrWrong.push("Richtig");
          if(showAnswer=="Ja"){alert("Richtig! Antwort: " + correctAnswer);}
          
          points += 1;
      } else {
          rightOrWrong.push("Falsch");
          if(showAnswer=="Ja"){alert("Falsch! Richtige Antwort: " + correctAnswer);}
          wrongQuestions.push(questionObj); 
      }

      chosenAnswerList.push(chosenAnswer);
      solutionAnswerList.push(correctAnswer);

      chooseQuestion();
  }

  answerButtons.forEach((button, index) => {
      button.onclick = () => handleAnswerClick(index);
  });

  chooseQuestion();
}
