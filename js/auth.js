// ============================================
// js/auth.js - GESTÃO DE PERFIS E AUTENTICAÇÃO
// ============================================

const perfisPadroes = [
  { nome: "João", imagem: "https://i.pinimg.com/736x/8b/cd/c9/8bcdc9a84725237563a196342e805b5c.jpg" },
  { nome: "José", imagem: "https://i.pinimg.com/736x/70/d6/ad/70d6ad449de525476989a2d916f79fb4.jpg" },
  { nome: "Maria", imagem: "https://i.pinimg.com/736x/7c/ee/48/7cee48f8cc775c1f4c25f45d37db164a.jpg" },
  { nome: "Amanda", imagem: "https://i.pinimg.com/1200x/1a/f3/70/1af3701f6cee4157e1b8d8b82123ca6d.jpg" }
];

// 1. Inicializa os perfis no LocalStorage se estiver vazio
function inicializarPerfis() {
  if (!localStorage.getItem("perfis")) {
    localStorage.setItem("perfis", JSON.stringify(perfisPadroes));
  }
}

// 2. Retorna todos os perfis cadastrados (usado no index.js)
function obterPerfis() {
  try {
    return JSON.parse(localStorage.getItem("perfis")) || [];
  } catch (error) {
    console.error("Erro ao ler perfis:", error);
    return [];
  }
}

// 3. Salva a lista de perfis (usado ao adicionar/deletar no index.js)
function salvarPerfis(perfis) {
  localStorage.setItem("perfis", JSON.stringify(perfis));
}

// 4. Retorna o perfil que está logado no momento
function getPerfilAtivo() {
  const perfil = localStorage.getItem("perfilAtivo");
  return perfil ? JSON.parse(perfil) : null;
}

// 5. Define qual perfil foi clicado para "entrar" (usado no index.js)
function setPerfilAtivo(perfil) {
  localStorage.setItem("perfilAtivo", JSON.stringify(perfil));
}

// 6. Proteção de Rota: Se não estiver logado, manda de volta para o login
function verificarAutenticacao() {
  if (!getPerfilAtivo() && window.location.pathname.includes("home.html")) {
    window.location.href = "index.html";
  }
}

// --- Execução Automática ---
inicializarPerfis();
verificarAutenticacao();

// ============================================
// LÓGICA DE INTERFACE (Menu Mobile)
// ============================================

const btnMobile = document.querySelector('.btn-mobile');
const perf = document.querySelectorAll(".perf");
const iconBtn = document.querySelector('.btn-mobile i');

if (btnMobile) {
  btnMobile.addEventListener('click', () => {
    // Abre/Fecha as listas de navegação
    perf.forEach(el => {
      el.classList.toggle('show');
    });

    // Alterna o ícone entre Barras (Hambúrguer) e X (Fechar)
    if (iconBtn) {
      iconBtn.classList.toggle('fa-bars');
      iconBtn.classList.toggle('fa-times');
    }
  });
}