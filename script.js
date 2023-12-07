const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const msg3 = document.querySelector("#msg3");

var result = Math.floor(Math.random() * 10) - 1;
console.log(result);
var no_of_guesses = 0;
var guesses_num = [];

function play() {
    var user_guess = document.querySelector("#guess").value;
    if (user_guess < 1 || user_guess > 10) {
        alert("Enter number between 1 to 10");
    } else {
        guesses_num.push(user_guess);
        no_of_guesses = no_of_guesses + 1;
        if (user_guess < result) {
            msg1.textContent = "Your guess is low";
            msg1.textContent = "Number of guesses" + no_of_guesses;
            msg3.textContent = "Guesses numbers are " + guesses_num;
        }
        else if (user_guess > result) {
            msg1.textContent = "Your guess is very high";
            msg1.textContent = "Number of guesses" + no_of_guesses;
            msg3.textContent = "Guesses numbers are " + guesses_num;
        }
        else if (user_guess == result) {
            msg1.textContent = "Your Won!!";
            msg1.textContent = "The Number is " + result;
            msg3.textContent = "Guesses numbers are " + guesses_num + "guesses";
        }
    }
}