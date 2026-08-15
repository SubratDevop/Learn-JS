let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");
const msg_container = document.querySelector(".msg-container");
let userSelect = document.querySelector("#youSelect");
let compSelect = document.querySelector("#compSelect");

const options = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);

  })
})

//! Generate computer choice

const computerChoice = () => {
  const randId = Math.floor(Math.random() * 3);
  return options[randId];
}

const drawGame = () => {
  console.log("It's a Draw");
  msg.innerText = "It is a Draw"
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";

}

const showWinner = (userWin,yourChoice,compChoice) => {
  if (userWin) {
    userScore++;
    console.log("You Win")
    msg.innerText = `You win. Your ${yourChoice} beats ${compChoice} `;
    user_score.innerText = userScore;
    msg.style.color = "white";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    console.log("You Lose")
    msg.innerText = `You Lost. ${compChoice} bets your ${yourChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    comp_score.innerText = compScore;

  }
}

const playGame = (userChoice) => {
  let compChoiice = computerChoice();
  userSelect.innerText = userChoice;
  compSelect.innerText = compChoiice;
  if (userChoice === compChoiice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoiice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoiice === "scissors" ? false : true;
    } else {
      userWin = compChoiice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice,compChoiice);
  }
}