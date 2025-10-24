document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.querySelector(".start-btn");

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      alert("🍬 Bem-vinda à aventura em Sugarland! Prepare-se para se divertir!");
    });
  }
});
