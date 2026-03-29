function enableMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  music.volume = 0.5;
  music.play().catch(() => {});
}

window.onload = () => {
  if (sessionStorage.getItem("musicAllowed") === "true") {
    enableMusic();
  }
};

// first user interaction unlocks music
document.addEventListener("click", () => {
  sessionStorage.setItem("musicAllowed", "true");
  enableMusic();
}, { once: true });

function openCake() {
  window.location.href = "cake.html";
}

function openMessage() {
  window.location.href = "message.html";
}