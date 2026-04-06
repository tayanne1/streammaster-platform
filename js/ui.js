// ============================================
// 1. INTERFACE DO USUÁRIO (HEADER)
// ============================================

function renderizarPerfilNoTopo() {
  const perfil = getPerfilAtivo(); // Função do auth.js
  const perfilElement = document.getElementById("perfilAtivo");

  if (perfil && perfilElement) {
    perfilElement.innerHTML = `
      <a href="index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
        <img src="${perfil.imagem}" alt="${perfil.nome}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
        <span style="color: #fff; font-size: 14px;">${perfil.nome}</span>
      </a>
    `;
  }
}