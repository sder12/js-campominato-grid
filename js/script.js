const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");

btnPlay.addEventListener("click", function () {
  mainDiv.innerHTML = "";
  //Add grid
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");
  mainDiv.append(gridDiv);
  //Create array
  const hundredNumbers = generateArrayRandomNumbers(100);
  // Create and add square
  for (let i = 0; i < 100; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.classList.add("square-simple");
    squareDiv.innerHTML = hundredNumbers[i];
    // click add blue
    squareDiv.addEventListener("click", function () {
      this.classList.add("blue");
      const clickedNumber = this.textContent;
      console.log(clickedNumber);
    });
    gridDiv.append(squareDiv);
  }

 
  // Medium 9x9 --- add class square-medium
  const eightyoneNumbers = generateArrayRandomNumbers(81);
  console.log(eightyoneNumbers);
  //Hard 7x7 --- add class square-hard
  const fortynineNumbers = generateArrayRandomNumbers(49);
  console.log(fortynineNumbers);
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
