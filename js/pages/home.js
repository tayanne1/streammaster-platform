const perfilAtivo = getPerfilAtivo();
const nomeUsuario = perfilAtivo ? perfilAtivo.nome : null;


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

    if (minhaLista.length === 0) {
        container.innerHTML = ""; 
        
        const mensagemVazia = document.createElement("div");
        mensagemVazia.classList.add("lista-vazia-mensagem"); 
        mensagemVazia.innerHTML = `
            <p>Adicione algo para ver recomendações</p>
            <small style="color: #888;">Baseamos nossas sugestões no seu gosto pessoal!</small>
        `;
        container.appendChild(mensagemVazia);
        return; 
    }

    const generosInteresse = minhaLista.flatMap(f => f.genero);
    
    const recomendados = [...filmes, ...series].filter(item => {
        const jaEstaNaLista = minhaLista.some(m => m.id === item.id);
        const temGeneroIgual = item.genero.some(g => generosInteresse.includes(g));
        return temGeneroIgual && !jaEstaNaLista;
    });

    if (recomendados.length === 0) {
        container.innerHTML = `<p style="color: #888; text-align: center; width: 100%; padding: 20px;">Nenhuma nova recomendação disponível no momento.</p>`;
        return;
    }

    renderizarFilmes(recomendados.slice(0, 6), "recomendados");
}

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

    atualizarInterface(); 
});

atualizarInterface();