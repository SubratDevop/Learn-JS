let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");
const msg_container = document.querySelector(".msg-container");

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
}

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    console.log("You Win")
    msg.innerText = "You win";
    user_score.innerText = userScore;
    msg_container.style.backgroundColor = "green";
  } else {
    compScore ++ ;
    console.log("You Lose")
    msg.innerText = "You Lose";
    comp_score.innerText = compScore;

  }
}

const playGame = (userChoice) => {
  let compChoiice = computerChoice();

  console.log("User Choice", userChoice);
  console.log("Computer Choice", compChoiice);
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
    showWinner(userWin);
  }
}