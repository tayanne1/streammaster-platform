document.addEventListener("DOMContentLoaded", () => {
  
  function renderizarPerfis() {
    const lista = document.getElementById("profilesList");
    if (!lista) return;
    lista.innerHTML = "";

    obterPerfis().forEach((perfil) => {
      const li = document.createElement("li");
      li.className = "profile";
      li.innerHTML = `
        <a href="home.html">
          <img src="${perfil.imagem}" alt="${perfil.nome}" />
          <p>${perfil.nome}</p>
        </a>`;

      li.querySelector("a").addEventListener("click", () => {
        setPerfilAtivo(perfil);
      });
      lista.appendChild(li);
    });
  }

  function renderizarPerfisModal() {
    const lista = document.getElementById("perfisGerenciar");
    if (!lista) return;
    lista.innerHTML = "";

    obterPerfis().forEach((perfil, index) => {
      const li = document.createElement("li");
      li.className = "perfil-item-gerenciar";
      li.innerHTML = `
        <div class="perfil-info">
          <img src="${perfil.imagem}" alt="${perfil.nome}" />
          <span>${perfil.nome}</span>
        </div>
        <button type="button" class="btn-deletar">Deletar</button>`;

      li.querySelector(".btn-deletar").addEventListener("click", () => deletarPerfil(index));
      lista.appendChild(li);
    });
    atualizarEstadoBotaoAdicionar();
  }

/* ========== Ações ========== */
  function deletarPerfil(index) {
    const perfis = obterPerfis();
    if (perfis.length <= 1) {
      alert("Você precisa ter pelo menos um perfil!");
      return;
    }
    perfis.splice(index, 1);
    salvarPerfis(perfis);
    renderizarPerfis();
    renderizarPerfisModal();
  }

  function adicionarPerfil(nome, imagem) {
    const perfis = obterPerfis();
    if (perfis.length >= 8) {
      alert("Limite de perfis atingido!");
      return;
    }
    perfis.push({ nome, imagem });
    salvarPerfis(perfis);
    renderizarPerfis();
    renderizarPerfisModal();
  }

  function atualizarEstadoBotaoAdicionar() {
    const btn = document.querySelector(".btn-adicionar");
    const form = document.getElementById("formAdicionarPerfil");
    if (!btn || !form) return;

    const limite = obterPerfis().length >= 8;
    btn.disabled = limite;
    btn.textContent = limite ? "Limite atingido" : "Adicionar Perfil";
    form.style.pointerEvents = limite ? "none" : "auto";
    form.style.opacity = limite ? "0.6" : "1";
  }

  function abrirModal() {
    document.getElementById("modalOverlay").classList.add("ativo");
    document.getElementById("modalGerenciar").classList.add("ativo");
    renderizarPerfisModal();
  }

  function fecharModal() {
    document.getElementById("modalOverlay").classList.remove("ativo");
    document.getElementById("modalGerenciar").classList.remove("ativo");
    document.getElementById("formAdicionarPerfil").reset();
    document.getElementById("previewImagem").innerHTML = "";
  }

  document.getElementById("imagemURL")?.addEventListener("input", function () {
    if (this.value) {
      document.getElementById("previewImagem").innerHTML = `<img src="${this.value}" alt="Preview" />`;
    }
  });

  document.getElementById("imagemFile")?.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById("previewImagem").innerHTML = `<img src="${event.target.result}" alt="Preview" />`;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("formAdicionarPerfil")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomePerfil").value.trim();
    const url = document.getElementById("imagemURL").value;
    const file = document.getElementById("imagemFile").files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        adicionarPerfil(nome, ev.target.result);
        fecharModal();
      };
      reader.readAsDataURL(file);
    } else if (url) {
      adicionarPerfil(nome, url);
      fecharModal();
    }
  });

  document.getElementById("btnGerenciar")?.addEventListener("click", abrirModal);
  document.getElementById("btnFecharModal")?.addEventListener("click", fecharModal);
  document.getElementById("modalOverlay")?.addEventListener("click", fecharModal);

  renderizarPerfis();
});