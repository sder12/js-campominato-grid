const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");

btnPlay.addEventListener("click", function () {
  mainDiv.innerHTML = "";
  //Add grid
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");
  mainDiv.append(gridDiv);

  // Create and add square
  for (let i = 1; i < 101; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.classList.add("square-simple");
    squareDiv.innerHTML = i;
    // click add blue
    squareDiv.addEventListener("click", clickedSquare);
    gridDiv.append(squareDiv);
  }

});

//FUNCTION-------------------------------------------

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


/**FUNZIONE VOID > non ha return: CLICK del singolo NUMERO
 * Quando elemento è cliccato aggiungo la classe del colore a quell'elemento
 * e poi lo visualizzo nella console
 */
function clickedSquare() {
  this.classList.add("blue");
  const clickedNumber = this.textContent;
  console.log(clickedNumber);
}
