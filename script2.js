//javascript dom
//whatb is dom (document object model)

var username = prompt("whar is your name?");

//selectors (getElementById, getElementByClassName, getElementByTagName, qeurySelector, querySelectorAll)

var header = document.querySelector(".header");

header.innerText = `Hello ${username}, welcome to javascript website`;
var btnReset = document.querySelector(".btn-solid");

btnReset.addEventListener("click",function (){
    alert("You have clicked me");
})

var redBtn = document.querySelector(".red");
var centreCard = document.querySelector(".centered-card");

redBtn.addEventListener("click",function(){
    centreCard.style.backgroundColor = "rgb(184, 16, 16)"
})

var greenBtn = document.querySelector(".green");
var centreCard = document.querySelector(".centered-card");

greenBtn.addEventListener("click",function(){
    centreCard.style.backgroundColor = "rgb(16, 184, 16)"
})

var blueBtn = document.querySelector(".blue");
var centreCard = document.querySelector(".centered-card");
blueBtn.addEventListener("click",function(){
    centreCard.style.backgroundColor = "rgb(16, 16, 184)"
})