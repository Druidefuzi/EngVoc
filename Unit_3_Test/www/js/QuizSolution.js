function getSolution(){
    
    function h3(text, target) { var h3 = document.createElement('h3'); h3.appendChild(document.createTextNode(text)); target.appendChild(h3); }
    
    
    let ergebnis=localStorage.getItem("ergebnis");
    let ergebnisOutput=document.getElementById("ergebnis") ;
    console.log(ergebnis);
    let punkte=document.getElementById("punkte");
    
    ergebnisOutput.innerHTML=ergebnis;
    
  const backToStart=document.getElementById("answers");
   
   
   
   h3(localStorage.getItem("points"), punkte);
    
}

getSolution();
function backToStart(){
    
    window.location.replace('index.html');
    
    
}
