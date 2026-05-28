// 1. Renderizar Perfil no Header
function renderizarPerfilNoTopo() {
  const perfil = getPerfilAtivo();
  const perfilElement = document.getElementById("perfilAtivo");
  if (perfil && perfilElement) {
    perfilElement.innerHTML = `
      <a href="index.html">
        <img src="${perfil.imagem}" alt="${perfil.nome}">
        <span>${perfil.nome}</span>
      </a>`;
  }
}

// 2. Lógica de Busca
const btnBusca = document.getElementById("btnBusca");
const boxBusca = document.getElementById("boxBusca");
const inputBusca = document.getElementById("inputBusca");
const containerResultados = document.getElementById("resultadosBusca");

if (btnBusca) {
  btnBusca.addEventListener("click", (e) => {
    e.preventDefault();
    btnBusca.classList.add("esconder");
    boxBusca.classList.add("ativo");
    setTimeout(() => inputBusca.focus(), 200);
  });

  document.addEventListener("click", (e) => {
    if (!boxBusca.contains(e.target) && !btnBusca.contains(e.target)) {
      boxBusca.classList.remove("ativo");
      btnBusca.classList.remove("esconder");
    }
  });

  inputBusca.addEventListener("input", () => {
    const valor = inputBusca.value.trim();
    if (valor.length === 0) {
      containerResultados.innerHTML = "";
      return;
    }
    const resultados = buscarConteudo(valor);
    mostrarResultados(resultados);
  });
}


function buscarConteudo(termo) {
    // Une os dois arrays de banco de dados
    const tudo = [...filmes, ...series];
    termo = termo.toLowerCase();
    
    return tudo.filter(item => 
        item.titulo.toLowerCase().includes(termo) || 
        (item.dataGenre && item.dataGenre.toLowerCase().includes(termo))
    );
}

// No inputBusca addEventListener:
inputBusca.addEventListener("input", () => {
    const valor = inputBusca.value.trim();
    if (valor.length === 0) {
        containerResultados.innerHTML = "";
        containerResultados.style.display = "none";
        return;
    }
    const resultados = buscarConteudo(valor);
    containerResultados.style.display = "block";
    mostrarResultados(resultados);
});

function mostrarResultados(lista) {
  containerResultados.innerHTML = lista.length === 0 ? "<li>Nenhum resultado</li>" : "";
  lista.slice(0, 10).forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="info.html?id=${item.id}">
        <img src="${item.imagem}" />
        <span>${item.titulo}</span>
      </a>`;
    containerResultados.appendChild(li);
  });
}

function renderizarFilmes(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const perfilAtivo = getPerfilAtivo(); 
    const nomeUsuario = perfilAtivo ? perfilAtivo.nome : null;
    const minhaListaAtual = getListaUsuario(nomeUsuario);
    
    // Limpa o container antes de renderizar qualquer coisa
    container.innerHTML = "";

    // VERIFICAÇÃO: Se a lista estiver vazia
    if (lista.length === 0) {
        // Cria uma mensagem bonita avisando que está vazia
        const mensagemVazia = document.createElement("div");
        mensagemVazia.classList.add("lista-vazia-mensagem");
        mensagemVazia.innerHTML = `
        <p>Sua lista está vazia</p>
        <small>Adicione filmes ou séries para assistir mais tarde!</small>
        `;
        container.appendChild(mensagemVazia);
        return; // Para a execução da função aqui
    }

    // Se a lista NÃO estiver vazia, ela continua o fluxo normal e desenha os cards:
    lista.forEach(filme => {
        const estaNaLista = minhaListaAtual.some(item => item.id === filme.id);
        const icone = estaNaLista ? "fa-xmark" : "fa-plus";
        const classeBtn = estaNaLista ? "btn-remove" : "btn-add";

        const li = document.createElement("li");
        li.classList.add("filme-item");
        li.innerHTML = `
            <article class="filme-card">
                <button class="btn-lista ${classeBtn}" data-id="${filme.id}">
                    <i class="fa-solid ${icone}"></i>
                </button>
                <a href="info.html?id=${filme.id}">
                    <img src="${filme.imagem}" alt="${filme.titulo}">
                    <h3>${filme.titulo}</h3>
                </a>
            </article>
        `;
        container.appendChild(li);
    });
}
