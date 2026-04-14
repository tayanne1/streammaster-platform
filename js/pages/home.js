

// ============================================
// 2. MOTOR DO CARROSSEL (Lógica de Movimento)
// ============================================

function initCarousel(carrossel) {
  if (!carrossel) return;

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let moved = false;

  // ---- Mouse ----
  carrossel.addEventListener("mousedown", (e) => {
    // 🚫 NÃO inicia drag se clicar em link ou botão
    if (e.target.closest("a, button")) return;

    isDragging = true;
    moved = false;
    startX = e.pageX;
    scrollLeft = carrossel.scrollLeft;
  });

  carrossel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const walk = e.pageX - startX;

    // só considera drag se realmente moveu
    if (Math.abs(walk) > 5) {
      moved = true;
      carrossel.scrollLeft = scrollLeft - walk;
    }
  });

  carrossel.addEventListener("mouseup", () => {
    isDragging = false;
  });

  carrossel.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  // ---- Cancela clique se foi drag ----
  carrossel.addEventListener("click", (e) => {
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // ---- Touch (mobile) ----
  let touchStartX = 0;
  let touchScrollLeft = 0;

  carrossel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = carrossel.scrollLeft;
  });

  carrossel.addEventListener("touchmove", (e) => {
    const walk = touchStartX - e.touches[0].pageX;
    carrossel.scrollLeft = touchScrollLeft + walk;
  });

  // ---- Teclado (limitado ao foco) ----
  carrossel.addEventListener("keydown", (e) => {
    const itemWidth = carrossel.querySelector(".carrossel")?.offsetWidth || 220;
    const gap = parseInt(getComputedStyle(carrossel).gap) || 20;
    const scrollDistance = (itemWidth + gap) * 5;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      carrossel.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      carrossel.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    }
  });
}

// ============================================
// 3. SISTEMA DE DADOS (Minha Lista)
// ============================================

function getChaveListaPerfil(nomePerfil) {
  return `lista_${nomePerfil}`;
}

function getListaUsuario(nomePerfil) {
  const chave = getChaveListaPerfil(nomePerfil);
  const dados = localStorage.getItem(chave);
  return dados ? JSON.parse(dados) : [];
}

function salvarFilmeNaLista(filme, nomePerfil) {
  const chave = getChaveListaPerfil(nomePerfil);
  const lista = getListaUsuario(nomePerfil);
  const existe = lista.some(item => item.titulo === filme.titulo);

  if (!existe) {
    lista.push(filme);
    localStorage.setItem(chave, JSON.stringify(lista));
  }
}

function removerFilmeDaLista(titulo, nomePerfil) {
  const chave = getChaveListaPerfil(nomePerfil);
  const lista = getListaUsuario(nomePerfil);
  const listaAtualizada = lista.filter(item => item.titulo !== titulo);
  localStorage.setItem(chave, JSON.stringify(listaAtualizada));
}

function estaNaLista(titulo, nomePerfil) {
  const lista = getListaUsuario(nomePerfil);
  return lista.some(item => item.titulo === titulo);
}

// ============================================


function injetarBotaoCarrossel() {
  const perfil = getPerfilAtivo();
  if (!perfil) return;

  document.querySelectorAll(".carrossel").forEach((item) => {
    // Limpa botões antigos para não duplicar
    item.querySelectorAll(".btn-add-list, .btn-remove-list").forEach(b => b.remove());

    const titulo = item.querySelector("h3")?.textContent || "Desconhecido";
    const imagem = item.querySelector("img")?.src || "";
    const generos = item.getAttribute("data-genre") || "";

    const btn = document.createElement("button");
    const jaAdicionado = estaNaLista(titulo, perfil.nome); // Chama do lista-manager.js

    btn.className = jaAdicionado ? "btn-remove-list" : "btn-add-list";
    btn.innerHTML = jaAdicionado ? '<i class="fas fa-times"></i>' : '<i class="fas fa-plus"></i>';
    btn.title = jaAdicionado ? "Remover da lista" : "Adicionar à lista";

    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const id = item.querySelector("a")?.href.split("id=")[1];

      const dados = { id, titulo, imagem, generos: generos.trim() };

      // 🔥 VALIDAÇÃO
      if (!dados.id) {
        console.error("ERRO: item sem ID (home)", dados, item);
        return; // impede salvar quebrado
      }

      if (jaAdicionado) {
        removerFilmeDaLista(titulo, perfil.nome);
      } else {
        salvarFilmeNaLista(dados, perfil.nome);
      }
      atualizarTodaInterface();
    };

    item.appendChild(btn);
  });
}

function renderizarMinhaLista() {
  const perfil = getPerfilAtivo();
  const container = document.querySelector(".my-list ul");
  if (!perfil || !container) return;

  const lista = getListaUsuario(perfil.nome); // Chama do lista-manager.js
  container.innerHTML = lista.length === 0 
    ? "<p style='color: #888; text-align: center; width: 100%; padding: 20px;'>Sua lista está vazia</p>" 
    : "";

  lista.forEach((filme) => {
    const li = document.createElement("li");
    li.className = "carrossel";
    li.setAttribute("data-genre", filme.generos);
    li.innerHTML = `
      <article class="filmelist">
        <a href="info.html?id=${filme.id}">
          <img src="${filme.imagem}" alt="${filme.titulo}" />
          <h3>${filme.titulo}</h3>
        </a>
      </article>
    `;

    const btn = document.createElement("button");
    btn.className = "btn-remove-list";
    btn.innerHTML = '<i class="fas fa-times"></i>';
    btn.onclick = () => {
      removerFilmeDaLista(filme.titulo, perfil.nome); // Chama do lista-manager.js
      atualizarTodaInterface();
    };

    li.appendChild(btn);
    container.appendChild(li);
  });
}

function renderizarRecomendacoes() {
  const perfil = getPerfilAtivo();
  const container = document.querySelector(".mediamightlike ul");
  if (!perfil || !container) return;

  const lista = getListaUsuario(perfil.nome);

  if (lista.length === 0) {
    container.innerHTML = "<p style='color: #888; text-align: center;'>Adicione algo para ver recomendações</p>";
    return;
  }

  // 🔥 Conta gêneros mais usados
  const generosCount = {};
  lista.forEach(f => {
    f.generos.split(" ").forEach(g => {
      if (g) generosCount[g] = (generosCount[g] || 0) + 1;
    });
  });

  const topGeneros = Object.entries(generosCount)
    .sort((a,b) => b[1]-a[1])
    .slice(0,2)
    .map(i => i[0]);

  // 🔥 AGORA USA O BANCO (ESSA É A MUDANÇA IMPORTANTE)
  const disponiveis = [...Object.values(filmes), ...Object.values(series)];

  const recomendados = [];
  const titulosVistos = new Set();

  disponiveis.forEach(item => {
    const t = item.titulo;
    const g = item.dataGenre || "";


    if (
      !estaNaLista(t, perfil.nome) &&
      !titulosVistos.has(t) &&
      topGeneros.some(tg => g.includes(tg))
    ) {
      recomendados.push({
        id: item.id,
        titulo: t,
        imagem: item.imagem,
        generos: g
      });

      titulosVistos.add(t);
    }
  });

  container.innerHTML = "";

  recomendados.slice(0, 20).forEach(f => {
    const li = document.createElement("li");
    li.className = "carrossel";

    li.innerHTML = `
      <article class="filmelist">
        <a href="info.html?id=${f.id}">
          <img src="${f.imagem}" />
          <h3>${f.titulo}</h3>
        </a>
      </article>
    `;

    const btn = document.createElement("button");
    btn.className = "btn-add-list";
    btn.innerHTML = '<i class="fas fa-plus"></i>';

    btn.onclick = () => {
      salvarFilmeNaLista(f, perfil.nome);
      atualizarTodaInterface();
    };

    li.appendChild(btn);
    container.appendChild(li);
  });
  
}

function atualizarTodaInterface() {
    injetarBotaoCarrossel();
    renderizarMinhaLista();
    renderizarRecomendacoes();
}

function inicializarHome() {
    // Iniciar Carrosseis (Se você tiver a função initCarousel em ui.js)
    document.querySelectorAll(".carrosselfilmes, .carrosselserias, .my-list ul, .mediamightlike ul").forEach(c => {
        if(typeof initCarousel === 'function') initCarousel(c);
    });

    atualizarTodaInterface();
}

// Garante a execução após o DOM
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarHome);
} else {
    inicializarHome();
}