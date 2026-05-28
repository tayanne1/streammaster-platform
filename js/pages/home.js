// js/pages/home.js

// 1. Pegar perfil ativo para saber de qual lista estamos falando
const perfilAtivo = getPerfilAtivo();
const nomeUsuario = perfilAtivo ? perfilAtivo.nome : null;


// Função para atualizar a seção "Minha Lista" e os recomendados
function atualizarInterface() {
    const minhaLista = getListaUsuario(nomeUsuario);
    renderizarFilmes(minhaLista, "minha-lista");
    
    const filmesPopulares = filmes.filter(f => f.tipo === "filme" && f.popular);
    const seriesPopulares = series.filter(f => f.tipo === "serie" && f.popular);

    renderizarFilmes(filmesPopulares, "filmes-populares");
    renderizarFilmes(seriesPopulares, "series-populares");
    gerarRecomendados(minhaLista);
}

function gerarRecomendados(minhaLista) {
    const container = document.getElementById("recomendados");
    if (!container) return;

    // VERIFICAÇÃO: Se a lista do usuário estiver vazia, mostra a mensagem de aviso
    if (minhaLista.length === 0) {
        container.innerHTML = ""; // Limpa o container antes
        
        const mensagemVazia = document.createElement("div");
        mensagemVazia.classList.add("lista-vazia-mensagem"); // Usa a mesma classe para herdar o CSS
        mensagemVazia.innerHTML = `
            <p>Adicione algo para ver recomendações</p>
            <small style="color: #888;">Baseamos nossas sugestões no seu gosto pessoal!</small>
        `;
        container.appendChild(mensagemVazia);
        return; // Para a execução aqui
    }

    // Se o usuário TIVER filmes na lista, a lógica original roda normalmente:
    const generosInteresse = minhaLista.flatMap(f => f.genero);
    
    const recomendados = [...filmes, ...series].filter(item => {
        const jaEstaNaLista = minhaLista.some(m => m.id === item.id);
        const temGeneroIgual = item.genero.some(g => generosInteresse.includes(g));
        return temGeneroIgual && !jaEstaNaLista;
    });

    // Se o filtro não achar nenhum filme correspondente (caso raro, mas possível)
    if (recomendados.length === 0) {
        container.innerHTML = `<p style="color: #888; text-align: center; width: 100%; padding: 20px;">Nenhuma nova recomendação disponível no momento.</p>`;
        return;
    }

    renderizarFilmes(recomendados.slice(0, 6), "recomendados");
}
// Evento de Clique Unificado (Add/Remove)
document.addEventListener("click", e => {
    const btn = e.target.closest(".btn-lista");
    if (!btn) return;

    const id = btn.dataset.id;
    const todoConteudo = [...filmes, ...series];
    const item = todoConteudo.find(f => f.id === id);

    if (btn.classList.contains("btn-add")) {
        salvarFilmeNaLista(item, nomeUsuario);
    } else {
        removerFilmeDaLista(id, nomeUsuario);
    }

    atualizarInterface(); // Re-renderiza tudo para atualizar os ícones
});

// Inicialização
atualizarInterface();