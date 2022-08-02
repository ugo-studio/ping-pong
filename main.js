const game = document.getElementById("game");
const ball = document.getElementById("ball");
const bat = document.getElementById("bat");
const table = document.getElementById("table");
const GO = document.getElementById("game-over");
const restart = document.getElementById("restart");
const GS = document.getElementById("game-start");
const start = document.getElementById("start");
const exit = document.getElementById("exit");

// set table scroll height
table.style.height = `${window.innerHeight * 2}px`;

// game scroll event handler
game.addEventListener("scroll", (e) => {
  let scrollY = e.target.scrollTop;
  //   console.log(scrollY);
  if (scrollY < window.innerHeight - 70) {
    bat.style.top = `${scrollY}px`;
  } else {
    bat.style.top = `${window.innerHeight - 80}px`;
  }
});

// ball bouncing animation
let dx = 0;
let dy = 0;
let x = 0;
let y = 0;

const bounce = () => {
  requestAnimationFrame(bounce);
  ball.style.top = `${y}px`;
  ball.style.left = `${x}px`;
  y += dy;
  x += dx;

  let bTop = parseFloat(bat.style.top.slice(0, -2));
  if (x >= window.innerWidth - 55 && x <= window.innerWidth - 50) {
    if (y >= bTop - 10) {
      if (y <= bTop + 70) {
        dx = -dx;
      }
    }
  }

  if (x <= 0) {
    dx = -dx;
  }

  if (y >= window.innerHeight - 30 || y <= 0) {
    dy = -dy;
  }

  if (x > window.innerWidth) {
    dy = 0;
    dx = 0;
    GO.style.display = "flex";
  }
};
bounce();

// start event handler
start.addEventListener("click", () => {
  GS.style.display = "none";
  dy = 3;
  dx = 3;
});

// restart event handler
restart.addEventListener("click", () => {
  y = 0;
  x = 0;
  GO.style.display = "none";
  dy = 3;
  dx = 3;
});

// exit event handler
exit.addEventListener("click", () => {
  window.location.reload();
});
