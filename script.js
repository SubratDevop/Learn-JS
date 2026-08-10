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


boxes.forEach((box, index) => {

    box.addEventListener('click', () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
            resetBtn.s
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        chkWinner();   //* calling the method ecah button tap
    },)

})


function chkWinner() {
    for (let pattern of winningPatterns) {
        //  console.log(boxes[pattern[0]]);
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
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
resetBtn.addEventListener("click",resetGame);

newGameBtn.addEventListener('click', resetGame);
