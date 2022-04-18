var buttonEl = document.querySelector("#startQuiz");
console.log(buttonEl)

var timerEl = document.getElementById("countdown");


// Start Game Function - starts timer and begins questions //

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

//hide intro, show questions//
document.getElementById("startQuiz")
        .addEventListener("click", function() {
  document.getElementById("beforeStart").hidden = true;
  document.getElementById("startQuiz").hidden = true;
  document.getElementById("afterStart").hidden = false;
}, false);



// questions //




// scoring //




// store high scores //

