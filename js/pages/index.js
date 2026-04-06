     // ============================================
      // Gerenciamento de Perfis com localStorage
      // ============================================

      // Perfis padrão
      const perfisPadroes = [
        {
          nome: "João",
          imagem:
            "https://i.pinimg.com/736x/8b/cd/c9/8bcdc9a84725237563a196342e805b5c.jpg",
        },
        {
          nome: "José",
          imagem:
            "https://i.pinimg.com/736x/70/d6/ad/70d6ad449de525476989a2d916f79fb4.jpg",
        },
        {
          nome: "Maria",
          imagem:
            "https://i.pinimg.com/736x/7c/ee/48/7cee48f8cc775c1f4c25f45d37db164a.jpg",
        },
        {
          nome: "Amanda",
          imagem:
            "https://i.pinimg.com/1200x/1a/f3/70/1af3701f6cee4157e1b8d8b82123ca6d.jpg",
        },
      ];

      // Inicializar localStorage se vazio
      function inicializarPerfis() {
        if (!localStorage.getItem("perfis")) {
          localStorage.setItem("perfis", JSON.stringify(perfisPadroes));
        }
      }

      // Obter perfis do localStorage
      function obterPerfis() {
        return JSON.parse(localStorage.getItem("perfis")) || [];
      }

      // Salvar perfis no localStorage
      function salvarPerfis(perfis) {
        localStorage.setItem("perfis", JSON.stringify(perfis));
      }

      // Renderizar perfis na página principal
      function renderizarPerfis() {
        const perfis = obterPerfis();
        const profilesList = document.getElementById("profilesList");
        profilesList.innerHTML = "";

        perfis.forEach((perfil) => {
          const li = document.createElement("li");
          li.className = "profile";
          li.innerHTML = `
            <a href="home.html">
              <img src="${perfil.imagem}" alt="${perfil.nome}" />
              <p>${perfil.nome}</p>
            </a>
          `;

          li.querySelector("a").addEventListener("click", (e) => {
            localStorage.setItem("perfilAtivo", JSON.stringify(perfil));
          });

          profilesList.appendChild(li);
        });
      }

      // Renderizar perfis no modal
      function renderizarPerfisModal() {
        const perfis = obterPerfis();
        const perfisGerenciar = document.getElementById("perfisGerenciar");
        perfisGerenciar.innerHTML = "";

        perfis.forEach((perfil, index) => {
          const li = document.createElement("li");
          li.className = "perfil-item-gerenciar";
          li.innerHTML = `
            <div class="perfil-info">
              <img src="${perfil.imagem}" alt="${perfil.nome}" />
              <span>${perfil.nome}</span>
            </div>
            <button type="button" class="btn-deletar" data-index="${index}">Deletar</button>
          `;

          li.querySelector(".btn-deletar").addEventListener("click", () => {
            deletarPerfil(index);
          });

          perfisGerenciar.appendChild(li);
        });

        // Atualizar estado do botão adicionar baseado no limite
        atualizarEstadoBotaoAdicionar();
      }

      // Deletar perfil
      function deletarPerfil(index) {
        const perfis = obterPerfis();
        if (perfis.length > 1) {
          perfis.splice(index, 1);
          salvarPerfis(perfis);
          renderizarPerfis();
          renderizarPerfisModal();
        } else {
          alert("Você precisa ter pelo menos um perfil!");
        }
      }

      // Adicionar novo perfil
      function adicionarPerfil(nome, imagem) {
        const perfis = obterPerfis();

        // Verificar limite de 8 perfis
        if (perfis.length >= 8) {
          alert(
            "Limite de 8 perfis atingido! Delete um perfil para adicionar um novo.",
          );
          return;
        }

        perfis.push({ nome, imagem });
        salvarPerfis(perfis);
        renderizarPerfis();
        renderizarPerfisModal();
      }

      // Atualizar estado do botão adicionar baseado no limite
      function atualizarEstadoBotaoAdicionar() {
        const perfis = obterPerfis();
        const btnAdicionar = document.querySelector(".btn-adicionar");
        const formAdicionarPerfil = document.getElementById(
          "formAdicionarPerfil",
        );

        if (perfis.length >= 8) {
          btnAdicionar.disabled = true;
          btnAdicionar.style.opacity = "0.5";
          btnAdicionar.style.cursor = "not-allowed";
          btnAdicionar.textContent = "Limite de perfis atingido";
          formAdicionarPerfil.style.opacity = "0.6";
          formAdicionarPerfil.style.pointerEvents = "none";
        } else {
          btnAdicionar.disabled = false;
          btnAdicionar.style.opacity = "1";
          btnAdicionar.style.cursor = "pointer";
          btnAdicionar.textContent = "Adicionar Perfil";
          formAdicionarPerfil.style.opacity = "1";
          formAdicionarPerfil.style.pointerEvents = "auto";
        }
      }

      // Abrir modal
      function abrirModal() {
        document.getElementById("modalOverlay").classList.add("ativo");
        document.getElementById("modalGerenciar").classList.add("ativo");
        renderizarPerfisModal();
        atualizarEstadoBotaoAdicionar();
      }

      // Fechar modal
      function fecharModal() {
        document.getElementById("modalOverlay").classList.remove("ativo");
        document.getElementById("modalGerenciar").classList.remove("ativo");
        limparFormulario();
      }

      // Limpar formulário
      function limparFormulario() {
        document.getElementById("formAdicionarPerfil").reset();
        document.getElementById("previewImagem").innerHTML = "";
      }

      // Preview de imagem
      document
        .getElementById("imagemURL")
        .addEventListener("change", function () {
          if (this.value) {
            document.getElementById("previewImagem").innerHTML =
              `<img src="${this.value}" alt="Preview" />`;
          }
        });

      document
        .getElementById("imagemFile")
        .addEventListener("change", function (e) {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
              document.getElementById("previewImagem").innerHTML =
                `<img src="${event.target.result}" alt="Preview" />`;
            };
            reader.readAsDataURL(file);
          }
        });

      // Enviar formulário
      document
        .getElementById("formAdicionarPerfil")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const nome = document.getElementById("nomePerfil").value;
          const imagemURL = document.getElementById("imagemURL").value;
          const imagemFile = document.getElementById("imagemFile").files[0];

          if (!nome) {
            alert("Digite um nome para o perfil!");
            return;
          }

          if (imagemFile) {
            const reader = new FileReader();
            reader.onload = function (event) {
              adicionarPerfil(nome, event.target.result);
              limparFormulario();
            };
            reader.readAsDataURL(imagemFile);
          } else if (imagemURL) {
            adicionarPerfil(nome, imagemURL);
            limparFormulario();
          } else {
            alert("Adicione uma imagem (URL ou arquivo)!");
            return;
          }
        });

      // Event listeners
      document
        .getElementById("btnGerenciar")
        .addEventListener("click", abrirModal);
      document
        .getElementById("btnFecharModal")
        .addEventListener("click", fecharModal);
      document
        .getElementById("modalOverlay")
        .addEventListener("click", fecharModal);

      // Inicializar
      inicializarPerfis();
      renderizarPerfis();