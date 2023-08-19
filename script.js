// Players name

let player1 = "Player1";
let player2 = "Player2";

// Function to edit EditNames()the name
function EditNames() {
    player1 = prompt("Enter Player1 Name:");
    player2 = prompt("Enter Player2 Name:");

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}
// Function to roll the dice
function rollTheDice(){
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src" , "./img/diceroll.gif");
    diceNum2.setAttribute("src" , "./img/diceroll.gif");

    let result = document.querySelector("h1");
    result.innerHTML="";

    setTimeout(() =>{
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', './img/dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src', './img/dice' + randomNumber2 + '.png');

        if(randomNumber1 == randomNumber2)
        {
            result.innerHTML = " Draw!";
         }
        if(randomNumber1 > randomNumber2)
        {
            result.innerHTML = `${player1} Wins!`;
        }
        if(randomNumber1 < randomNumber2)
        {
            result.innerHTML = `${player2} Wins!`;
        }
        

    }, 2500)

}