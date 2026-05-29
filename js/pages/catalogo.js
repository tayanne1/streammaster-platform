function inicializarCatalogo() {

    const containerFilmes = document.getElementById("filme-catalogo");
    
    const containerSeries = document.getElementById("serie-catalogo");

    if (containerFilmes) {
        const apenasFilmes = filmes.filter(f => f.tipo === "filme");
        renderizarFilmes(apenasFilmes, "filme-catalogo");
    }

    if (containerSeries) {
        const apenasSeries = series.filter(s => s.tipo === "serie");
        renderizarFilmes(apenasSeries, "serie-catalogo");
    }
}

document.addEventListener("DOMContentLoaded", inicializarCatalogo);