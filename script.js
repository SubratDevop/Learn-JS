let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;  // playerX , playerO
const winningPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row

    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column

    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Diagonal
];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            // box.classList.add(".o-color")
            box.style.color = "red";

        } else {
            box.innerText = "X";
            turnO = true;
            // box.classList.add(".x-color")
            box.style.color = "blanchedalmond";

        }
        box.disabled = true;

        chkWinner();   //* calling the method ecah button tap
    },)

})


function chkWinner() {
    for (let pattern of winningPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                boxes[pattern[0]].style.color="rgb(10, 241, 10)";
                boxes[pattern[1]].style.color="rgb(10, 241, 10)";
                boxes[pattern[2]].style.color="rgb(10, 241, 10)";
                console.dir(pos1Val);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congatulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const enabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove(".selected0");
        box.classList.remove(".selected1");
    })
}
const disabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;

    })
}

const resetGame = () => {

    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
}


//! Reset Button function
resetBtn.addEventListener("click", resetGame);

newGameBtn.addEventListener('click', resetGame);
