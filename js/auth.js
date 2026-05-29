const perfisPadroes = [
  { nome: "João", imagem: "https://i.pinimg.com/736x/8b/cd/c9/8bcdc9a84725237563a196342e805b5c.jpg" },
  { nome: "José", imagem: "https://i.pinimg.com/736x/70/d6/ad/70d6ad449de525476989a2d916f79fb4.jpg" },
  { nome: "Maria", imagem: "https://i.pinimg.com/736x/7c/ee/48/7cee48f8cc775c1f4c25f45d37db164a.jpg" },
  { nome: "Amanda", imagem: "https://i.pinimg.com/1200x/1a/f3/70/1af3701f6cee4157e1b8d8b82123ca6d.jpg" }
];

function inicializarPerfis() {
  if (!localStorage.getItem("perfis")) {
    localStorage.setItem("perfis", JSON.stringify(perfisPadroes));
  }
}

/* ========== Retorna todos os perfis cadastrados (usado no index.js) ========== */
function obterPerfis() {
  try {
    return JSON.parse(localStorage.getItem("perfis")) || [];
  } catch (error) {
    console.error("Erro ao ler perfis:", error);
    return [];
  }
}

function salvarPerfis(perfis) {
  localStorage.setItem("perfis", JSON.stringify(perfis));
}

function getPerfilAtivo() {
  const perfil = localStorage.getItem("perfilAtivo");
  return perfil ? JSON.parse(perfil) : null;
}

function setPerfilAtivo(perfil) {
  localStorage.setItem("perfilAtivo", JSON.stringify(perfil));
}

function verificarAutenticacao() {
  if (!getPerfilAtivo() && window.location.pathname.includes("home.html")) {
    window.location.href = "index.html";
  }
}

inicializarPerfis();
verificarAutenticacao();


const btnMobile = document.querySelector('.btn-mobile');
const perf = document.querySelectorAll(".perf");
const iconBtn = document.querySelector('.btn-mobile i');

if (btnMobile) {
  btnMobile.addEventListener('click', () => {

    perf.forEach(el => {
      el.classList.toggle('show');
    });

    if (iconBtn) {
      iconBtn.classList.toggle('fa-bars');
      iconBtn.classList.toggle('fa-times');
    }
  });
}