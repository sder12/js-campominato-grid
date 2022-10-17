
// 1. AL CLICK di button-play si crea div griglia - <div class="grid"> </div>

// prelevo btn
const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");
// console.log(btnPlay);
// console.log(mainDiv)


btnPlay.addEventListener("click" , function(){
    //creo grid div 
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    mainDiv.append(gridDiv);
    // console.log(gridDiv);    
})

// 2. GENERO (while) 100 numeri random (senza duplicati) e li pusho in una array
// genero 100 numeri 
let i = 0;
while(i < 100){
    const numberRnd = getRndInteger(1, 100);
    console.log(numberRnd);
    i++;
}




// 3. CREO con ciclo for 100 div.square NB utilizzo this perchè devono essere cliccabili
        // creo con createElment il div
        // inserisco .square
        // inserisco uno dei numeri della array
// 4. CREATI i div devono essere cliccabili 
        // aggiungo .blue all'elemento cliccato
        // aggiungo msg in console con il numero della casella (.textContent)






//FUNCTION
//RANDOM NUMBERS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }