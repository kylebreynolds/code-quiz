
// Variables //

var buttonEl = document.querySelector("#startQuiz");
console.log(buttonEl)

var timerEl = document.getElementById("countdown");

// Questions//




// Start Game Function //
 buttonEl.addEventListener("click", function(){
    // delete this alert once real function added //
  
 })




// Answer Question Function //

//timer function//
document.getElementById("startQuiz").addEventListener("click", function(){
   var timeleft = 60;

   var downloadTimer = setInterval(function function1(){
   document.getElementById("countdown").innerHTML = timeleft + 
   "&nbsp"+"seconds remaining";

   timeleft -= 1;
   if(timeleft <= 0){
       clearInterval(downloadTimer);
       document.getElementById("countdown").innerHTML = "Time is up!"
   }
   }, 1000);

   console.log(countdown);
});