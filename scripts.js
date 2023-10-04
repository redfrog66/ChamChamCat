// változók 

const directions = ["left", "right", "up"];

const leftButton = document.getElementById("left");
const upButton = document.getElementById("up");
const rightButton = document.getElementById("right");
const catImage = document.getElementById("catImage");

let playerScore = 0;
let catScore = 0;

// függvények
// kezdő cicakép beállítása
function setInitialImage() {
    catImage.src = "assets/cat/front.jpg";
}

// random irány generálása, ez lesz a számítógép által választott irány
function generateRandomDirection() {
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}

// kép frissítése a megfelelő irány szerint
function updateImage(direction) {
    switch(direction) {
        case "left":
            catImage.src = "assets/cat/left.png";
            break;
        case "up":
            catImage.src = "assets/cat/up.png";
            break; 
        case "right":
            catImage.src = "assets/cat/right.png";
            break;
        default:
            catImage.src = "assets/cat/front.png";
    }
}

// pontszám frissítése
function updateScore(id) {
    if (id === "player-score") {
        playerScore++;
        document.getElementById("player-score").innerHTML = playerScore;
    } else {
        catScore++;
        document.getElementById("cat-score").innerHTML = catScore;
    }
   
}

function playRound(playerDirection, catDirection) {
    if (playerDirection === catDirection) {
        updateScore("player-score");
    } else {
        updateScore("cat-score");
    }
}

function playGame(playerDirection) {
    setInitialImage();
    const catDirection = generateRandomDirection();
    updateImage(catDirection);
    playRound(playerDirection, catDirection);
}

// események
window.addEventListener("load", setInitialImage);

leftButton.addEventListener("click", () => {
    playGame("left");
});

upButton.addEventListener("click", () => {
    playGame("up");
});

rightButton.addEventListener("click", () => {
    playGame("right");
});
