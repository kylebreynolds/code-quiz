
// Variables //

var buttonEl = document.querySelector("#startQuiz");
console.log(buttonEl)

var timerEl = document.getElementById("countdown");

// Questions//




// Start Game Function - starts timer and begins questions //
 buttonEl.addEventListener("click", function(){
    // delete this alert once real function added //
  
 })
//timer function//
document.getElementById("startQuiz").addEventListener("click", function(){
   var timeleft = 60;

   var downloadTimer = setInterval(function function1(){
   document.getElementById("countdown").innerHTML = timeleft + 
   "&nbsp"+"seconds remaining";

   timeleft -= 1;
   if(timeleft <= 0){
       clearInterval(downloadTimer);
       document.getElementById("countdown").innerHTML = "GAME OVER!"
   }
   }, 1000);

   console.log(countdown);
});

// Hide game intro//


//test//
document.getElementById("startQuiz")
        .addEventListener("click", function() {
  document.getElementById("beforeStart").hidden = true;
  document.getElementById("startQuiz").hidden = true;
  document.getElementById("afterStart").hidden = false;
}, false);




//test hide show//
