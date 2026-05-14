// js/pages/catalogo.js

function inicializarCatalogo() {
    // 1. Tenta encontrar o container de filmes
    const containerFilmes = document.getElementById("filme-catalogo");
    
    // 2. Tenta encontrar o container de séries
    const containerSeries = document.getElementById("serie-catalogo");

    // Se estivermos na filmes.html
    if (containerFilmes) {
        const apenasFilmes = filmes.filter(f => f.tipo === "filme");
        renderizarFilmes(apenasFilmes, "filme-catalogo");
    }

    // Se estivermos na series.html
    if (containerSeries) {
        const apenasSeries = series.filter(s => s.tipo === "serie");
        renderizarFilmes(apenasSeries, "serie-catalogo");
    }
}

// Executa assim que o navegador terminar de carregar o HTML
document.addEventListener("DOMContentLoaded", inicializarCatalogo);