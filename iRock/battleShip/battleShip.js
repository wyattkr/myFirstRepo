var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (_enter a Number From 0-6_):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number, Only numbers from  0 to 6");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("you hiT MY SHIP")
            if (hits == 3) {
                isSunk = true;
                alert(" You Sank My BattleShip!");
            }

        }


    }


    var stats = "you took" + guesses + "guesses to sink the Battleship," +
        " which means your shooting accuracy was" + (3 / guesses);
    alert(stats);
}