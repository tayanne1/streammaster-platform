// js/auth.js

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
    if (!getPerfilAtivo() && window.location.pathname.includes("home.html" )) {
        window.location.href = "index.html";
    }
}

// ============================================
// js/lista-manager.js
// LÓGICA COMPARTILHADA DE DADOS (LOCALSTORAGE)
// ============================================

/**
 * Gera a chave única para a lista do perfil no localStorage
 */
function getChaveListaPerfil(nomePerfil) {
  if (!nomePerfil) return null;
  return `lista_${nomePerfil}`;
}

/**
 * Retorna o array de itens salvos do perfil atual
 */
function getListaUsuario(nomePerfil) {
  const chave = getChaveListaPerfil(nomePerfil);
  if (!chave) return [];
  
  const dados = localStorage.getItem(chave);
  return dados ? JSON.parse(dados) : [];
}

/**
 * Adiciona um filme/série à lista se ele ainda não existir
 */
function salvarFilmeNaLista(filme, nomePerfil) {
  const chave = getChaveListaPerfil(nomePerfil);
  if (!chave) return;

  const lista = getListaUsuario(nomePerfil);
  // Verifica se já existe pelo título para evitar duplicatas
  const existe = lista.some(item => item.titulo === filme.titulo);

  if (!existe) {
    lista.push(filme);
    localStorage.setItem(chave, JSON.stringify(lista));
    console.log(`Sucesso: "${filme.titulo}" adicionado à lista de ${nomePerfil}.`);
  }
}

/**
 * Remove um item da lista baseado no título
 */
function removerFilmeDaLista(titulo, nomePerfil) {
  const chave = getChaveListaPerfil(nomePerfil);
  if (!chave) return;

  const lista = getListaUsuario(nomePerfil);
  const listaAtualizada = lista.filter(item => item.titulo !== titulo);
  
  localStorage.setItem(chave, JSON.stringify(listaAtualizada));
  console.log(`Sucesso: "${titulo}" removido da lista de ${nomePerfil}.`);
}

/**
 * Verifica se um título específico está na lista do usuário
 */
function estaNaLista(titulo, nomePerfil) {
  const lista = getListaUsuario(nomePerfil);
  return lista.some(item => item.titulo === titulo);
}


// No lista-manager.js, adicione estas funções:

function getChaveAssistidos(nomePerfil) {
    return `check_assistidos_${nomePerfil}`;
}

function toggleStatusAssistido(titulo, nomePerfil) {
    const chave = getChaveAssistidos(nomePerfil);
    let assistidos = JSON.parse(localStorage.getItem(chave)) || [];
    
    const index = assistidos.indexOf(titulo);
    if (index > -1) {
        // Se já estava lá, remove (desmarca)
        assistidos.splice(index, 1);
    } else {
        // Se não estava, adiciona (marca)
        assistidos.push(titulo);
    }
    
    localStorage.setItem(chave, JSON.stringify(assistidos));
}

function verificarSeEstaAssistido(titulo, nomePerfil) {
    const chave = getChaveAssistidos(nomePerfil);
    let assistidos = JSON.parse(localStorage.getItem(chave)) || [];
    return assistidos.includes(titulo);
}

const btnBusca = document.getElementById("btnBusca");
const boxBusca = document.getElementById("boxBusca");
const inputBusca = document.getElementById("inputBusca");

// 👉 abrir busca
btnBusca.addEventListener("click", (e) => {
  e.preventDefault();

  btnBusca.classList.add("esconder");
  boxBusca.classList.add("ativo");

  setTimeout(() => {
    inputBusca.focus();
  }, 200);
});

// 👉 fechar ao clicar fora
document.addEventListener("click", (e) => {
  if (!boxBusca.contains(e.target) && !btnBusca.contains(e.target)) {
    boxBusca.classList.remove("ativo");
    btnBusca.classList.remove("esconder");
  }
});


function buscarConteudo(termo) {
  const tudo = [
  ...Object.values(filmes || {}),
  ...Object.values(series || {})
];

  termo = termo.toLowerCase();

  return tudo.filter(item => {
    const titulo = item.titulo.toLowerCase();
    const genero = (item.dataGenre || "").toLowerCase();

    return titulo.includes(termo) || genero.includes(termo);
  });
}

const input = document.getElementById("inputBusca");

input.addEventListener("input", () => {
  const valor = input.value.trim();

  if (valor.length === 0) {
    limparResultados();
    return;
  }

  const resultados = buscarConteudo(valor);
  mostrarResultados(resultados);
});


function mostrarResultados(lista) {
  const container = document.getElementById("resultadosBusca");

  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<li>Nenhum resultado</li>";
    return;
  }

  lista.slice(0, 10).forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <a href="info.html?id=${item.id}">
        <img src="${item.imagem}" />
        <span>${item.titulo}</span>
      </a>
    `;

    container.appendChild(li);
  });
}

function limparResultados() {
  document.getElementById("resultadosBusca").innerHTML = "";
}








// const btnBusca = document.getElementById("btnBusca");
// const boxBusca = document.getElementById("boxBusca");
// const inputBusca = document.getElementById("inputBusca");

// btnBusca.addEventListener("click", (e) => {
//   e.preventDefault();

//   boxBusca.classList.toggle("ativa");

//   // foco automático
//   if (boxBusca.classList.contains("ativa")) {
//     inputBusca.focus();
//   }
// });

// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".search-container")) {
//     boxBusca.classList.remove("ativa");
//   }
// });