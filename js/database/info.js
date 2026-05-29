const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const conteudo = filmes.find(f => f.id === id) || series.find(s => s.id === id);

if (!conteudo) {
  document.body.innerHTML = "<h1>Conteúdo não encontrado</h1>";
  throw new Error("ID de filme ou série inválido");
}

document.getElementById("titulo").textContent = conteudo.titulo;
document.getElementById("poster").src = conteudo.imagem;
document.getElementById("meta").innerHTML = `
  <span>${conteudo.tempo || conteudo.temporadas} &bull; </span>
  <span>${conteudo.ano} &bull; </span>
  <span >${conteudo.genero.join(", ")} </span>
`;


const botaoAssistirLink = document.querySelector(".watch-btn a");

if (botaoAssistirLink) {
    if (conteudo.linkPlataforma) {
        botaoAssistirLink.href = conteudo.linkPlataforma;
        botaoAssistirLink.target = "_blank"; 
        botaoAssistirLink.rel = "noopener noreferrer"; 
    } else {
        botaoAssistirLink.href = "#";
        botaoAssistirLink.addEventListener("click", (e) => {
            e.preventDefault();
            alert("O link oficial para este conteúdo estará disponível em breve!");
        });
    }
}
/* ========== Aplicar Capa de Fundo ========== */
const container = document.getElementById("container");
if (conteudo.capa && container) {
    container.style.backgroundImage = `url("${conteudo.capa}")`;
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
}


const tabContent = document.getElementById('tabContent');
const allTabBtns = document.querySelectorAll('.tab-btn');
const btnEpisodios = document.getElementById('btnEpisodios');

if (conteudo.tipo === "serie" && conteudo.temporadas_detalhes) {
    if (btnEpisodios) btnEpisodios.style.display = "inline-block";
} else {
    if (btnEpisodios) btnEpisodios.style.display = "none";
}

/* ========== OBJETO DE RENDERIZAÇÃO (Pega os dados do banco e transforma em HTML) ========== */
const renderizadores = {
    sinopse: () => `<p class="spacep">${conteudo.descricao}</p>`,
    
    episodios: () => {
        if (!conteudo.temporadas_detalhes) return "";
        return conteudo.temporadas_detalhes.map(temp => `
            <div class="temporada-container" style="margin-bottom: 25px; border-bottom: 1px solid #333; padding-bottom: 15px;">
                <h3 class="ator" style="color: #ff6f00; font-size: 1.3rem; margin-bottom: 10px;">
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
    },

    elenco: () => conteudo.elenco.map(item => `
        <p class="spacep">
          <strong class="ator">${item.ator} — </strong>
          <span class="personagem">${item.personagem}</span>
        </p>
    `).join(""),

    trailer: () => conteudo.trailer ? `
        <div class="trailer-container">
            <iframe src="${conteudo.trailer.url}" frameborder="0" allowfullscreen style=" 
            border-radius:10px;
            margin-bottom:15px;">
            </iframe>

            ${conteudo.trailer.info.map(item => `
                <p class="spacep"><strong class="ator">${item.titulo}:</strong> <span class="personagem">${item.valor}</span></p>
            `).join("")}
        </div>
    ` : "",

    sobre: () => conteudo.sobre ? `
        <div class="sobre-container">
            ${conteudo.sobre.info.map(item => `
                <p class="spacep"><strong class="ator">${item.titulo}:</strong> <span class="personagem">${item.valor}</span></p>
            `).join("")}
            <p class="funfact" style="margin-top:15px;">
                <strong class="ator">Fun Facts:</strong><br>
                <span class="personagem">${conteudo.sobre.funFacts.join("<br>• ")}</span>
            </p>
        </div>
    ` : "",

    resenha: () => conteudo.resenha ? `
        <div class="resenha-container">
            <strong class="ator" style="font-size: 1.2rem;">${conteudo.resenha.nota}</strong>
            ${conteudo.resenha.reviews.map(item => `
                <p class="spacep" style="margin-top:15px; border-left: 2px solid #ff6f00; padding-left: 10px;">
                    <strong class="ator">— ${item.autor}</strong><br>
                    <span class="personagem">"${item.texto}"</span>
                </p>
            `).join("")}
        </div>
    ` : "",

    mais: () => conteudo.mas ? `
        <div class="mais-container">
            ${conteudo.mas.map(item => `
                <p class="spacep"><strong class="ator">${item.titulo}</strong> <span class="personagem">(${item.ano})</span></p>
            `).join("")}
        </div>
    ` : ""
};

function gerenciarTabs() {
    allTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            allTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (renderizadores[tabId]) {
                tabContent.innerHTML = renderizadores[tabId]();
            }


            const tabsNav = document.getElementById('tabsNav');
            if (tabsNav) {

                const botaoEsquerda = btn.offsetLeft;
                const botaoLargura = btn.offsetWidth;
                const navLargura = tabsNav.offsetWidth;
                
                tabsNav.scrollTo({
                    left: botaoEsquerda - (navLargura / 2) + (botaoLargura / 2),
                    behavior: 'smooth'
                });
            }
        });
    });
}

gerenciarTabs();

const defaultTab = document.querySelector('.tab-btn.active');
if (defaultTab) defaultTab.click();


/* ========== LÓGICA DOS BOTÕES (SALVAR E ASSISTIDO) ========== */
const saveBtnLink = document.querySelector('.save-btn');
const watchedBtnLink = document.querySelector('.watched-btn');

function atualizarInterfaceBotoes() {
    const perfil = typeof getPerfilAtivo === 'function' ? getPerfilAtivo() : null;
    if (!perfil) return;

    const saveIcon = saveBtnLink?.querySelector('i');
    if (saveIcon) {
        const minhaListaAtual = getListaUsuario(perfil.nome);
        const jaEstaSalvo = minhaListaAtual.some(item => item.id === conteudo.id);

        if (jaEstaSalvo) {
            saveIcon.classList.remove('fa-regular');
            saveIcon.classList.add('fa-solid', 'active');
        } else {
            saveIcon.classList.remove('fa-solid', 'active');
            saveIcon.classList.add('fa-regular'); 
        }
    }

    // 2. Lógica do botão Assistido (Check)
    const watchedIcon = watchedBtnLink?.querySelector('i');
    if (watchedIcon) {
        if (typeof verificarSeEstaAssistido === 'function' && verificarSeEstaAssistido(conteudo.id, perfil.nome)) {
            watchedIcon.classList.add('active');
        } else {
            watchedIcon.classList.remove('active');
        }
    }
}

if (saveBtnLink) {
    saveBtnLink.addEventListener('click', (e) => {
        e.preventDefault();
        const perfil = getPerfilAtivo();
        if (!perfil) return alert("Faça login para salvar!");

        const minhaListaAtual = getListaUsuario(perfil.nome);
        const jaEstaSalvo = minhaListaAtual.some(item => item.id === conteudo.id);

        if (jaEstaSalvo) {
            removerFilmeDaLista(conteudo.id, perfil.nome);
        } else {
            const dados = {
              id: conteudo.id,
              titulo: conteudo.titulo,
              imagem: conteudo.imagem,
              genero: conteudo.genero
            };
            salvarFilmeNaLista(dados, perfil.nome);
        }
        
        atualizarInterfaceBotoes();
    });
}

if (watchedBtnLink) {
    watchedBtnLink.addEventListener('click', (e) => {
        e.preventDefault();
        const perfil = getPerfilAtivo();
        if (!perfil) return alert("Faça login para marcar!");
        
        if (typeof toggleStatusAssistido === 'function') {
            toggleStatusAssistido(conteudo.id, perfil.nome);
        }
        atualizarInterfaceBotoes();
    });
}

atualizarInterfaceBotoes();