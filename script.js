let userScore = 0;
let compScore = 1;

const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
  console.log(choice.id);

  choice.addEventListener('click',()=>{
    console.log("choice was clicked");
  })
}) 