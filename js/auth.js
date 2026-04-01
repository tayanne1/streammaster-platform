// js/auth.js

// Esta função substitui o "localStorage.getItem" que você usava
function getPerfilAtivo() {
    const perfil = localStorage.getItem("perfilAtivo");
    return perfil ? JSON.parse(perfil) : null;
}

// Esta função será usada pelo index.js para salvar o perfil ao clicar
function setPerfilAtivo(perfil) {
    localStorage.setItem("perfilAtivo", JSON.stringify(perfil));
}

// Esta função substitui o seu "else { window.location.href = 'index.html' }"
function verificarAutenticacao() {
    if (!getPerfilAtivo() && window.location.pathname.includes("home.html")) {
        window.location.href = "index.html";
    }
}