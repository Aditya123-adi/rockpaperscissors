const choice = ["rock", "paper", "scissors"];
const playdiss = document.getElementById("playdiss");
const comp = document.getElementById("comp");
const result = document.getElementById("result");
const playscore = document.getElementById("playdis");
const compscore = document.getElementById("comppdis");
let playscor = 0;
let compscor = 0;


function playgame(choicee) {
  const compchoice = choice[Math.floor(Math.random() * 3)];
  let resultt = "";

  if (choicee === compchoice) {
    resultt = "It's a tie!";
  } else {
    switch (choicee) {
      case "rock":
        resultt = compchoice === "scissors" ? "You win!" : "You lose!";
        break;
      case "paper":
        resultt = compchoice === "rock" ? "You win!" : "You lose!";
        break;
      case "scissors":
        resultt = compchoice === "paper" ? "You win!" : "You lose!";
        break;
    }
  }
  playdiss.textContent = `Player: ${choicee}`;
  comp.textContent = `Computer: ${compchoice}`;
  result.textContent = resultt;



  result.classList.remove("green","red");


switch(resultt){
    case "You win!":
        result.classList.add("green");
        playscor++;
        playscore.textContent = playscor;
        break;

    case "You lose!":
        result.classList.add("red");
        compscor++;
        compscore.textContent = compscor;
        break;

    }

}
