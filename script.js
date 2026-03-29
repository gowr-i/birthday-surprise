function startMusic() {
  const music = document.getElementById("bgMusic");

  if (music) {
    music.volume = 0.6;
    music.play().then(() => {
      sessionStorage.setItem("musicStarted", "true");
    }).catch(() => {
      console.log("Music blocked");
    });
  }
}

function openCake() {
  startMusic();  

  setTimeout(() => {
    window.location.href = "cake.html";  
  }, 500); // small delay so music starts properly
}

function openMessage() {
  startMusic();

  setTimeout(() => {
    window.location.href = "message.html";
  }, 500);
}

// Continue music on other pages
window.onload = () => {
  if (sessionStorage.getItem("musicStarted")) {
    const music = document.getElementById("bgMusic");
    if (music) music.play();
  }
};
