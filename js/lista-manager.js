// ==========================================
// 1. UTILITÁRIOS DE CHAVES (LocalStorage)
// ==========================================
function getChaveListaPerfil(nomePerfil) {
    return nomePerfil ? `lista_${nomePerfil}` : null;
}

function getChaveAssistidos(nomePerfil) {
    return `check_assistidos_${nomePerfil}`;
}

// ==========================================
// 2. GERENCIAMENTO DA "MINHA LISTA"
// ==========================================
function getListaUsuario(nomePerfil) {
    const chave = getChaveListaPerfil(nomePerfil);
    if (!chave) return [];
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
}

function salvarFilmeNaLista(filme, nomePerfil) {
    const chave = getChaveListaPerfil(nomePerfil);
    if (!chave) return;
    let lista = getListaUsuario(nomePerfil);
    
    if (!lista.some(item => item.id === filme.id)) {
        lista.push(filme);
        localStorage.setItem(chave, JSON.stringify(lista));
    }
}

function removerFilmeDaLista(id, nomePerfil) {
    const chave = getChaveListaPerfil(nomePerfil);
    let lista = getListaUsuario(nomePerfil);
    const listaAtualizada = lista.filter(item => item.id !== id);
    localStorage.setItem(chave, JSON.stringify(listaAtualizada));
}

// ==========================================
// 3. SISTEMA DE "ASSISTIDOS" (Para uso futuro)
// ==========================================
function toggleStatusAssistido(id, nomePerfil) {
    const chave = getChaveAssistidos(nomePerfil);
    let assistidos = JSON.parse(localStorage.getItem(chave)) || [];
    const index = assistidos.indexOf(id);

    if (index > -1) {
        assistidos.splice(index, 1); // Remove se já estiver lá
    } else {
        assistidos.push(id); // Adiciona se não estiver
    }
    localStorage.setItem(chave, JSON.stringify(assistidos));
}

function verificarSeEstaAssistido(id, nomePerfil) {
    const chave = getChaveAssistidos(nomePerfil);
    let assistidos = JSON.parse(localStorage.getItem(chave)) || [];
    return assistidos.includes(id);
}