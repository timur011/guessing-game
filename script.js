var code = generateNum();
var attempts = 0;
var maxAttempts = 7;

function generateNum() {
    return String(Math.floor(100 + Math.random() * 900));
}

function checkGuess() {
    var message = document.getElementById("message");
    var guess = prompt("Enter your 3-digit guess:");

    if (guess.length !== 3 ) {
        statement.textContent = "Invalid input. Please enter a 3-digit number.";
        return;
    }

    attempts++;

    if (guess === code) {
        statement.textContent = "Congratulations! You've cracked the code: " + code;
    } else if (guess < code) {
        statement.textContent = "The code is higher.";
    } else {
        statement.textContent = "The code is lower.";
    }

    if (attempts >= maxAttempts) {
        statement.textContent = "You've run out of turns. The code was " + code + ".";
    }
}
