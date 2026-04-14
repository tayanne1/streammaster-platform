// PEGAR ID DA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// FILME E SERIE ATUAL
const conteudo = filmes[id] || series[id];


// VALIDAÇÃO
if (!conteudo) {
  document.body.innerHTML = "<h1>Conteúdo não encontrado</h1>";
  throw new Error("ID de filme ou série inválido");
}

// ==========================================
// LÓGICA DE TEMPORADAS (EXCLUSIVO PARA SÉRIES)
// ==========================================
const areaTemporadas = document.getElementById("temporadas-area");
const labelEpisodios = document.getElementById("label-episodios");
const tabsContainer = document.querySelector(".tabs"); // Seleciona a caixa das abas

if (conteudo.temporadas_detalhes) {
    // 1. AJUSTE DE LAYOUT: Aumenta a largura para caber os episódios
    if (tabsContainer) {
        tabsContainer.style.width = "100%"; 
        tabsContainer.style.minWidth = "810px"; // Ajuste esse valor se quiser mais largo ou estreito
    }

    // 2. VISIBILIDADE: Mostra o botão da aba "Episódios"
    if (labelEpisodios) {
        labelEpisodios.style.display = "inline-block";
    }

    // 3. RENDERIZAÇÃO: Gera a lista de temporadas e capítulos
    if (areaTemporadas) {
        // Adicionamos um scroll interno para não quebrar o rodapé do site
        areaTemporadas.style.maxHeight = "500px";
        areaTemporadas.style.overflowY = "auto";
        areaTemporadas.style.paddingRight = "10px";

        areaTemporadas.innerHTML = conteudo.temporadas_detalhes.map(temp => `
            <div class="temporada-container" style="margin-bottom: 25px; border-bottom: 1px solid #333; padding-bottom: 15px;">
                <h3 class="ator" style="color: #E50914; font-size: 1.3rem; margin-bottom: 10px;">
                    <i class="fa-solid fa-layer-group"></i> ${temp.numero}
                </h3>
                <ul style="list-style: none; padding-left: 0;">
                    ${temp.capitulos.map((cap, index) => `
                        <li class="spacep" style="margin: 8px 0; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #666; font-weight: bold; min-width: 25px;">${String(index + 1).padStart(2, '0')}</span> 
                            <span class="personagem" style="font-size: 0.95rem;">${cap}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>
        `).join("");
    }
} else {
    // LÓGICA PARA FILMES: Mantém o layout original
    if (labelEpisodios) labelEpisodios.style.display = "none";
    
    if (tabsContainer) {
        tabsContainer.style.width = ""; // Volta ao tamanho original do seu CSS
        tabsContainer.style.maxWidth = ""; 
    }
}

// ATUALIZAR ELEMENTOS
document.getElementById("titulo").textContent = conteudo.titulo;
document.getElementById("poster").src = conteudo.imagem;

document.getElementById("meta").innerHTML = `
  <span>${conteudo.tempo || conteudo.temporadas}</span>
  <span>${conteudo.ano}</span>
  <span>${conteudo.genero.join(", ")}</span>
`;

document.getElementById("descricao").textContent = conteudo.descricao;

// ELENCOw
document.getElementById("elenco").innerHTML = conteudo.elenco
  .map(item => `
    <p class="spacep">
      <strong class="ator">${item.ator} — </strong>
      <span class="personagem">${item.personagem}</span>
    </p>
  `)
  .join("");


// TRAILER (verifica se existe)
if (conteudo.trailer) {
  // vídeo
  document.getElementById("trailer").src = conteudo.trailer.url;

  // infos abaixo
  document.getElementById("trailerInfo").innerHTML = `
    <p class="spacep">
      ${conteudo.trailer.info
        .map(item => `
          <strong class="ator">${item.titulo}:</strong> 
          <span class="personagem">${item.valor}</span><br>
        `)
        .join("")}
    </p>
  `;
}

// SOBRE
if (conteudo.sobre) {
  document.getElementById("sobre").innerHTML = `
    
    <p class="spacep">
      ${conteudo.sobre.info
        .map(item => `
          <strong class="ator">${item.titulo}:</strong> 
          <span class="personagem">${item.valor}</span><br>
        `)
        .join("")}
    </p>

    <p class="funfact">
      <strong class="ator">Fun Facts:</strong><br>
      <span class="personagem">
        ${conteudo.sobre.funFacts.join("<br>")}
      </span>
    </p>

  `;
}

// RESENHA
if (conteudo.resenha) {
  document.getElementById("resenha").innerHTML = `
    
    <p class="spacep">
      
      <strong class="ator">
        ${conteudo.resenha.nota}
      </strong><br>

      ${conteudo.resenha.reviews
        .map(item => `
          <strong class="ator">— ${item.autor}:</strong>
          <span class="personagem">"${item.texto}"</span><br>
        `)
        .join("")}

    </p>
  `;
}

// MAIS
if (conteudo.mas) {
  document.getElementById("mas").innerHTML = `
    
    <p class="spacep">
      ${conteudo.mas
        .map(item => `
          <strong class="ator">${item.titulo}</strong> 
          <span class="personagem">(${item.ano})</span><br>
        `)
        .join("")}
    </p>

  `;
}

// CAPA
const container = document.getElementById("container");

if (conteudo.capa) {
    // Aplica a variável CSS que criamos no style2.css
    container.style.setProperty("--bg-filme", `url(${conteudo.capa})`);
    
    // Garante que o fundo preencha todo o espaço sem repetir
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
    
    // Log para você testar no console do navegador (F12)
    console.log("Capa carregada:", conteudo.capa);
}


// ============================================
// LÓGICA DOS BOTÕES (SALVAR E ASSISTIDO)
// ============================================

const saveBtnLink = document.querySelector('.save-btn');
const watchedBtnLink = document.querySelector('.watched-btn');

function atualizarInterfaceBotoes() {
    const perfil = typeof getPerfilAtivo === 'function' ? getPerfilAtivo() : null;
    if (!perfil) return;

    // 1. Lógica do botão SALVAR (Minha Lista)
    const saveIcon = saveBtnLink?.querySelector('i');
    if (saveIcon) {
        estaNaLista(conteudo.titulo, perfil.nome) 
            ? saveIcon.classList.add('active') 
            : saveIcon.classList.remove('active');
    }

    // 2. Lógica do botão ASSISTIDO (Apenas Memória de Marcação)
    const watchedIcon = watchedBtnLink?.querySelector('i');
    if (watchedIcon) {
        verificarSeEstaAssistido(conteudo.titulo, perfil.nome)
            ? watchedIcon.classList.add('active')
            : watchedIcon.classList.remove('active');
    }

    
}

// Evento SALVAR
if (saveBtnLink) {
    saveBtnLink.addEventListener('click', (e) => {
        e.preventDefault();
        const perfil = getPerfilAtivo();
        if (!perfil) return alert("Faça login para salvar!");

        if (estaNaLista(conteudo.titulo, perfil.nome)) {
  removerFilmeDaLista(conteudo.titulo, perfil.nome);
          } else {
            const dados = {
              id: conteudo.id,
              titulo: conteudo.titulo,
              imagem: conteudo.imagem,
              generos: conteudo.dataGenre || (
                Array.isArray(conteudo.genero) 
                  ? conteudo.genero.join(" ") 
                  : conteudo.genero
              )
            };

            // 🔥 VALIDAÇÃO AQUI
            if (!dados.id) {
              console.error("ERRO: item sem ID", dados);
              return; // impede salvar quebrado
            }

            salvarFilmeNaLista(dados, perfil.nome);
          }
        atualizarInterfaceBotoes();
    });
}

// Evento ASSISTIDO (Check)
if (watchedBtnLink) {
    watchedBtnLink.addEventListener('click', (e) => {
        e.preventDefault();
        const perfil = getPerfilAtivo();
        if (!perfil) return alert("Faça login para marcar!");

        // Apenas alterna o estado na memória do navegador
        toggleStatusAssistido(conteudo.titulo, perfil.nome);
        
        atualizarInterfaceBotoes();
    });
}

// Roda ao carregar a página
atualizarInterfaceBotoes();

