var btnCancel = document.querySelector('.cancel');
var displayCard = document.querySelector('.display-card');
var btnToggler = document.querySelector('.btn-toggler');



btnToggler.style.display = 'none';

btnToggler.addEventListener('click',function(){
    displayCard.style.display = 'flex';
    btnToggler.style.display = 'none';
})

btnCancel.addEventListener("click", function(){
    displayCard.style.display = "none";
    btnToggler.style.display = "block";
})

// counter

var displayValue = document.querySelector(".display-value");
var count = 0;
var btnIncrease = document.querySelector(".btn-increment");
var btnDecrease = document.querySelector(".btn-decrement");

displayValue.textContent = count;

btnIncrease.addEventListener("click", function () { 
    if (count < 10) {
         count++;
    }
    if (count === 10) {
        displayValue.style.color = "green";
    } else {
        displayValue.style.color = "white";
    }
   
    displayValue.textContent = count;
})
btnDecrease.addEventListener("click", function () {
    if (count > 0) {
        count--;
    } else {
        count = 0;
    }

    if (count === 0) {
        displayValue.style.color = "red";
    } else {
        displayValue.style.color = "white";
    }
   
    displayValue.textContent = count;
})


//form validation
var form = document.querySelector(".cpismform");
var fname = document.querySelector(".fname");
var fnameerrormsg = document.querySelector(".fname-error");
var lname = document.querySelector(".lname");
var lnameerrormsg = document.querySelector(".lname-error");
var email = document.querySelector(".email");
var emailerrormsg = document.querySelector(".email-error");
var password = document.querySelector(".password");
var passworderrormsg = document.querySelector(".password-error");
var program = document.querySelector(".program");
var programerrormsg = document.querySelector(".program-error");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    fnameerrormsg.textContent = "";
    lnameerrormsg.textContent = "";
    emailerrormsg.textContent = "";
    passworderrormsg.textContent = "";
    programerrormsg.textContent = "";

    if (fname.value === "") {
        fnameerrormsg.textContent = "First name is required";
    }
    if (lname.value === "") {
        lnameerrormsg.textContent = "Last name is required";
    }
    if (email.value === "") {
        emailerrormsg.textContent = "Email is required";
    }
    if (password.value === "") {
        passworderrormsg.textContent = "Password is required";
    }
    if (password.value.length < 6) {
         passworderrormsg.textContent = "Password is not up to 6 characters";
    }
    
     const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

     if (passwordRegex.test(password.value)) {
     console.log("Password is valid and strong.");

     } else {
            passworderrormsg.textContent = "Password should be 6-15 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    
  }

    if (program.value === "") {
        programerrormsg.textContent = "Program is required";
    }

    if( fname.value !== "" && lname.value !== "" && email.value !== "" && password.value !== "" && password.value.length >= 6 && program.value !== ""){
        alert("Form submitted successfully");
        fname.value = "";
        lname.value = "";
        email.value = "";
        password.value = "";
        program.value = "";

        window.location.href = "index.html";
    }
    
});

//setTimeout and setInterval
 setTimeout(function () {

     alert("Two seconds as elapsed");
    
 }, 2000);




 setInterval(
     function () {
         console.log("new message log");
     }, 5000
 )
var timeCount = document.querySelector(".time-count");

var totalTimeLeftInSec = 7200;


var userTimeSelected = document.querySelector(".userTime");

var timeForm = document.querySelector(".timeForm");

timeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(userTimeSelected.value);
    const parts = userTimeSelected.value.split(':');
    const hours = parseInt(parts[0], 10) || 0;
    const minutes = parseInt(parts[1], 10) || 0;
    const seconds = parseInt(parts[2], 10) || 0; 

    totalTimeLeftInSec = (hours * 3600) + (minutes * 60) + seconds;
     hr = Math.floor(totalTimeLeftInSec / 3600);
        min = Math.floor(totalTimeLeftInSec % 3600 / 60);
        sec = (totalTimeLeftInSec % 3600) % 60;

        hrDisplay.textContent = hr;
        minDisplay.textContent = min;
        secDisplay.textContent = sec;
});



var min =0;
var hr=0;
var sec=0;

var minDisplay = document.querySelector(".min-count");
var hrDisplay = document.querySelector(".hr-count");
var secDisplay = document.querySelector(".sec-count");

var btnStart = document.querySelector(".countdown-btn");

btnStart.addEventListener("click", function () {
    setInterval(function () {

        if (totalTimeLeftInSec === 0) {
            return;
        }

        hr = Math.floor(totalTimeLeftInSec / 3600);
        min = Math.floor(totalTimeLeftInSec % 3600 / 60);
        sec = (totalTimeLeftInSec % 3600) % 60;

        hrDisplay.textContent = hr;
        minDisplay.textContent = min;
        secDisplay.textContent = sec;


        totalTimeLeftInSec--;

    }, 1000);

})

var btnReset = document.querySelector(".reset-countdown-btn");

btnReset.addEventListener("click", function () {
    totalTimeLeftInSec = 0;
     min =0;
 hr=0;
    sec = 0;
    hrDisplay.textContent = hr;
        minDisplay.textContent = min;
    secDisplay.textContent = sec;
    
 
})