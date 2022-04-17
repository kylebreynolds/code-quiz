
// Variables //

var buttonEl = document.querySelector("#startQuiz");
console.log(buttonEl)

var timerEl = document.getElementById("countdown");

// Questions//




// Start Game Function //
 buttonEl.addEventListener("click", function(){
    // delete this alert once real function added //
   alert("button clicked");
 })


// Start Timer Function //
function countdown() {
   var timeLeft = 60;

var timeInterval = setInterval(function () {
   // As long as the `timeLeft` is greater than 1
   if (timeLeft > 1) {
     // set the `textContent` of `timerEl` to shoew the remaining seconds.
     timerEl.textContent = timeLeft + ' seconds remaining';
     // decrement `timeLeft` by 1
     timeLeft--;
   } else if (timeLeft === 1) {
     //when timeLeft is equal to 1, rename to second instead of seconds
     timerEl.textContent = timeLeft + ' second remaining';
     timeLeft--;
   } else {
     // once timeLeft gets to 0, set timerEl to an empty string
     timerEl.textContent = '';
     // use `clearInterval()` to stop the timer
     clearInterval(timeInterval);
     //call the `displayMessage()` function
     displayMessage();
   }
 }, 1000);
}


countdown();
// Answer Question Function //