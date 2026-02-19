var colorCode = document.querySelector(".color-code");
var cards = document.querySelectorAll(".card");
var message = document.querySelector(".message");
var newColor = document.querySelector(".new-color");
var scoreDisplay = document.querySelector(".score");
var score = 0;

scoreDisplay.textContent = score;
var colorsArray = [];





//rgb(0-255, 0-255, 0-255);
//generated 3 colors
for (var i = 0; i < 6; i++) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const colorGenerated = `rgb( ${r}, ${g}, ${b})`;

  colorsArray.push(colorGenerated);
}


console.log(colorsArray);

//picked a random correct color from the array

const correctColorIndex = Math.floor(Math.random() * 6);
const correctColor = colorsArray[correctColorIndex];

console.log(correctColor);

colorCode.textContent = correctColor;

// changing the color of each card to the colors in the array
cards.forEach((card, index) => {

    card.style.background = colorsArray[index];
 
    card.addEventListener("click", function () {
        // alert("clicked"); 
          if (correctColor === colorsArray[index]) {
              message.textContent = "You are correct✅🚀✨";
              score++;
              scoreDisplay.textContent = score;
        } else {
              message.textContent = "You are wrong😭😢";
              score--;
              scoreDisplay.textContent = score;
              if (score < 0) {
                  scoreDisplay.style.color = "red";
              } else {
                  scoreDisplay.style.color = "white";
              }
        }
    });
})



newColor.addEventListener("click", function () {
    //empty existing array
    colorsArray = []
    
    message.textContent = "";
    //rgb(0-255, 0-255, 0-255);
//generated 3 colors
for (var i = 0; i < 6; i++) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const colorGenerated = `rgb( ${r}, ${g}, ${b})`;

  colorsArray.push(colorGenerated);
}


console.log(colorsArray);

//picked a random correct color from the array

const correctColorIndex = Math.floor(Math.random() * 6);
const correctColor = colorsArray[correctColorIndex];

console.log(correctColor);

colorCode.textContent = correctColor;

// changing the color of each card to the colors in the array
cards.forEach((card, index) => {

    card.style.background = colorsArray[index];
 
    card.addEventListener("click", function () {
        // alert("clicked"); 
          if (correctColor === colorsArray[index]) {
              message.textContent = "You are correct✅🚀✨";
              score++;
              scoreDisplay.textContent = score;
        } else {
            message.textContent = "You are wrong😭😢"
            score--;
            scoreDisplay.textContent = score;

              if (score < 0) {
                  scoreDisplay.style.color = "red";
              } else {
                  scoreDisplay.style.color = "white";
              }
        }
    });
})
    
})