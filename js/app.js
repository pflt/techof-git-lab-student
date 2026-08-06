// TechOf Git Lab — JavaScript base para exercícios Git

// CHAVE DE DEMONSTRAÇÃO: não é uma credencial real.
// No Hands-On 02, move este valor para um ficheiro .env.
const DEMO_API_KEY = "techof-demo-key-not-secret";

const tips = [
  "Usa git status antes e depois de cada operação importante.",
  "Um commit deve representar uma alteração lógica e coerente.",
  "Escreve mensagens de commit no imperativo: criar, corrigir, atualizar.",
  "Confirma sempre que ficheiros sensíveis estão no .gitignore.",
  "Antes de fazer merge, lê o histórico e compreende as alterações."
];

const themeToggle = document.querySelector("#theme-toggle");
const tipButton = document.querySelector("#tip-button");
const tipOutput = document.querySelector("#git-tip");
const currentYear = document.querySelector("#current-year");
const progressButton = document.querySelector("#progress-button");
const progressBar = document.querySelector("#progress-bar");
const progressValue = document.querySelector("#progress-value");

let progress = 20;

currentYear.textContent = new Date().getFullYear();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

tipButton.addEventListener("click", () => {
  const index = Math.floor(Math.random() * tips.length);
  tipOutput.textContent = `Dica: ${tips[index]}`;
});

progressButton.addEventListener("click", () => {
  progress = progress >= 100 ? 20 : progress + 20;
  progressBar.style.width = `${progress}%`;
  progressValue.textContent = `${progress}%`;
});

// Apenas para demonstrar que o valor existe no projeto inicial.
console.info("Configuração demo carregada:", Boolean(DEMO_API_KEY));
