// prelevo btn e main
const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");

//1. Al Click di btnPlay si genera griglia e squares
btnPlay.addEventListener("click", function () {
  //creo grid div, append al main
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");
  mainDiv.append(gridDiv);

  // 2. GENERO (while) 100 numeri random (senza duplicati) e li pusho in una array
  const hundredNumbers = generateArrayRandomNumbers(100);

  // 3. CREO con ciclo for 100 div.square 
  for (let i = 0; i < 100; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.innerHTML = hundredNumbers[i];   

    // 4. CREO DIV cliccabili con this.
    squareDiv.addEventListener("click", function () {
      this.classList.add("blue");
      const clickedNumber = this.textContent;
      console.log(clickedNumber)
    });   

    gridDiv.append(squareDiv);
  }
});




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
