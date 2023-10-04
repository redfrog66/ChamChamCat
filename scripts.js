// változók 

const directions = ["left", "right", "up"];

let playerScore = 0;
let catScore = 0;
const catWon = false;

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

function didTheCatWin(catWon) {
    switch(catWon) {
        case true:
            catImage.src = "assets/cat/wincat.jpg";
            break;
        case false:            
            catImage.src = "assets/cat/sadcat.jpg";
            break;  
        default:        
            catImage.src = "assets/cat/front.jpg";
    }
}   

async function playRound(playerDirection, catDirection) {
    if (playerDirection === catDirection) {
        updateScore("player-score");
        await delay(1000);
        didTheCatWin(false);

    } else {
        updateScore("cat-score");
        await delay(1000);
        didTheCatWin(true);
    }

}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function playGame(playerDirection) {
    setInitialImage();
    const catDirection = generateRandomDirection();
    updateImage(catDirection);
    playRound(playerDirection, catDirection);
}


