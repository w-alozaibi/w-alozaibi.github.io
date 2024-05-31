/// all of this is just communications between js and html to build the ground up for the following codes to work. // 
const currentTotalElement = document.getElementById("currentTotal");

const higherButton = document.getElementById("higherButton");

const lowerButton = document.getElementById("lowerButton");

const messageElement = document.getElementById("message");

const dice1Element = document.getElementById("dice1");

const dice2Element = document.getElementById("dice2");

const computerCreditCountElement = document.getElementById("computerCreditCount");

const playerCreditCountElement = document.getElementById("playerCreditCount");

const startButton = document.getElementById("startButton");

 //this code indicates the round rules.//

let dice1Value;

let dice2Value;

let computerCredits = 0;

let playerCredits = 0;

let currentPlayer = "computer";

let gameInProgress = false;

let roundCount = 0;

const maxRounds = 10;

if (maxRounds == 0) {

    alert('Game ended')

}

 

//this is a core code responsible of given random numbers of a rolled (just like a real dice does).//
function rollDice() {

    return Math.floor(Math.random() * 6) + 1;

}

 

function updateTotalDisplay() {

    const total = dice1Value + dice2Value;

    currentTotalElement.textContent = total;

    return total;

}

 
//this code helps communicate with the html code.//
function showNotification(message) {

    const notificationPopup = document.getElementById("notificationPopup");

    const notificationText = document.getElementById("notificationText");

    const closePopupButton = document.getElementById("closePopupButton");

 

    notificationText.textContent = message;

 

    notificationPopup.style.opacity = 1;

    notificationPopup.classList.remove("hidden");

 

    closePopupButton.addEventListener("click", function () {

        notificationPopup.style.opacity = 0;

        setTimeout(function () {

            notificationPopup.classList.add("hidden");

        }, 300);

    });

}

//checks if the game has actually started and saves both players credits till the very end of the game.//
startButton.addEventListener("click", function () {

    if (!gameInProgress) {

        gameInProgress = true;

        computerCredits = 0;

        playerCredits = 0;

        computerCreditCountElement.textContent = computerCredits;

        playerCreditCountElement.textContent = playerCredits;

        messageElement.textContent = "Raad of het volgende totaal hoger of lager is:";

        startButton.disabled = true;

        higherButton.disabled = false;

        lowerButton.disabled = false;

        dice1Value = rollDice();

        dice2Value = rollDice();

 

        dice1Element.src = `img/dice${dice1Value}.png`;

        dice2Element.src = `img/dice${dice2Value}.png`;

 

        const total = updateTotalDisplay();

        currentPlayer = "computer";

        computerPlay(total);

    }

});


//informs the winner when the round ends.//
function handleWin(player) {

    messageElement.textContent = `Gewonnen! Het nieuwe totaal is correct.`;

    currentPlayer = "computer";

   

    if (player === "player") {

        playerCredits++;

        playerCreditCountElement.textContent = playerCredits;

        showNotification("Gewonnen! Speler 1 heeft 1 credit gewonnen.");

    } else {

        computerCredits++;

        computerCreditCountElement.textContent = computerCredits;

        showNotification("Gewonnen! De computer heeft 1 credit gewonnen.");

    }

   // these are basic logical rules give for the game to be able to function properly.//

    roundCount++;

   

    if (roundCount === maxRounds) {

        gameInProgress = false;

        startButton.disabled = false;

        setTimeout(function () {

            alert("Spel voorbij! Druk op de knop 'Start' om opnieuw te spelen.");

        }, );

    } else {

        setTimeout(function () {

            startNewRound();

        }, 3000);

    }

}

 
///starts a new round.//
function startNewRound() {

    dice1Value = rollDice();

    dice2Value = rollDice();

    dice1Element.src = `img/dice${dice1Value}.png`;

    dice2Element.src = `img/dice${dice2Value}.png`;

    const total = updateTotalDisplay();

    messageElement.textContent = "Raad of het volgende totaal hoger of lager is:";

    currentPlayer = "computer";

    computerPlay(total);

}

 
//check's if the actual player or computer player has clicked the button in the given time/turn 
higherButton.addEventListener("click", function () {

    if (currentPlayer === "player") {

        const newDice1Value = rollDice();

        const newDice2Value = rollDice();

        dice1Element.src = `img/dice${newDice1Value}.png`;

        dice2Element.src = `img/dice${newDice2Value}.png`;

        const newTotal = newDice1Value + newDice2Value;

        if (newTotal > dice1Value + dice2Value) {

            handleWin("player");

        } else {

            messageElement.textContent = "Helaas, het nieuwe totaal is lager.";

            currentPlayer = "computer";

            computerPlay(newTotal);

        }

    }

});


 // updates the game state/given outcome after each roll.
function rollAndUpdate(newTotal) {
    if (newTotal < dice1Value + dice2Value) {
        handleWin("player");
    } else {
        messageElement.textContent = "Helaas, het nieuwe totaal is hoger.";
        currentPlayer = "computer";
        computerPlay(newTotal);
    }
}
////This function rolls dice by generating random numbers that are lower than the current given number.//
lowerButton.addEventListener("click", function () {
    if (currentPlayer === "player") {
        const newDice1Value = rollDice();
        const newDice2Value = rollDice();

        dice1Element.src = `img/dice${newDice1Value}.png`;
        dice2Element.src = `img/dice${newDice2Value}.png`;

        const newTotal = newDice1Value + newDice2Value;
        rollAndUpdate(newTotal);
    }
});
////This function rolls dice by generating random numbers.///
function computerPlay(total) {

    setTimeout(function () {

        if (currentPlayer === "computer") {

            const newDice1Value = rollDice();

            const newDice2Value = rollDice();

            dice1Element.src = `img/dice${newDice1Value}.png`;

            dice2Element.src = `img/dice${newDice2Value}.png`;

            const newTotal = newDice1Value + newDice2Value;

            if (newTotal > total) {

                messageElement.textContent = "De computer speelt... Het nieuwe totaal is hoger.";

                dice1Value = newDice1Value;

                dice2Value = newDice2Value;

                const updatedTotal = updateTotalDisplay();

                handleWin("computer");

            } else {

                messageElement.textContent = "De speler speelt... Het nieuwe totaal is lager.";

                currentPlayer = "player";

            }

        }

    }, )

}

 

 