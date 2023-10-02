const directions = ["left", "right", "up"];

const leftButton = document.getElementById("left");
const upButton = document.getElementById("up");
const rightButton = document.getElementById("right");
const catImage = document.getElementById("catImage");

function generateRandomDirection() {
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}

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

leftButton.addEventListener("click", () => {
    const direction = generateRandomDirection();
    updateImage(direction);
});

upButton.addEventListener("click", () => {
    const direction = generateRandomDirection();
    updateImage(direction);
});

rightButton.addEventListener("click", () => {
    const direction = generateRandomDirection();
    updateImage(direction);
});


