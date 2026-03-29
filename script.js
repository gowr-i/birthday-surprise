// Play music safely
function playMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  music.loop = true;
  music.volume = 0.6;

  music.play().catch(() => {});
}

// Page 1 → Cake
function openCake() {
  sessionStorage.setItem("allowMusic", "true");
  window.location.href = "cake.html";
}

// Cake → Message
function openMessage() {
  sessionStorage.setItem("allowMusic", "true");
  window.location.href = "message.html";
}

// On load (Cake & Message)
window.onload = () => {
  if (sessionStorage.getItem("allowMusic")) {
    playMusic();
  }
};

// Backup: any tap ensures music
document.addEventListener("click", playMusic, { once: true });
