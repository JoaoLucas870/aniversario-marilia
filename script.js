const startButton = document.getElementById("startButton");
const bgMusic = document.getElementById("bgMusic");
const mensagemInicial = document.getElementById("mensagemInicial");
const instrucoes = document.getElementById("instrucoes");
const contador = document.getElementById("contador");
const carta = document.getElementById("carta");

let cliqueCoracoes = 0;

function criarCoracao() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = `${40 + Math.random() * 20}px`;
  document.body.appendChild(heart);

  heart.addEventListener("click", () => {
    cliqueCoracoes++;
    contador.textContent = "Corações: " + cliqueCoracoes;
    heart.remove();

    if (cliqueCoracoes === 15) {
      carta.classList.add("ativa");
    }
  });

  setTimeout(() => heart.remove(), 4000);
}

startButton.addEventListener("click", () => {
  bgMusic.play().catch(() => alert("Clique novamente para ativar o som 😅"));
  mensagemInicial.style.display = "none";
  startButton.style.display = "none";
  instrucoes.style.display = "block";
  setInterval(criarCoracao, 300);
});
