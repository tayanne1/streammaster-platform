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
    if (minhaLista.length === 0) return;
    const generosInteresse = minhaLista.flatMap(f => f.genero);
    
    const recomendados = [...filmes, ...series].filter(item => {
        const jaEstaNaLista = minhaLista.some(m => m.id === item.id);
        const temGeneroIgual = item.genero.some(g => generosInteresse.includes(g));
        return temGeneroIgual && !jaEstaNaLista;
    });

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