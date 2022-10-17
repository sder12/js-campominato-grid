// 1. AL CLICK di button-play si crea div griglia - <div class="grid"> </div>

// prelevo btn
const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");
// console.log(btnPlay);
// console.log(mainDiv)

btnPlay.addEventListener("click", function () {
  //creo grid div
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");
  mainDiv.append(gridDiv);
  // console.log(gridDiv);
});

// 2. GENERO (while) 100 numeri random (senza duplicati) e li pusho in una array
// genero 100 numeri
const hundredNumbers = generateArrayRandomNumbers(100);
console.log(hundredNumbers);


// 3. CREO con ciclo for 100 div.square NB utilizzo this perchè devono essere cliccabili
// creo con createElment il div
// inserisco .square
// inserisco uno dei numeri della array
for(let i = 0; i < 100; i++){
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.innerHTML = hundredNumbers[i];
    console.log(squareDiv)
}

// 4. CREATI i div devono essere cliccabili
// aggiungo .blue all'elemento cliccato
// aggiungo msg in console con il numero della casella (.textContent)






//FUNCTION


//RANDOM NUMBERS GENERATOR W3school
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ARRAY WITH RANDOM NUMBERS
 * Description La funzione genera una array composta da numeri senza duplicati.
 * La lunghezza dell'array viene decisa nel parametro
 * @param {number} arrayLength n° di numeri nell'array
 * @returns {array}
 */
function generateArrayRandomNumbers(arrayLength) {
  const arrayNumbers = [];
  while (arrayNumbers.length < arrayLength) {
    const randomNumber = getRndInteger(1, arrayLength);
    if (!arrayNumbers.includes(randomNumber)) {
        arrayNumbers.push(randomNumber);
    }
  }
  return arrayNumbers;
}
