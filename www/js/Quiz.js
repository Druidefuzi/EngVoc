function backToStart(){
window.location.replace('QuizStart.html');
}

function Quiz() {
  let answers = [["", "", "", ""]];
  
  let points=0;
  let chosenAnswerList=[];
  let solutionAnswerList=[];
  let answeredQuestion = [];
  let rightOrWrong=[];
  let questionOutput = document.getElementById("question");

  const answerButtons = document.getElementsByName("answer");

//entfernt ausrufezeichen und wandelt String in Array um 
 function regainQuestionData(questionDataString){
  let questionDataSplit = questionDataString.split("!");
  questionDataSplit.pop();
  
  return questionDataSplit;} 
  
   function regainSolutionData(solutionDataString){
  let solutionDataSplit = solutionDataString.split("!");
  solutionDataSplit.pop();
  
  return solutionDataSplit;} 
  
  // entfernt Ausrufezeichen und wandelt String in array um welches arrays mit jeweils 4 antworten enthält
 function regainAnswerData(answerDataString) {
  let answerDataSplit = answerDataString.split("!");
  let answerDataSplitArray = [];

  

  return answerDataSplit;
}
//um kommas nach regainAnswerData wiederherzustellen nachdem sie zu%% umgewandelt worden sind. 
function replaceLetterAnswer(target, letter, replacement){
for (array of target) {
  for (let i = 3; i >= 0; i--) {
    array[i] = array[i].replace(letter, replacement);
  }
}
} 



 let answerGroup=regainAnswerData(localStorage.getItem("transferAnswer"));
 
 //ersetzt %% wieder mit komma
 //replaceLetterAnswer(answerGroup,/\%%/g,",");
 //console.log(answerGroup);
 let questions=regainQuestionData(localStorage.getItem("transferQuestion"));
 
 
 let solutions=regainSolutionData(localStorage.getItem("transferSolution"));
 
 if (!questions || !solutions || !answerGroup) { console.error("Fehler beim Laden der Quiz-Daten"); return; }
 
 console.log("Lösungen: ");
 console.log(solutions);
 console.log("Vokabeln(Abfrage): ");
 console.log(questions);

  


  function choose(questionNumber) {
  if (!questions || !Array.isArray(questions) || questions.length === 0) {
  console.error("Fehler: Ungültige Fragen-Daten");
  return;
}

    questionOutput.textContent = questions[questionNumber];
    for (let i = 0; i < answerButtons.length; i++) {
    if (!answerGroup || !Array.isArray(answerGroup) || answerGroup.length === 0) {
  console.error("Fehler: Ungültige Antwort-Daten");
  return;
}

      answerButtons[i].textContent = "Bestätigen";
    }
  }

  
  
  
let finalQuestions="";
  function chooseQuestion() {
    if (answeredQuestion.length === questions.length) {
 
 let ergebnis="";
 for(let i=0;i<questions.length;i++)
 {ergebnis+=`${i+1}.<h2>${questions[answeredQuestion[i]]}</h2><h5>beantwortet mit:  ${chosenAnswerList[i]}</h5><h5>Richtige Antwort: ${solutionAnswerList[i]}</h5><h3>${rightOrWrong[i]}! </h3><br>`;
 }
 
 console.log(ergebnis);
 points+=` von ${questions.length}`;
 localStorage.setItem("ergebnis",ergebnis);
 localStorage.setItem("points",points);    window.location.replace('QuizSolution.html');
      return;
    }

    let chosen;
    do {
      chosen = Math.floor(Math.random() * questions.length);
    } while (answeredQuestion.includes(chosen));

    currentChosen = chosen;
    answeredQuestion.push(currentChosen);
    
    choose(chosen);
  }

  chooseQuestion();

var showAnswer=regainAnswerData(localStorage.getItem("showAnswer"));
var wrongQuestion=[];
  var wrongAnswer=[];
  var wrongSolution=[];
function isFuzzyEqual(string1, string2, tolerance) {
    const minLen = Math.min(string1.length, string2.length);
    const maxLength = Math.max(string1.length, string2.length);
    let errors = 0;

    for (let i = 0; i < minLen; i++) {
        if (string1[i] !== string2[i]) {
            errors++;
            if (errors > tolerance) {
                return false;
            }
        }
    }

    // Fehlertoleranz
    if (maxLength - minLen > tolerance) {
        return false;
    }

    return true;
}




function saveArrayLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}
  function handleAnswerClick(chosenAnswer) {
  let writtenAnswerValue=document.getElementById("writtenAnswer").value;
  let writtenAnswerInput = document.getElementById("writtenAnswer");
  let tolerance = localStorage.getItem("tolerance");
  writtenAnswer=writtenAnswerValue.toLowerCase();
    if (isFuzzyEqual(solutions[currentChosen],writtenAnswer, tolerance))  {
      
      rightOrWrong.push("Richtig");
      
      if(showAnswer!="Nein"){
      alert("Richtig! Antwort: "+solutions[currentChosen]);}

      //writtenAnswerInput.focus();

      chosenAnswerList.push(writtenAnswer);        solutionAnswerList.push(solutions[currentChosen]);
      points+=1;
      writtenAnswerInput.value = "";
    } else {
      
      rightOrWrong.push("Falsch");
      if(showAnswer!="Nein"){
       alert("Falsch! Antwort: "+solutions[currentChosen]);
       //writtenAnswerInput.focus();
}
      chosenAnswerList.push(writtenAnswer);        solutionAnswerList.push(solutions[currentChosen]);
      writtenAnswerInput.value = "";
      wrongAnswer.push("");
     saveArrayLocalStorage("wrongAnswer", wrongAnswer); wrongQuestion.push(questions[currentChosen]);
     saveArrayLocalStorage("wrongQuestion", wrongQuestion); wrongSolution.push(solutions[currentChosen]);
     saveArrayLocalStorage("wrongSolution", wrongSolution);
    }
    chooseQuestion();
  }

  answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let chosenAnswer = button.textContent;
      handleAnswerClick(chosenAnswer);
    });
  });
  
  
  
}







