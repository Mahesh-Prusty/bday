const wishes = [
  "You are amazing just the way you are! Have a fantastic birthday!",
  "Another year older, wiser, and more fabulous!",
  "Hope your day is as sweet and joyful as you are!",
  "Sending you smiles for every moment of your special day!",
  "You're not getting older, you're leveling up! 🎮",
  "May your cake be sweet and your heart even sweeter!",
  "Here's to laughter, love, and all your birthday wishes coming true!"
];

let musicPlaying = false;

function showWishes(button) {
  const wishElement = document.getElementById("wish");

  // Random wish
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  wishElement.textContent = randomWish;
  wishElement.classList.add("show");

  // Animate button
  button.style.transform = "scale(0.95)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 150);

  // Confetti burst
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Change background
  const colors = ["#ffe6f0", "#fff8dc", "#e0f7fa", "#f3e5f5", "#f9fbe7", "#ffebee"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function toggleMusic() {
  const audio = document.getElementById("birthdayMusic");
  if (musicPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  musicPlaying = !musicPlaying;
}

// Balloon Animation
const canvas = document.getElementById("balloonsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balloons = [];

function Balloon() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * canvas.height;
  this.radius = 20 + Math.random() * 20;
  this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
  this.speed = 1 + Math.random() * 2;
}

Balloon.prototype.update = function() {
  this.y -= this.speed;
  if (this.y < -this.radius) {
    this.y = canvas.height + this.radius;
    this.x = Math.random() * canvas.width;
  }
};

Balloon.prototype.draw = function() {
  ctx.beginPath();
  ctx.ellipse(this.x, this.y, this.radius * 0.6, this.radius, 0, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
};

function animateBalloons() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloons.forEach(balloon => {
    balloon.update();
    balloon.draw();
  });
  requestAnimationFrame(animateBalloons);
}

for (let i = 0; i < 25; i++) {
  balloons.push(new Balloon());
}

animateBalloons();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
