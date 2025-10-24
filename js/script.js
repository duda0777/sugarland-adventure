document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const menuBtn = document.getElementById("menu-btn");
  const tutorialBtn = document.getElementById("tutorial-btn");
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  startBtn.addEventListener("click", function () {
    alert("🍬 Bem-vinda à aventura em Sugarland! Prepare-se para se divertir!");
  });

  menuBtn.addEventListener("click", function () {
    alert("📋 Menu ainda está em construção!");
  });

  tutorialBtn.addEventListener("click", function () {
    alert("📖 Tutorial: Use o botão START para começar sua jornada!");
  });

  fullscreenBtn.addEventListener("click", function () {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
});
