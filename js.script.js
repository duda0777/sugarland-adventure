// script.js

// Quando o botão START for clicado
document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.querySelector(".start-btn");

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      alert("🍬 Bem-vinda à aventura em Sugarland! Prepare-se para se divertir!");
      // Aqui você pode redirecionar para outra página ou iniciar o jogo
      // window.location.href = "jogo.html";
    });
  }

  // Efeito sonoro ou animação futura pode ser adicionado aqui
});
