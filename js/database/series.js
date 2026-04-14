// BANCO DE DADOS DOS SERIES
const series = {
  "fallout": {
    id: "fallout",
    titulo: "Fallout",
    imagem: "assets/img/pastaseries/fallout.jpg",
    capa: "/assets/img/capa/fallout-capa.jpg",
    tempo: "1 Temporada",
    ano: "2024",
    genero: ["Ação", "Aventura", "Sci-Fi", "Drama"],
    dataGenre: "sci-fi acao aventura drama",
    descricao: "200 anos após o apocalipse, os habitantes dos luxuosos refúgios nucleares são forçados a retornar à paisagem infernal irradiada que seus ancestrais deixaram para trás — e ficam chocados ao descobrir um universo incrivelmente complexo e alegremente estranho esperando por eles.",
    
    elenco: [
      { ator: "Ella Purnell", personagem: "Lucy MacLean" },
      { ator: "Aaron Moten", personagem: "Maximus" },
      { ator: "Walton Goggins", personagem: "The Ghoul / Cooper Howard" },
      { ator: "Kyle MacLachlan", personagem: "Hank MacLean" }
    ],

temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "O Fim", 
          "O Alvo", 
          "A Cabeça", 
          "Os Degenerados", 
          "O Passado", 
          "A Armadilha", 
          "O Rádio", 
          "O Início"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/0kQ8i2Vp_lg",
      info: [
        { titulo: "Criadores", valor: "Graham Wagner • Geneva Robertson-Dworet" },
        { titulo: "Produtores Executivos", valor: "Jonathan Nolan • Lisa Joy" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Alemão" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Amazon MGM Studios • Bethesda" },
        { titulo: "Baseado em", valor: "Franquia de jogos Fallout" },
        { titulo: "Locais de Filmagem", valor: "Namíbia, Nova York, Utah" },
        { titulo: "Status", valor: "Renovada para a 2ª Temporada" },
        { titulo: "Distribuição", valor: "Prime Video" }
      ],
      funFacts: [
        "A série é canônica dentro do universo dos jogos, ou seja, os eventos acontecem na mesma linha do tempo oficial da Bethesda.",
        "O diretor Jonathan Nolan é um grande fã dos jogos e afirmou que 'Fallout 3' quase destruiu sua carreira porque ele não parava de jogar.",
        "Muitos dos cenários são reais; a produção usou a cidade fantasma de Kolmanskop, na Namíbia, para as cenas do deserto pós-apocalíptico."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 450.000+ avaliações",
      reviews: [
        {
          autor: "IGN Brasil",
          texto: "A melhor adaptação de um videogame já feita. Captura perfeitamente o tom de humor ácido e violência dos jogos."
        },
        {
          autor: "Omelete",
          texto: "Ella Purnell e Walton Goggins estão incríveis. Uma série que agrada fãs e novatos."
        },
        {
          autor: "vault_dweller_76",
          texto: "Os detalhes dos cenários, os Pip-Boys e as Power Armors são idênticos aos dos jogos. Nota 10!"
        }
      ]
    },

    mas: [
      { titulo: "The Last of Us", ano: "2023" },
      { titulo: "Westworld", ano: "2016" },
      { titulo: "The Boys", ano: "2019" },
      { titulo: "The Witcher", ano: "2019" },
      { titulo: "The Mandalorian", ano: "2019" },
      { titulo: "Twisted Metal", ano: "2023" }
    ]
},
  "arcane": {
    id: "arcane",
    titulo: "Arcane",
    imagem: "assets/img/pastaseries/arcane.jpg",
    capa: "/assets/img/capa/arcane-capa.jpg",
    tempo: "2 Temporadas",
    ano: "2021",
    genero: ["Animação", "Ação", "Aventura", "Sci-Fi", "Drama"],
    dataGenre: "animacao acao aventura fantasia sci-fi",
    descricao: "Em meio ao conflito entre as cidades de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra de tecnologias mágicas e convicções incompatíveis.",
    
    elenco: [
      { ator: "Hailee Steinfeld", personagem: "Vi" },
      { ator: "Ella Purnell", personagem: "Jinx / Powder" },
      { ator: "Kevin Alejandro", personagem: "Jayce" },
      { ator: "Harry Lloyd", personagem: "Viktor" },
      { ator: "Jason Spisak", personagem: "Silco" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Entrando na brincadeira", 
          "Alguns mistérios não devem ser desvendados", 
          "A violência é essencial para a mudança", 
          "Feliz Dia do Progresso!", 
          "Todos querem ser meus inimigos", 
          "Quando estas paredes desmoronarem", 
          "O salvador do rapaz", 
          "Azeite e água", 
          "O monstro que criaste"
        ] 
      },

      { 
        numero: "Temporada 2", 
        capitulos: [
          "O Peso da Coroa", 
          "Ver Tudo a Arder", 
          "Finalmente Acertaste no Nome", 
          "Pinta a Cidade de Azul", 
          "Bolhas e Rochas", 
          "A Mensagem Escondida no Padrão", 
          "Fingir que é a Primeira Vez", 
          "Matar é um Ciclo", 
          "A Terra Sob as Tuas Unhasd"
        ] 

      },
    ],

    trailer: {
      url: "https://www.youtube.com/embed/fXmAurh012s",
      info: [
        { titulo: "Criadores", valor: "Christian Linke • Alex Yee" },
        { titulo: "Estúdio de Animação", valor: "Fortiche Production" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês, Japonês" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Riot Games • Netflix" },
        { titulo: "Baseado em", valor: "League of Legends (LoL)" },
        { titulo: "Prêmios", valor: "Vencedor de 4 Primetime Emmy Awards" },
        { titulo: "Status", valor: "Finalizada na 2ª Temporada" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A série levou cerca de 6 anos para ser produzida, devido ao nível extremo de detalhamento da animação feita pelo estúdio francês Fortiche.",
        "A trilha sonora conta com a banda Imagine Dragons, que já havia colaborado com a Riot Games anteriormente na música 'Warriors'.",
        "Diferente de muitas adaptações, Arcane foi aclamada tanto por jogadores veteranos quanto por pessoas que nunca jogaram League of Legends."
      ]
    },

    resenha: {
      nota: "⭐ 5.0 / 5 — Baseado em 600.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Visualmente arrebatadora. Arcane eleva o padrão das animações para um nível quase inalcançável."
        },
        {
          autor: "Omelete",
          texto: "Uma tragédia shakespeariana moderna. O desenvolvimento da relação entre Vi e Jinx é doloroso e brilhante."
        },
        {
          autor: "zaun_rebel",
          texto: "Silco é um dos melhores vilões já escritos. Eu não esperava sentir empatia por ele."
        }
      ]
    },

    mas: [
      { titulo: "Cyberpunk: Edgerunners", ano: "2022" },
      { titulo: "Castlevania", ano: "2017" },
      { titulo: "The Legend of Vox Machina", ano: "2022" },
      { titulo: "Blue Eye Samurai", ano: "2023" },
      { titulo: "Invincible", ano: "2021" }
    ]
},

  "peaky_blinders:_sangue,_apostas_e_navalhas": {
    id: "peaky_blinders:_sangue,_apostas_e_navalhas",
    titulo: "Peaky Blinders(serie)",
    imagem: "assets/img/pastaseries/peaky-blinders.jpg",
    capa: "/assets/img/capa/peakyblinderscapa1.jpg",
    tempo: "6 Temporadas",
    ano: "2013 - 2022",
    genero: ["Crime", "Drama", "Histórico", "ação"],
    dataGenre: "crime drama historico acao",
    descricao: "Uma família de gângsteres da Inglaterra de 1919 é liderada por Tommy Shelby, um perigoso chefe criminoso que está disposto a subir no mundo a qualquer preço.",
    
    elenco: [
      { ator: "Cillian Murphy", personagem: "Thomas Shelby" },
      { ator: "Helen McCrory", personagem: "Polly Gray" },
      { ator: "Paul Anderson", personagem: "Arthur Shelby" },
      { ator: "Sophie Rundle", personagem: "Ada Thorne" },
      { ator: "Tom Hardy", personagem: "Alfie Solomons" },
      { ator: "Anya Taylor-Joy", personagem: "Gina Gray" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["Episódio 1", "Episódio 2", "Episódio 3", "Episódio 4", "Episódio 5", "Episódio 6"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["Episódio 1", "Episódio 2", "Episódio 3", "Episódio 4", "Episódio 5", "Episódio 6"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Episódio 1", "Episódio 2", "Episódio 3", "Episódio 4", "Episódio 5", "Episódio 6"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["A Carência", "Selvagens", "Melro", "Atrevimento", "O Comboio", "A Companhia"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["Terça-Feira Negra", "Revelações", "Estratégia", "A Alça", "O Choque", "O Sr. Jones"] 
      },
      { 
        numero: "Temporada 6", 
        capitulos: ["Tabu", "Camisa Preta", "Ouro", "Safira", "O Caminho do Mal", "Chave de Ouro"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/oVzVdvGIC7U",
      info: [
        { titulo: "Criador", valor: "Steven Knight" },
        { titulo: "Trilha Sonora", valor: "Nick Cave and the Bad Seeds" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "BBC • Caryn Mandabach Productions" },
        { titulo: "Local de Produção", valor: "Birmingham, Liverpool, Manchester (UK)" },
        { titulo: "Status", valor: "Finalizada (Filme em produção)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A gangue Peaky Blinders realmente existiu em Birmingham, mas eles operavam no final do século XIX, e não após a 1ª Guerra Mundial como na série.",
        "Cillian Murphy, que interpreta Tommy Shelby, estima ter fumado mais de 3.000 cigarros de ervas por temporada para o papel.",
        "O corte de cabelo icônico da série tornou-se uma tendência mundial, apesar de os atores inicialmente odiarem o estilo."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 800.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma aula de estilo, atuação e roteiro. Cillian Murphy entrega uma das melhores performances da TV."
        },
        {
          autor: "Omelete",
          texto: "A trilha sonora anacrônica e a fotografia impecável tornam Peaky Blinders uma experiência única."
        },
        {
          autor: "shelby_fan_br",
          texto: "Frio e calculista! A evolução do Tommy de um gângster de rua para um político é brilhante."
        }
      ]
    },

    mas: [
      { titulo: "Boardwalk Empire", ano: "2010" },
      { titulo: "The Godfather", ano: "1972" },
      { titulo: "Sons of Anarchy", ano: "2008" },
      { titulo: "Breaking Bad", ano: "2008" },
      { titulo: "Taboo", ano: "2017" }
    ]
},

  "dark": {
    id: "dark",
    titulo: "Dark",
    imagem: "assets/img/pastaseries/dark.jpg",
    capa: "/assets/img/capa/dark-capa.jpg",
    tempo: "3 Temporadas",
    ano: "2017 - 2020",
    genero: ["Ficção Científica", "Suspense", "Mistério", "Drama"],
    dataGenre: "misterio suspense sci-fi drama",
    descricao: "O desaparecimento de duas crianças em uma cidade alemã traz à tona as relações fraturadas, as vidas duplas e o passado sombrio de quatro famílias, revelando um mistério que abrange três gerações.",
    
    elenco: [
      { ator: "Louis Hofmann", personagem: "Jonas Kahnwald" },
      { ator: "Lisa Vicari", personagem: "Martha Nielsen" },
      { ator: "Oliver Masucci", personagem: "Ulrich Nielsen" },
      { ator: "Maja Schöne", personagem: "Hannah Kahnwald" },
      { ator: "Karoline Eichhorn", personagem: "Charlotte Doppler" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Segredos", 
          "Mentiras", 
          "Passado e Presente", 
          "Vidas Duplas", 
          "Verdades", 
          "Sic Mundus Creatus Est", 
          "Encruzilhadas", 
          "O que se planta, se colhe", 
          "Tudo é Agora", 
          "Alfa e Ômega"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Começo e Fim", 
          "Matéria Escura", 
          "Fantasmas", 
          "Os Viajantes", 
          "Achados e Perdidos", 
          "Um Ciclo Infinito", 
          "O Diabo Branco", 
          "Finais e Começos"
        ] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: [
          "Déjà-vu", 
          "Os Sobreviventes", 
          "Adão e Eva", 
          "A Origem", 
          "Vida e Morte", 
          "Luz e Sombra", 
          "Entre o Tempo", 
          "O Paraíso"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/rrwycJ08PSA",
      info: [
        { titulo: "Criadores", valor: "Baran bo Odar • Jantje Friese" },
        { titulo: "Idioma Original", valor: "Alemão" },
        { titulo: "Idiomas Disponíveis", valor: "Alemão, Português (BR), Inglês, Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Wiedemann & Berg Television" },
        { titulo: "Local de Produção", valor: "Berlim, Brandemburgo (Alemanha)" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Conceito", valor: "Viagem no Tempo e Determinismo" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A série foi planejada desde o início para ter exatamente três temporadas, espelhando o conceito do 'Nó de Trinity' e os ciclos de 33 anos.",
        "A maioria das cenas de floresta foi filmada em um antigo campo de tiro militar nos arredores de Berlim.",
        "O ator que interpreta o 'Estranho' e o ator que interpreta o Jonas jovem não se conheciam, mas foram escolhidos por terem características físicas extremamente semelhantes."
      ]
    },

    resenha: {
      nota: "⭐ 5.0 / 5 — Baseado em 750.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um quebra-cabeça brilhante. Dark exige atenção total e recompensa o espectador com uma trama impecável."
        },
        {
          autor: "Omelete",
          texto: "A melhor série de ficção científica da Netflix. Atmosférica, sombria e filosoficamente profunda."
        },
        {
          autor: "time_travel_geek",
          texto: "O final é perfeito. Tudo se encaixa de uma forma que te deixa pensando por dias."
        }
      ]
    },

    mas: [
      { titulo: "1899", ano: "2022" },
      { titulo: "Stranger Things", ano: "2016" },
      { titulo: "Interstellar", ano: "2014" },
      { titulo: "The OA", ano: "2016" },
      { titulo: "Coherence", ano: "2013" }
    ]
},

  "you": {
    id: "you",
    titulo: "You",
    imagem: "assets/img/pastaseries/you.jpg", 
    capa: "/assets/img/capa/you-capa.jpg",       
    tempo: "4 Temporadas",                   
    ano: "2018 - Present",
    genero: ["Crime", "Drama", "Thriller"],
    dataGenre: "drama misterio suspense",
    descricao: "Um gerente de livraria fica obcecado por uma aspirante a escritora e usa as redes sociais para se aproximar dela, eliminando qualquer obstáculo em seu caminho.",
    
    elenco: [
      { ator: "Penn Badgley", personagem: "Joe Goldberg" },
      { ator: "Victoria Pedretti", personagem: "Love Quinn" },
      { ator: "Elizabeth Lail", personagem: "Guinevere Beck" }
    ],

    // AQUI ESTÁ A PARTE DAS TEMPORADAS
    temporadas_detalhes: [
{ 
        numero: "Temporada 1", 
        capitulos: [
          "Piloto", "O Último de Nova York", "Talvez", "O Capitão", "Vivendo com o Inimigo", 
          "Amor Amargo", "Tudo é Possível", "Eu te Amo, Joe", "Corações Partidos", "O Castelo de Barba Azul"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Um Novo Começo", "Apenas o Joe", "O Que São Amigos?", "O Bom, o Mau e o Hendy", 
          "O Fim de Semana do Bem-Estar", "Adeus, Minha Coelhinha", "Crise de Identidade", 
          "Pavor e Delírio em Beverly Hills", "Joe Goldberg é um Homem de Sorte", "Amor de Verdade"
        ] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: [
          "E Viveram Felizes para Sempre", "Casei com uma Assassina", "A Síndrome da Mulher Desaparecida", 
          "O Clube da Luta de Madre Linda", "Noite de Caça", "Wombat", "Tudo é Novo sob o Sol", 
          "Vencer ou Perder", "Relação Aberta", "E o que Sobrou?"
        ] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: [
          "Férias de Verão", "Retrato do Artista", "Coma os Ricos", "Hampsie", "A Raposa e o Cão", 
          "Melhor Amigo", "Bom Homem, Mundo Cruel", "Cadê você, Joe?", "Ela não está lá", "A Morte de Jonathan Moore"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/exemplo-trailer-you",
      info: [
        { titulo: "Creator", valor: "Greg Berlanti • Sera Gamble" },
        { titulo: "Original Network", valor: "Lifetime • Netflix" },
        { titulo: "Total Episodes", valor: "40 Episodes" },
        { titulo: "Status", valor: "Renewed for Final Season" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Studio", valor: "Warner Bros. Television" },
        { titulo: "Based on", valor: "You by Caroline Kepnes" },
        { titulo: "Filming Locations", valor: "New York, Los Angeles, London" },
        { titulo: "Original Language", valor: "English" }
      ],
      funFacts: [
        "Penn Badgley quase recusou o papel por achar o personagem Joe muito perturbador.",
        "A série começou no canal Lifetime antes de se tornar um fenômeno global na Netflix.",
        "Stephen King é um fã declarado dos livros que deram origem à série."
      ]
    },

    resenha: {
      nota: "⭐ 4.5 / 5 — Based on 8,900 viewer ratings",
      reviews: [
        { autor: "TV Guide", texto: "Joe Goldberg is the villain we love to hate." },
        { autor: "Netflix Fan", texto: "Assustadoramente bom!" }
      ]
    },

    mas: [
      { titulo: "Dexter", ano: "2006" },
      { titulo: "Gossip Girl", ano: "2007" },
      { titulo: "The Flight Attendant", ano: "2020" }
    ]
},

  "o_jogo_da_morte_(death's_game)": {
    id: "o_jogo_da_morte_(death's_game)",
    titulo: "O Jogo da Morte (Death's Game)",
    imagem: "assets/img/pastaseries/deaths-game.jpg",
    capa: "/assets/img/capa/deaths-game-capa.jpg",
    tempo: "1 Temporada",
    ano: "2023 - 2024",
    genero: ["Fantasia", "Suspense", "Drama", "Thriller"],
    dataGenre: "kdrama drama fantasia suspense thriller ",
    descricao: "Após tirar a própria vida, Choi Yee-jae é punido pela própria Morte. Ele é condenado a reencarnar 12 vezes em corpos diferentes, prestes a morrer. Se conseguir evitar a morte em qualquer uma dessas vidas, ele poderá viver o resto de seus dias naquele corpo.",
    
    elenco: [
      { ator: "Seo In-guk", personagem: "Choi Yee-jae" },
      { ator: "Park So-dam", personagem: "Morte" },
      { ator: "Kim Ji-hoon", personagem: "Park Tae-u" },
      { ator: "Choi Si-won", personagem: "Park Jin-tae" },
      { ator: "Lee Do-hyun", personagem: "Jang Geon-u" },
      { ator: "Go Youn-jung", personagem: "Lee Ji-su" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Morte", 
          "Por que Você vai para o Inferno?", 
          "A Morte não Pode Tirar Nada", 
          "O Motivo de Você ter Medo da Morte", 
          "É Impossível Romper com a Morte e Lutar", 
          "Memórias", 
          "Oportunidade", 
          "Não Procure pela Morte, a Morte Virá Buscar Você"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/fA5Z9Z-5L8s",
      info: [
        { titulo: "Diretor", valor: "Ha Byung-hoon" },
        { titulo: "Baseado em", valor: "Webtoon 'I'll Die Soon'" },
        { titulo: "Idiomas Disponíveis", valor: "Coreano, Português (BR), Inglês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "TVING • SLL" },
        { titulo: "Local de Produção", valor: "Coreia do Sul" },
        { titulo: "Status", valor: "Minissérie Finalizada" },
        { titulo: "Idioma Original", valor: "Coreano" },
        { titulo: "Distribuição", valor: "Prime Video" }
      ],
      funFacts: [
        "A série conta com um elenco de estrelas, onde cada ator interpreta uma das reencarnações do protagonista, mantendo a mesma alma em corpos diferentes.",
        "Park So-dam, que interpreta a Morte, filmou este drama após se recuperar de um câncer papilífero de tireoide, marcando seu retorno triunfante às telas.",
        "A produção é famosa por suas cenas de ação de nível cinematográfico, especialmente as perseguições de moto e sequências de queda livre."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 300.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma lição de vida disfarçada de suspense frenético. Death's Game é profundo, visceral e visualmente impecável."
        },
        {
          autor: "K-Drama_Zone",
          texto: "O roteiro é brilhante. A forma como todas as 12 vidas se conectam no final é de explodir a cabeça."
        },
        {
          autor: "dorameira_expert",
          texto: "Prepare o lenço para os episódios finais. É muito mais do que apenas um jogo, é sobre o valor da vida."
        }
      ]
    },

    mas: [
      { titulo: "Alchemy of Souls", ano: "2022" },
      { titulo: "Tomorrow", ano: "2022" },
      { titulo: "All of Us Are Dead", ano: "2022" },
      { titulo: "Move to Heaven", ano: "2021" },
      { titulo: "Hotel Del Luna", ano: "2019" }
    ]
},

  "stranger_things": {
    id: "stranger_things",
    titulo: "Stranger Things",
    imagem: "assets/img/pastaseries/stranger-things.jpg",
    capa: "/assets/img/capa/stranger-things-capa.jpg",
    tempo: "4 Temporadas",
    ano: "2016 - Presente",
    genero: ["Ficção Científica", "Terror", "Drama", "Fantasia"],
    dataGenre: "drama sci-fi terror misterio suspense",
    descricao: "Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais aterrorizantes e uma estranha garotinha.",
    
    elenco: [
      { ator: "Millie Bobby Brown", personagem: "Eleven" },
      { ator: "Finn Wolfhard", personagem: "Mike Wheeler" },
      { ator: "Winona Ryder", personagem: "Joyce Byers" },
      { ator: "David Harbour", personagem: "Jim Hopper" },
      { ator: "Gaten Matarazzo", personagem: "Dustin Henderson" },
      { ator: "Sadie Sink", personagem: "Max Mayfield" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "O Desaparecimento de Will Byers", 
          "A Estranha da Maple Street", 
          "Caras de Natal", 
          "O Corpo", 
          "A Pulga e o Acrobata", 
          "O Monstro", 
          "A Banheira", 
          "O Mundo Invertido"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Madmax", 
          "Gostosuras ou Travessuras, Aberração", 
          "O Girino", 
          "Will, o Sábio", 
          "Dig Dug", 
          "O Espião", 
          "A Irmã Perdida", 
          "O Devorador de Mentes", 
          "O Portal"
        ] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: [
          "Está me Ouvindo, Suzie?", 
          "O Caso dos Ratos", 
          "A Salva-Vidas Desaparecida", 
          "A Prova do Sauna", 
          "O Devorado", 
          "E Pluribus Unum", 
          "A Mordida", 
          "A Batalha de Starcourt"
        ] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: [
          "O Clube Hellfire", 
          "A Maldição de Vecna", 
          "O Monstro e a Super-heroína", 
          "Querido Billy", 
          "O Projeto Nina", 
          "Mergulho", 
          "O Massacre no Laboratório de Hawkins", 
          "Papai", 
          "O Plano de Onze"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/mnd7sUp5qRE",
      info: [
        { titulo: "Criadores", valor: "The Duffer Brothers" },
        { titulo: "Trilha Sonora", valor: "Kyle Dixon • Michael Stein" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "35+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "21 Laps Entertainment • Monkey Massacre" },
        { titulo: "Local de Produção", valor: "Atlanta, Geórgia (EUA)" },
        { titulo: "Status", valor: "Renovada para a 5ª e última temporada" },
        { titulo: "Influências", valor: "Stephen King, Steven Spielberg, John Carpenter" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A série foi rejeitada por mais de 15 emissoras antes da Netflix aceitar o projeto dos irmãos Duffer.",
        "Millie Bobby Brown teve que raspar a cabeça de verdade na primeira temporada, e os diretores a convenceram mostrando o visual de Charlize Theron em Mad Max.",
        "A música 'Running Up That Hill', de Kate Bush, voltou ao topo das paradas mundiais em 2022 após ser o tema central da 4ª temporada."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.300.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "A nostalgia dos anos 80 nunca foi tão bem explorada. Um elenco infantil fenomenal e um roteiro cativante."
        },
        {
          autor: "Omelete",
          texto: "Stranger Things é o maior sucesso da era do streaming por um motivo: personagens que amamos em situações épicas."
        },
        {
          autor: "vecna_stalker",
          texto: "A quarta temporada elevou o nível do terror. Vecna é o melhor vilão que a série já teve."
        }
      ]
    },

    mas: [
      { titulo: "Dark", ano: "2017" },
      { titulo: "Super 8", ano: "2011" },
      { titulo: "The Umbrella Academy", ano: "2019" },
      { titulo: "It: A Coisa", ano: "2017" },
      { titulo: "Locke & Key", ano: "2020" }
    ]
},

  "scarpetta": {
    id: "scarpetta",
    titulo: "Scarpetta",
    imagem: "assets/img/pastaseries/scarpetta.jpg",
    capa: "/assets/img/capa/scarpetta-capa.jpg",
    tempo: "1 Temporada",
    ano: "2026",
    genero: ["Crime", "Drama", "Mistério", "Suspense"],
    dataGenre: "crime drama misterio suspense",
    descricao: "A médica legista Dra. Kay Scarpetta retorna à Virgínia para assumir seu antigo cargo, enfrentando crimes complexos que desafiam a ciência forense e fantasmas de seu próprio passado, enquanto lida com conspirações que ameaçam sua carreira.",
    
    elenco: [
      { ator: "Nicole Kidman", personagem: "Kay Scarpetta" },
      { ator: "Jamie Lee Curtis", personagem: "Dorothy (Irmã de Kay)" },
      { ator: "Ariana DeBose", personagem: "Lucy Farinelli" },
      { ator: "Bobby Cannavale", personagem: "Pete Marino" },
      { ator: "Simon Baker", personagem: "Benton Wesley" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Postmortem", 
          "Corpo de Delito", 
          "Restos Mortais", 
          "Causa da Morte", 
          "Exposição Fatal", 
          "Ponto de Origem", 
          "Alerta Negro", 
          "O Livro dos Mortos"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/ScarpettaTeaser2026",
      info: [
        { titulo: "Showrunner", valor: "Liz Sarnoff" },
        { titulo: "Baseado em", valor: "Série literária de Patricia Cornwell" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Italiano" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Amazon MGM Studios • Blossom Films" },
        { titulo: "Local de Produção", valor: "Nashville, Virgínia (EUA)" },
        { titulo: "Status", valor: "Em Produção / Lançamento 2026" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Prime Video" }
      ],
      funFacts: [
        "Nicole Kidman e Jamie Lee Curtis são também produtoras executivas da série, unindo forças após anos de amizade em Hollywood.",
        "A série literária que inspira a produção possui mais de 26 livros, garantindo material para muitas temporadas futuras.",
        "Diferente de outras séries de perícia, Scarpetta foca no realismo técnico da patologia forense, consultando especialistas reais para os procedimentos."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Expectativa da Crítica",
      reviews: [
        {
          autor: "Hollywood Reporter",
          texto: "A química entre Kidman e Curtis como irmãs rivais é o coração pulsante deste suspense investigativo."
        },
        {
          autor: "Variety",
          texto: "Finalmente uma adaptação à altura do legado de Patricia Cornwell. Sombria, inteligente e necessária."
        },
        {
          autor: "forensic_fan",
          texto: "Li todos os livros e ver a Kay Scarpetta ganhando vida com essa produção é um sonho realizado."
        }
      ]
    },

    mas: [
      { titulo: "Mindhunter", ano: "2017" },
      { titulo: "Bones", ano: "2005" },
      { titulo: "Big Little Lies", ano: "2017" },
      { titulo: "The Silence of the Lambs", ano: "1991" },
      { titulo: "Unbelievable", ano: "2019" }
    ]
},

  "one_piece_(a_série)": {
    id: "one_piece_(a_série)",
    titulo: "One Piece (A Série)",
    imagem: "assets/img/pastaseries/one-piece.jpg",
    capa: "/assets/img/capa/one-piece-capa.jpg",
    tempo: "1 Temporada",
    ano: "2023 - Presente",
    genero: ["Aventura", "Ação", "Fantasia"],
    dataGenre: "fantasia acao aventura",
    descricao: "O jovem pirata Monkey D. Luffy veste o chapéu de palha e escala uma tripulação eclética para uma jornada épica em busca do tesouro em um live-action baseado no popular mangá.",
    
    elenco: [
      { ator: "Iñaki Godoy", personagem: "Monkey D. Luffy" },
      { ator: "Mackenyu", personagem: "Roronoa Zoro" },
      { ator: "Emily Rudd", personagem: "Nami" },
      { ator: "Jacob Romero", personagem: "Usopp" },
      { ator: "Taz Skylar", personagem: "Sanji" },
      { ator: "Vincent Regan", personagem: "Vice-Almirante Garp" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "O Amanhecer de uma Aventura", 
          "O Homem do Chapéu de Palha", 
          "Histórias Contadas", 
          "Os Piratas Estão Chegando", 
          "Venha Comer no Baratie!", 
          "O Chef e o Garçom", 
          "A Garota com a Tatuagem de Peixe-Serra", 
          "O Pior do Leste"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/4Gf_CHeE03Y",
      info: [
        { titulo: "Showrunners", valor: "Matt Owens • Steven Maeda" },
        { titulo: "Criador Original", valor: "Eiichiro Oda" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Japonês, Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Tomorrow Studios • Netflix" },
        { titulo: "Local de Produção", valor: "Cidade do Cabo (África do Sul)" },
        { titulo: "Status", valor: "Renovada para a 2ª Temporada" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "Eiichiro Oda foi produtor executivo e teve poder de veto; ele exigiu que várias cenas fossem regravadas até ficarem perfeitas.",
        "Mackenyu (Zoro) é filho da lenda das artes marciais Sonny Chiba e já possuía experiência real com espadas antes da série.",
        "O navio Going Merry foi construído em tamanho real para as filmagens, em vez de ser apenas computação gráfica."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 250.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "A maldição dos live-actions de anime foi finalmente quebrada. Uma adaptação feita com amor e respeito."
        },
        {
          autor: "Omelete",
          texto: "Iñaki Godoy é a personificação do Luffy. O elenco tem uma química que transborda da tela."
        },
        {
          autor: "nakama_fan",
          texto: "Eu estava com medo, mas a série entregou tudo! O Baratie ficou idêntico ao que eu imaginava."
        }
      ]
    },

    mas: [
      { titulo: "Avatar: The Last Airbender", ano: "2024" },
      { titulo: "Yu Yu Hakusho", ano: "2023" },
      { titulo: "Alice in Borderland", ano: "2020" },
      { titulo: "Cowboy Bebop", ano: "2021" },
      { titulo: "The Witcher", ano: "2019" }
    ]
},

  "boyfriend_on_demand": {
    id: "boyfriend_on_demand",
    titulo: "Boyfriend on Demand",
    imagem: "assets/img/pastaseries/boyfriend-on-demand.jpg",
    capa: "/assets/img/capa/boyfriend-on-demand-capa.jpg",
    tempo: "1 Temporada",
    year: "2019",
    genero: ["Romance", "Comédia", "Web Drama"],
    dataGenre: "kdrama romance comedia fantasia",
    descricao: "Uma jovem decide usar um aplicativo de 'aluguel de namorados' para evitar situações sociais embaraçosas. No entanto, o que começa como um contrato de negócios acaba se tornando confuso quando sentimentos reais começam a surgir entre ela e seu namorado de aluguel.",
    
    elenco: [
      { ator: "Yoon Do-jin", personagem: "Nam Goong-won" },
      { ator: "Kim Shi-kyung", personagem: "Pyo So-yoon" },
      { ator: "Jung Hyuk", personagem: "Park Seo-jun" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "O Início do Aluguel", 
          "Encontro por Contrato", 
          "Ciúmes Inesperados", 
          "A Regra do Não-Beijo", 
          "Segredos do Aplicativo", 
          "Encontro Duplo", 
          "Verdade ou Consequência", 
          "O Fim do Contrato", 
          "Sentimentos Reais", 
          "A Escolha Final"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/BOD_OfficialTrailer",
      info: [
        { titulo: "Formato", valor: "Web Drama" },
        { titulo: "Duração Média", valor: "10-15 minutos por episódio" },
        { titulo: "Idiomas Disponíveis", valor: "Coreano" },
        { titulo: "Legendas", valor: "Português (BR), Inglês, Espanhol" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Lululala Story Lab" },
        { titulo: "Local de Produção", valor: "Seul, Coreia do Sul" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Idioma Original", valor: "Coreano" },
        { titulo: "Distribuição", valor: "YouTube • Viki" }
      ],
      funFacts: [
        "Web dramas como este são extremamente populares na Coreia por serem curtos e perfeitos para assistir durante o trajeto no metrô.",
        "O ator Yoon Do-jin ganhou muita atenção por sua aparência de 'flower boy' após o lançamento desta série.",
        "A série explora a cultura moderna de aplicativos e como as relações sociais na Coreia estão se tornando cada vez mais digitalizadas."
      ]
    },

    resenha: {
      nota: "⭐ 4.5 / 5 — Baseado em 50.000+ avaliações",
      reviews: [
        {
          autor: "MyDramaList",
          texto: "Curto, doce e viciante. Uma ótima opção para quem quer um romance leve sem muito drama pesado."
        },
        {
          autor: "dorameira_sweet",
          texto: "A química dos protagonistas é muito fofa! Queria que os episódios fossem mais longos."
        },
        {
          autor: "kdrama_bites",
          texto: "Perfeito para maratonar em uma tarde. O conceito do aplicativo é bem divertido."
        }
      ]
    },

    mas: [
      { titulo: "Love Playlist", ano: "2017" },
      { titulo: "Best Mistake", ano: "2019" },
      { titulo: "A-TEEN", ano: "2018" },
      { titulo: "My ID is Gangnam Beauty", ano: "2018" },
      { titulo: "Business Proposal", ano: "2022" }
    ]
},

  "young_sherlock": {
    id: "young_sherlock",
    titulo: "Young Sherlock",
    imagem: "assets/img/pastaseries/young-sherlock.jpg",
    capa: "/assets/img/capa/young-sherlock-capa.jpg",
    tempo: "1 Temporada",
    ano: "2025 - Presente",
    genero: ["Mistério", "Crime", "Ação", "Drama"],
    dataGenre: "aventura acao misterio suspense",
    descricao: "Aos 19 anos, Sherlock Holmes é um jovem brilhante, mas sem disciplina, que se vê envolvido em uma conspiração global enquanto investiga um assassinato na Universidade de Oxford. Sem os métodos que o tornariam famoso, ele precisa aprender a confiar em seus instintos para sobreviver ao seu primeiro caso real.",
    
    elenco: [
      { ator: "Hero Fiennes Tiffin", personagem: "Sherlock Holmes" },
      { ator: "Joseph Fiennes", personagem: "Siger Holmes (Pai)" },
      { ator: "Natascha McElhone", personagem: "Violet Holmes (Mãe)" },
      { ator: "Zine Tseng", personagem: "Princess Gulun Yunxi" },
      { ator: "Colin Firth", personagem: "Sir Bucephalus Hodge" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "O Despertar da Mente", 
          "Sombras em Oxford", 
          "O Código de Sangue", 
          "Conspiração Real", 
          "O Labirinto de Vidro", 
          "Herança Maldita", 
          "Xeque-Mate em Londres", 
          "O Início do Legado"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/YoungSherlock2025",
      info: [
        { titulo: "Diretor", valor: "Guy Ritchie" },
        { titulo: "Baseado em", valor: "Livros de Andy Lane" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Motive Pictures • Amazon MGM Studios" },
        { titulo: "Local de Produção", valor: "Reino Unido" },
        { titulo: "Status", valor: "Lançamento em 2025/2026" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Prime Video" }
      ],
      funFacts: [
        "A série é dirigida por Guy Ritchie, que retorna ao universo de Sherlock Holmes após dirigir os filmes estrelados por Robert Downey Jr.",
        "Hero Fiennes Tiffin, o protagonista, é sobrinho na vida real de Joseph Fiennes, que interpreta o pai de Sherlock na série.",
        "Diferente de outras versões, esta série foca em um Sherlock mais físico e impulsivo, antes de ele se tornar o mestre da dedução fria que conhecemos."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Expectativa do Público",
      reviews: [
        {
          autor: "Empire Magazine",
          texto: "Uma reimaginação energética e estilosa. Guy Ritchie traz sua assinatura visual para a juventude de Holmes."
        },
        {
          autor: "Variety",
          texto: "Hero Fiennes Tiffin entrega um Sherlock vulnerável e feroz. A química com o elenco veterano é excelente."
        },
        {
          autor: "detective_lover_22",
          texto: "Finalmente uma série que mostra como o Sherlock aprendeu a lutar e a pensar. Ansioso demais!"
        }
      ]
    },

    mas: [
      { titulo: "Sherlock (BBC)", ano: "2010" },
      { titulo: "Enola Holmes", ano: "2020" },
      { titulo: "The Irregulars", ano: "2021" },
      { titulo: "Elementary", ano: "2012" },
      { titulo: "The Gentlemen", ano: "2024" }
    ]
},

  "the_man_in_the_high_castle": {
    id: "the_man_in_the_high_castle",
    titulo: "The Man in the High Castle",
    imagem: "assets/img/pastaseries/the-man-in-the-high-castle.jpg",
    capa: "/assets/img/capa/the-man-in-the-high-castle-capa.jpg",
    tempo: "4 Temporadas",
    ano: "2015 - 2019",
    genero: ["Ficção Científica", "Drama", "Suspense"],
    dataGenre: "historia drama sci-fi suspense",
    descricao: "Em um mundo onde as Potências do Eixo venceram a Segunda Guerra Mundial, os Estados Unidos foram divididos entre o Grande Reich Alemão e os Estados Japoneses do Pacífico. Em meio à opressão, surge um mistério sobre filmes que mostram uma realidade diferente.",
    
    elenco: [
      { ator: "Alexa Davalos", personagem: "Juliana Crain" },
      { ator: "Rufus Sewell", personagem: "John Smith" },
      { ator: "Luke Kleintank", personagem: "Joe Blake" },
      { ator: "Cary-Hiroyuki Tagawa", personagem: "Nobusuke Tagomi" },
      { ator: "Joel de la Fuente", personagem: "Inspetor Kido" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "O Novo Mundo", "Amanhecer", "A Ilustre Senhora", "Revelações", "A Nova Normalidade", 
          "Três Macacos", "Verdade", "O Fim do Mundo", "Gentileza", "Uma Saída"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "A Toca do Coelho", "O Caminho do Medo", "Viagem de Turista", "Escalada", "Derrubada", 
          "Kintsugi", "Terra de Ninguém", "Mundo Real", "Detonação", "Consequências"
        ] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: [
          "Agora Mais do que Nunca", "Guerreiros de Quiat", "Sensum", "Sabra", "O Novo Colosso", 
          "História", "Excesso", "Kasumi", "Baku", "Ano Zero"
        ] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: [
          "Hexagrama 64", "Cada Porta tem uma Chave", "A Caixa", "Felizes para Sempre", 
          "Mau Auspício", "Toda a Força", "Domínio", "Hitler tem apenas um Testículo", 
          "Para o Alto", "Deuses do Fogo"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/hzz_6dmv03I",
      info: [
        { titulo: "Showrunner", valor: "Frank Spotnitz" },
        { titulo: "Baseado em", valor: "Livro de Philip K. Dick" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Japonês, Alemão" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Amazon Studios • Scott Free Productions" },
        { titulo: "Produção Executiva", valor: "Ridley Scott" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Prime Video" }
      ],
      funFacts: [
        "A série é produzida por Ridley Scott, o mesmo diretor de Blade Runner, que também é baseado em um livro de Philip K. Dick.",
        "A cena de abertura usa a música 'Edelweiss', que se tornou icônica e assustadora dentro do contexto da série.",
        "Para criar o visual de uma Nova York dominada, a produção misturou arquitetura brutalista real com propaganda nazista digitalmente inserida, criando uma estética de pesadelo."
      ]
    },

    resenha: {
      nota: "⭐ 4.6 / 5 — Baseado em 400.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma aula de construção de mundo. É aterrorizante ver como o cotidiano seria moldado sob regimes totalitários."
        },
        {
          autor: "Omelete",
          texto: "Rufus Sewell entrega uma das melhores atuações da TV como John Smith, um vilão extremamente complexo."
        },
        {
          autor: "sci_fi_lover",
          texto: "A trama das realidades alternativas e os filmes é o que me prendeu do começo ao fim. Recomendo muito!"
        }
      ]
    },

    mas: [
      { titulo: "The Handmaid's Tale", ano: "2017" },
      { titulo: "Dark", ano: "2017" },
      { titulo: "11.22.63", ano: "2016" },
      { titulo: "Blade Runner 2049", ano: "2017" },
      { titulo: "Westworld", ano: "2016" }
    ]
},

  "alice_in_borderland": {
    id: "alice_in_borderland",
    titulo: "Alice in Borderland",
    imagem: "assets/img/pastaseries/alice-in-borderland.jpg",
    capa: "/assets/img/capa/alice-in-borderland-capa.jpg",
    tempo: "2 Temporadas",
    ano: "2020 - Presente",
    genero: ["Suspense", "Ficção Científica", "Ação", "Drama"],
    dataGenre: "kdrama sci-fi misterio suspense drama",
    descricao: "Um jovem viciado em videogames e seus dois amigos são transportados para uma versão paralela e deserta de Tóquio, onde são forçados a competir em jogos perigosos para sobreviver.",
    
    elenco: [
      { ator: "Kento Yamazaki", personagem: "Ryohei Arisu" },
      { ator: "Tao Tsuchiya", personagem: "Yuzuha Usagi" },
      { ator: "Nijiro Murakami", personagem: "Shuntaro Chishiya" },
      { ator: "Ayaka Miyoshi", personagem: "Ann Rizuna" },
      { ator: "Dori Sakurada", personagem: "Suguru Niragi" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Episódio 1", 
          "Episódio 2", 
          "Episódio 3", 
          "Episódio 4", 
          "Episódio 5", 
          "Episódio 6", 
          "Episódio 7", 
          "Episódio 8"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Episódio 1", 
          "Episódio 2", 
          "Episódio 3", 
          "Episódio 4", 
          "Episódio 5", 
          "Episódio 6", 
          "Episódio 7", 
          "Episódio 8"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/49_44FFKZ1M",
      info: [
        { titulo: "Diretor", valor: "Shinsuke Sato" },
        { titulo: "Baseado em", valor: "Mangá de Haro Aso" },
        { titulo: "Idiomas Disponíveis", valor: "Japonês, Português (BR), Inglês" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Robot Communications" },
        { titulo: "Local de Produção", valor: "Tóquio, Japão" },
        { titulo: "Status", valor: "Renovada para a 3ª Temporada" },
        { titulo: "Idioma Original", valor: "Japonês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A cena icônica do Cruzamento de Shibuya totalmente deserto foi filmada em um set gigante construído ao ar livre na cidade de Ashikaga, a quilômetros de Tóquio.",
        "Diferente de Round 6, os jogos em Alice in Borderland são divididos por naipes de cartas: Espadas (Força), Paus (Trabalho em equipe), Ouros (Inteligência) e Copas (Psicológico/Traição).",
        "A 2ª temporada adaptou o restante do mangá original, mas a Netflix confirmou uma 3ª temporada com uma história inédita focada na carta do Coringa."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 480.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Visualmente impecável e desesperador. Uma das melhores adaptações de mangá já feitas para a TV."
        },
        {
          autor: "Omelete",
          texto: "Os jogos mentais do Chishiya são o ponto alto da segunda temporada. Roteiro inteligente e tenso."
        },
        {
          autor: "survival_expert",
          texto: "O jogo do Sete de Copas na primeira temporada é uma das coisas mais tristes e viscerais que já vi."
        }
      ]
    },

    mas: [
      { titulo: "Squid Game", ano: "2021" },
      { titulo: "Sweet Home", ano: "2020" },
      { titulo: "Gantz", ano: "2004" },
      { titulo: "The 8 Show", ano: "2024" },
      { titulo: "Darwin's Game", ano: "2020" }
    ]
},

  "the_pitt": {
    id: "the_pitt",
    titulo: "The Pitt",
    imagem: "assets/img/pastaseries/the-pitt.jpg",
    capa: "/assets/img/capa/the-pitt-capa.jpg",
    tempo: "1 Temporada",
    ano: "2025 - 2026",
    genero: ["Drama", "Médico"],
    dataGenre: "drama medico",
    descricao: "Um olhar realista e contemporâneo sobre os desafios enfrentados por profissionais de saúde em um hospital de Pittsburgh. A série explora os dilemas éticos, a pressão extrema do sistema de saúde moderno e as vidas heróicas daqueles que trabalham na linha de frente.",
    
    elenco: [
      { ator: "Noah Wyle", personagem: "Dr. Michael Robinavitch" },
      { ator: "Tracy Ifeachor", personagem: "Dra. Sola" },
      { ator: "Patrick Ball", personagem: "Frank" },
      { ator: "Supriya Ganesh", personagem: "Dra. Neela" },
      { ator: "Fiona Dourif", personagem: "Dra. Kim" },
      { ator: "Taylor Dearden", personagem: "Enfermeira Jen" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Plantão Zero", 
          "Código Azul", 
          "O Custo do Cuidado", 
          "Triagem", 
          "Fadiga de Decisão", 
          "Linha de Frente", 
          "Hemorragia", 
          "Sinais Vitais", 
          "A Cidade do Aço", 
          "Resiliência", 
          "Sem Descanso", 
          "O Juramento", 
          "Turno da Noite", 
          "Ponto de Ruptura", 
          "Recuperação"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/ThePittTeaser2025",
      info: [
        { titulo: "Showrunner", valor: "R. Scott Gemmill" },
        { titulo: "Produção Executiva", valor: "Noah Wyle • John Wells" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Warner Bros. Television" },
        { titulo: "Local de Produção", valor: "Pittsburgh, Pensilvânia (EUA)" },
        { titulo: "Status", valor: "Em Exibição / Lançamento 2025-2026" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Max (HBO)" }
      ],
      funFacts: [
        "Noah Wyle volta a colaborar com o produtor John Wells; ambos foram peças-chave no sucesso estrondoso de 'ER' (Plantão Médico).",
        "A série foi gravada em locações reais em Pittsburgh para trazer uma estética industrial e autêntica, fugindo dos cenários hospitalares limpos demais de outras séries.",
        "Diferente de Grey's Anatomy, The Pitt foca menos no romance e mais nos problemas sistêmicos e políticos da saúde pública atual."
      ]
    },

    resenha: {
      nota: "⭐ 4.7 / 5 — Baseado em expectativas e primeiras críticas",
      reviews: [
        {
          autor: "Variety",
          texto: "Noah Wyle prova que ainda é o rei dos dramas médicos. Uma atuação sóbria e poderosa em um ambiente caótico."
        },
        {
          autor: "The Hollywood Reporter",
          texto: "Cru, realista e necessário. The Pitt não tem medo de mostrar as rachaduras no sistema de saúde americano."
        },
        {
          autor: "hospital_drama_fan",
          texto: "Estava com saudades de um drama médico que realmente focasse na rotina do hospital sem tanto 'mimimi'. Nota 10!"
        }
      ]
    },

    mas: [
      { titulo: "ER (Plantão Médico)", ano: "1994" },
      { titulo: "The Bear", ano: "2022" },
      { titulo: "The Resident", ano: "2018" },
      { titulo: "Chicago Med", ano: "2015" },
      { titulo: "New Amsterdam", ano: "2018" }
    ]
},

  "o_agente_noturno_(the_night_agent)": {
    id: "o_agente_noturno_(the_night_agent)",
    titulo: "O Agente Noturno",
    imagem: "assets/img/pastaseries/the-night-agent.jpg",
    capa: "/assets/img/capa/the-night-agent-capa.jpg",
    tempo: "2 Temporadas",
    ano: "2023 - Presente",
    genero: ["Ação", "Suspense", "Drama"],
    dataGenre: "drama misterio suspense acao aventura",
    descricao: "Um agente de baixo escalão do FBI trabalha no porão da Casa Branca, cuidando de um telefone que nunca toca — até que uma noite ele finalmente recebe uma chamada que o lança em uma perigosa conspiração envolvendo um espião infiltrado no alto escalão do governo.",
    
    elenco: [
      { ator: "Gabriel Basso", personagem: "Peter Sutherland" },
      { ator: "Luciane Buchanan", personagem: "Rose Larkin" },
      { ator: "Hong Chau", personagem: "Diane Farr" },
      { ator: "Sarah Desjardins", personagem: "Maddie Redfield" },
      { ator: "Fola Evans-Akingbola", personagem: "Chelsea Arrington" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "A Chamada", 
          "Rediscagem", 
          "O Mestre das Marionetes", 
          "Informante Secreto", 
          "A Marionete", 
          "Vigilância", 
          "Servir e Proteger", 
          "Redenção", 
          "O Plano", 
          "Pais e Filhos"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Missão Internacional", 
          "Sombra do Passado", 
          "Contenção", 
          "Ponto Cego", 
          "Fuga em Bangkok", 
          "O Novo Agente", 
          "Fogo Cruzado", 
          "Alvo Móvel", 
          "Traição em Nova York", 
          "O Próximo Nível"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/ZzXp75H9Jb8",
      info: [
        { titulo: "Showrunner", valor: "Shawn Ryan" },
        { titulo: "Baseado em", valor: "Livro de Matthew Quirk" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Sony Pictures Television • Netflix" },
        { titulo: "Local de Produção", valor: "Vancouver (Canadá), Bangkok (Tailândia)" },
        { titulo: "Status", valor: "Renovada para a 3ª Temporada" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A série se tornou uma das dez produções mais assistidas de todos os tempos na Netflix em apenas um mês após o lançamento.",
        "O ator Gabriel Basso realizou a grande maioria de suas próprias cenas de luta e perseguição, treinando intensamente antes das filmagens.",
        "A segunda temporada expande o universo da série para fora de Washington D.C., com locações internacionais e uma trama de espionagem global."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 420.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um thriller de espionagem raiz. Ritmo frenético que te faz querer maratonar tudo em um único dia."
        },
        {
          autor: "Omelete",
          texto: "Gabriel Basso traz um carisma de herói de ação clássico para um roteiro moderno e cheio de reviravoltas."
        },
        {
          autor: "action_spy_fan",
          texto: "Finalmente um agente secreto que parece real e falível. A química com a Rose é o que mantém a série humana."
        }
      ]
    },

    mas: [
      { titulo: "Reacher", ano: "2022" },
      { titulo: "Bodyguard", ano: "2018" },
      { titulo: "Jack Ryan", ano: "2018" },
      { titulo: "The Recruit", ano: "2022" },
      { titulo: "Treadstone", ano: "2019" }
    ]
},

  "breaking_bad": {
    id: "breaking_bad",
    titulo: "Breaking Bad",
    imagem: "assets/img/pastaseries/breakingbad.jpg",
    capa: "/assets/img/capa/breakingbad-capa.jpg",
    tempo: "5 Temporadas",
    ano: "2008 - 2013",
    genero: ["Drama", "Crime", "Suspense"],
    dataGenre: "crime drama suspense",
    descricao: "Um professor de química do ensino médio diagnosticado com câncer de pulmão inoperável recorre à fabricação e venda de metanfetamina para garantir o futuro financeiro de sua família, transformando-se em um implacável barão das drogas.",
    
    elenco: [
      { ator: "Bryan Cranston", personagem: "Walter White / Heisenberg" },
      { ator: "Aaron Paul", personagem: "Jesse Pinkman" },
      { ator: "Anna Gunn", personagem: "Skyler White" },
      { ator: "Dean Norris", personagem: "Hank Schrader" },
      { ator: "Giancarlo Esposito", personagem: "Gustavo Fring" },
      { ator: "Bob Odenkirk", personagem: "Saul Goodman" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["Piloto", "Gato no Saco...", "...E o Saco no Rio", "Câncer", "Matéria Cinzenta", "Um Punhado de Nada", "Acordo de Cavalheiros"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["Sete Trinta e Sete", "Grelhado", "Mordida de Inseto", "Baixo", "Quebra", "Cuco", "Negro y Azul", "Melhor Ligar para o Saul", "4 Dias a Fora", "Chegou ao Fim", "Mandala", "Fênix", "ABQ"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Não Mais", "Cabaça", "I.F.T.", "Luz Verde", "Mais", "Pôr do Sol", "Um Minuto", "Te Vejo", "Kafkaesco", "Mosca", "Abiquiu", "Meias Medidas", "Medidas Completas"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["Cortador de Caixa", "Trinta e Oito Calibre", "Portas Abertas", "Pontos Cruciais", "Espingarda", "Encurralado", "Cachorro Doido", "Hermanos", "Bug", "Saúde", "Espaço Rastejante", "Fim dos Tempos", "Face Off"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["Viva Livre ou Morra", "Madrigal", "Dinheiro Sujo", "Cinquenta e Um", "Carga Morta", "Compra", "Diga o Meu Nome", "Deslize", "Dinheiro de Sangue", "Enterrado", "Confissões", "Cão Raivoso", "To'hajiilee", "Ozymandias", "Estado de Granito", "Felina"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/HhesaQXLuRY",
      info: [
        { titulo: "Criador", valor: "Vince Gilligan" },
        { titulo: "Trilha Sonora", valor: "Dave Porter" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Sony Pictures Television • AMC" },
        { titulo: "Local de Produção", valor: "Albuquerque, Novo México (EUA)" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A icônica cena em que Walter White joga a pizza no telhado foi feita em apenas um take. Bryan Cranston conseguiu o feito de primeira, para surpresa de toda a equipe.",
        "Aaron Paul (Jesse Pinkman) nunca fez aulas de atuação na vida. Vince Gilligan ficou tão impressionado com ele que desistiu de matar o personagem na 1ª temporada.",
        "A metanfetamina azul usada na série era, na verdade, balas de açúcar cristalizadas (rock candy) azuis."
      ]
    },

    resenha: {
      nota: "⭐ 5.0 / 5 — Baseado em 2.100.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Roteiro perfeito, atuações viscerais e uma transformação de personagem que nunca será superada. Obra-prima."
        },
        {
          autor: "IMDb",
          texto: "O episódio 'Ozymandias' é frequentemente citado como o melhor episódio da história da televisão."
        },
        {
          autor: "heisenberg_fan",
          texto: "Eu assisti três vezes e cada vez percebo um detalhe novo. 'Say my name' é de arrepiar!"
        }
      ]
    },

    mas: [
      { titulo: "Better Call Saul", ano: "2015" },
      { titulo: "The Wire", ano: "2002" },
      { titulo: "Narcos", ano: "2015" },
      { titulo: "The Sopranos", ano: "1999" },
      { titulo: "Ozark", ano: "2017" }
    ]
},

  "game_of_thrones": {
    id: "game_of_thrones",
    titulo: "Game of Thrones",
    imagem: "assets/img/pastaseries/game-of-thrones.jpg",
    capa: "/assets/img/capa/game-of-thrones-capa.jpg",
    tempo: "8 Temporadas",
    ano: "2011 - 2019",
    genero: ["Fantasia", "Drama", "Ação", "Aventura"],
    dataGenre: "fantasia acao drama",
    descricao: "Em uma terra onde os verões duram décadas e os invernos uma eternidade, várias famílias nobres travam uma guerra mortal pelo controle do Trono de Ferro e dos Sete Reinos de Westeros.",
    
    elenco: [
      { ator: "Emilia Clarke", personagem: "Daenerys Targaryen" },
      { ator: "Kit Harington", personagem: "Jon Snow" },
      { ator: "Peter Dinklage", personagem: "Tyrion Lannister" },
      { ator: "Lena Headey", personagem: "Cersei Lannister" },
      { ator: "Maisie Williams", personagem: "Arya Stark" },
      { ator: "Nikolaj Coster-Waldau", personagem: "Jaime Lannister" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["O Inverno está Chegando", "A Estrada do Rei", "Lord Snow", "Criplos, Bastardos e Coisas Quebradas", "O Lobo e o Leão", "Uma Coroa de Ouro", "Vencer ou Morrer", "O Lado Pontudo", "Baelor", "Fogo e Sangue"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["O Norte se Lembra", "As Terras da Noite", "O Que Morto Não Pode Morrer", "Jardim de Ossos", "O Fantasma de Harrenhal", "O Velhos Deuses e os Novos", "Um Homem Sem Honra", "O Príncipe de Winterfell", "Água Negra", "Valar Morghulis"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Valar Dohaeris", "Asas Escuras, Palavras Escuras", "A Caminhada da Punição", "E Agora Sua Patrulha Terminou", "Beijada pelo Fogo", "A Escalada", "Os Segundos Filhos", "As Chuvas de Castamere", "Mhysa"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["Duas Espadas", "O Leão e a Rosa", "Quebrador de Correntes", "Cumpridora de Promessas", "O Primeiro de Seu Nome", "Leis dos Deuses e dos Homens", "Sabiá", "A Montanha e a Víbora", "Os Vigilantes da Muralha", "As Crianças"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["As Guerras Que Virão", "A Casa do Preto e Branco", "Alto Pardal", "Filhos da Harpia", "Mate o Garoto", "Insubmissos, Não Curvados, Não Quebrados", "O Presente", "Hardhome", "A Dança dos Dragões", "A Misericórdia da Mãe"] 
      },
      { 
        numero: "Temporada 6", 
        capitulos: ["A Mulher Vermelha", "Casa", "Quebrador de Juramentos", "O Livro do Estranho", "A Porta", "Sangue do Meu Sangue", "O Homem Quebrado", "Ninguém", "A Batalha dos Bastardos", "Os Ventos do Inverno"] 
      },
      { 
        numero: "Temporada 7", 
        capitulos: ["Pedra do Dragão", "Nascida da Tormenta", "A Justiça da Rainha", "Os Espólios de Guerra", "Atalaialeste", "Além da Muralha", "O Dragão e o Lobo"] 
      },
      { 
        numero: "Temporada 8", 
        capitulos: ["Winterfell", "Um Cavaleiro dos Sete Reinos", "A Longa Noite", "Os Últimos Starks", "Os Sinos", "O Trono de Ferro"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/bjqEWgDVPe0",
      info: [
        { titulo: "Criadores", valor: "David Benioff • D.B. Weiss" },
        { titulo: "Baseado em", valor: "As Crônicas de Gelo e Fogo de George R.R. Martin" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "HBO Entertainment" },
        { titulo: "Local de Produção", valor: "Irlanda do Norte, Croácia, Islândia, Espanha" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Prêmios", valor: "Vencedora de 59 Primetime Emmy Awards" },
        { titulo: "Distribuição", valor: "Max (HBO)" }
      ],
      funFacts: [
        "A série criou línguas inteiras do zero, como o Dothraki e o Alto Valiriano, desenvolvidas pelo linguista David J. Peterson.",
        "Peter Dinklage foi a única escolha dos produtores para o papel de Tyrion; ele nem precisou fazer audição para o papel.",
        "A 'Batalha dos Bastardos' levou 25 dias apenas para ser filmada, envolvendo centenas de figurantes e cavalos reais, sem depender apenas de CGI."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 2.200.000+ avaliações",
      reviews: [
        {
          autor: "Rotten Tomatoes",
          texto: "Uma experiência televisiva sem precedentes. Game of Thrones redefiniu o que é possível fazer em uma série de TV."
        },
        {
          autor: "Omelete",
          texto: "Mesmo com o final divisivo, a jornada de Westeros é obrigatória para qualquer fã de fantasia épica."
        },
        {
          autor: "stark_forever",
          texto: "O Casamento Vermelho mudou minha vida. Nunca senti tanta dor assistindo a uma série, mas amei cada segundo."
        }
      ]
    },

    mas: [
      { titulo: "House of the Dragon", ano: "2022" },
      { titulo: "Vikings", ano: "2013" },
      { titulo: "The Last Kingdom", ano: "2015" },
      { titulo: "The Witcher", ano: "2019" },
      { titulo: "The Lord of the Rings: The Rings of Power", ano: "2022" }
    ]
},

  "the_last_of_us": {
    id: "the_last_of_us",
    titulo: "The Last of Us",
    imagem: "assets/img/pastaseries/the-last-of-us.jpg",
    capa: "/assets/img/capa/the-last-of-us-capa.jpg",
    tempo: "2 Temporadas",
    ano: "2023 - 2025",
    genero: ["Drama", "Pós-Apocalíptico", "Terror", "Ação"],
    dataGenre: "drama acao sci-fi",
    descricao: "Após uma jornada brutal pelos EUA, Joel e Ellie tentam levar uma vida estável em Jackson. No entanto, um evento violento rompe essa paz, levando Ellie a uma busca implacável por vingança e justiça, enquanto as consequências das escolhas de Joel retornam para assombrá-los.",
    
    elenco: [
      { ator: "Pedro Pascal", personagem: "Joel Miller" },
      { ator: "Bella Ramsey", personagem: "Ellie Williams" },
      { ator: "Kaitlyn Dever", personagem: "Abby Anderson" },
      { ator: "Isabela Merced", personagem: "Dina" },
      { ator: "Young Mazino", personagem: "Jesse" },
      { ator: "Gabriel Luna", personagem: "Tommy Miller" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Quando Estiver Perdido na Escuridão", "Infectados", "Muito, Muito Tempo", 
          "Por Favor, Segure a Minha Mão", "Resistir e Sobreviver", "Família", 
          "O Que Deixamos Para Trás", "Quando Mais Precisamos", "Procure a Luz"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Jackson", 
          "O Abrigo", 
          "A Procura", 
          "O Grupo de Seattle", 
          "O Aquário", 
          "Confronto", 
          "A Ilha", 
          "Ascensão e Queda"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/tlou_s2_trailer",
      info: [
        { titulo: "Criadores", valor: "Craig Mazin • Neil Druckmann" },
        { titulo: "Baseado em", valor: "The Last of Us Part II" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "HBO Entertainment • Naughty Dog" },
        { titulo: "Status", valor: "Finalizada / Possível T3 em discussão" },
        { titulo: "Direção T2", valor: "Mark Mylod, Nina Lopez-Corrado, Stephen Williams" },
        { titulo: "Distribuição", valor: "Max (HBO)" }
      ],
      funFacts: [
        "A 2ª temporada foca nos eventos da Parte II do jogo, explorando a dualidade entre Ellie e a nova personagem Abby.",
        "A atriz Kaitlyn Dever foi escolhida para o papel de Abby após uma longa busca; curiosamente, ela era a favorita dos fãs para interpretar a Ellie anos atrás.",
        "A produção em Vancouver serviu para recriar o cenário chuvoso e denso de Seattle, local onde se passa a maior parte da trama."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 750.000+ avaliações",
      reviews: [
        {
          autor: "Variety",
          texto: "Uma sequência corajosa e dolorosa. A série não foge das decisões difíceis do material original."
        },
        {
          autor: "The Guardian",
          texto: "Bella Ramsey entrega uma atuação digna de prêmios nesta temporada, mostrando o lado sombrio de Ellie."
        },
        {
          autor: "gamer_legacy",
          texto: "É difícil de assistir por causa da carga emocional, mas é cinema puro. Fiel até nos mínimos detalhes."
        }
      ]
    },

    mas: [
      { titulo: "Fallout", ano: "2024" },
      { titulo: "The Walking Dead: Dead City", ano: "2023" },
      { titulo: "Yellowjackets", ano: "2021" },
      { titulo: "Station Eleven", ano: "2021" },
      { titulo: "Children of Men", ano: "2006" }
    ]
},

  "la_casa_de_papel": {
    id: "la_casa_de_papel",
    titulo: "La Casa de Papel",
    imagem: "assets/img/pastaseries/la-casa-de-papel.jpg",
    capa: "/assets/img/capa/la-casa-de-papel-capa.jpg",
    tempo: "5 Partes",
    ano: "2017 - 2021",
    genero: ["Crime", "Suspense", "Drama"],
    dataGenre: "crime acao suspense",
    descricao: "Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder, o Professor, manipula a polícia para realizar o maior roubo da história, mas o plano começa a desmoronar conforme as tensões aumentam.",
    
    elenco: [
      { ator: "Álvaro Morte", personagem: "O Professor" },
      { ator: "Úrsula Corberó", personagem: "Tóquio" },
      { ator: "Pedro Alonso", personagem: "Berlim" },
      { ator: "Itziar Ituño", personagem: "Raquel Murillo / Lisboa" },
      { ator: "Miguel Herrán", personagem: "Rio" },
      { ator: "Jaime Lorente", personagem: "Denver" },
      { ator: "Alba Flores", personagem: "Nairóbi" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Parte 1", 
        capitulos: ["Episódio 1", "Episódio 2", "Episódio 3", "Episódio 4", "Episódio 5", "Episódio 6", "Episódio 7", "Episódio 8", "Episódio 9", "Episódio 10", "Episódio 11", "Episódio 12", "Episódio 13"] 
      },
      { 
        numero: "Parte 2", 
        capitulos: ["Episódio 1", "Episódio 2", "Episódio 3", "Episódio 4", "Episódio 5", "Episódio 6", "Episódio 7", "Episódio 8", "Episódio 9"] 
      },
      { 
        numero: "Parte 3", 
        capitulos: ["Estamos de Volta", "Aiwa", "48 Metros Abaixo da Terra", "Bum, Bum, Ciao", "As Caixas Vermelhas", "Tudo Parecia sem Saída", "Férias", "Deriva"] 
      },
      { 
        numero: "Parte 4", 
        capitulos: ["Fim de Jogo", "Casamento do Berlim", "Aula de Anatomia", "Suspiros de Espanha", "Cinco Minutos Antes", "TKO", "Derrubar a Barraca", "Plano Paris"] 
      },
      { 
        numero: "Parte 5", 
        capitulos: ["Fim da Estrada", "Você Acredita em Reencarnação?", "Bem-vindos ao Show da Vida", "O Teu Lugar no Céu", "Viver Muitas Vidas", "Válvula de Escape", "Ciência Iludida", "A Teoria da Elegância", "O que se Conversa na Cama", "Uma Tradição Familiar"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/iS5Xg8fzu4E",
      info: [
        { titulo: "Criador", valor: "Álex Pina" },
        { titulo: "Idioma Original", valor: "Espanhol" },
        { titulo: "Idiomas Disponíveis", valor: "Espanhol, Português (BR), Inglês" },
        { titulo: "Legendas", valor: "35+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Vancouver Media" },
        { titulo: "Local de Produção", valor: "Madri, Espanha" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Música Tema", valor: "Bella Ciao" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A série originalmente foi um fracasso de audiência na TV espanhola (Antena 3). Foi só após a compra pela Netflix que ela se tornou um fenômeno mundial.",
        "As máscaras de Salvador Dalí tornaram-se símbolos de resistência real em diversos protestos ao redor do mundo após o sucesso da série.",
        "A icônica música 'Bella Ciao' é um hino partidário italiano da resistência contra o fascismo durante a Segunda Guerra Mundial."
      ]
    },

    resenha: {
      nota: "⭐ 4.7 / 5 — Baseado em 900.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um jogo de xadrez eletrizante onde o Professor está sempre um passo à frente."
        },
        {
          autor: "Omelete",
          texto: "Tensão constante e personagens apaixonantes que fazem você torcer pelos 'vilões'."
        },
        {
          autor: "bella_ciao_fan",
          texto: "Nairóbi é a melhor personagem de todas. O plano do ouro é ainda mais louco que o da moeda!"
        }
      ]
    },

    mas: [
      { titulo: "Berlim", ano: "2023" },
      { titulo: "Lupin", ano: "2021" },
      { titulo: "Elite", ano: "2018" },
      { titulo: "Vis a Vis", ano: "2015" },
      { titulo: "Ozark", ano: "2017" }
    ]
},

  "wandinha": {
    id: "wandinha",
    titulo: "Wandinha",
    imagem: "assets/img/pastaseries/wandinha.jpg",
    capa: "/assets/img/capa/wandinha-capa.jpg",
    tempo: "2 Temporadas",
    ano: "2022 - Presente",
    genero: ["Comédia de Terror", "Mistério", "Fantasia"],
    dataGenre: "fantasia comedia misterio",
    descricao: "Inteligente, sarcástica e um pouco morta por dentro, Wandinha Addams investiga uma onda de assassinatos enquanto faz novos amigos — e inimigos — na Escola Nunca Mais.",
    
    elenco: [
      { ator: "Jenna Ortega", personagem: "Wandinha Addams" },
      { ator: "Emma Myers", personagem: "Enid Sinclair" },
      { ator: "Catherine Zeta-Jones", personagem: "Morticia Addams" },
      { ator: "Luis Guzmán", personagem: "Gomez Addams" },
      { ator: "Steve Buscemi", personagem: "Barry Dort (T2)" },
      { ator: "Joy Sunday", personagem: "Bianca Barclay" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Wandinha é só Tristeza", 
          "Wandinha é uma Ilha", 
          "Amizade, uma Questão de Tristeza", 
          "Noite de Baile, Noite de Tristeza", 
          "Quem Planta Tristeza Colhe Destino", 
          "Duro Aprendizado", 
          "Se Você não me Conhece Ainda", 
          "Uma Tristeza de Forças"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "O Retorno do Infortúnio", 
          "Sombra de Dúvida", 
          "Pesadelo em Família", 
          "O Segredo da Mansão Addams", 
          "Rituais de Sangue", 
          "A Vingança de Goody", 
          "Eclipse Sombrio", 
          "O Fim da Inocência"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/jZ_E6u72K-E",
      info: [
        { titulo: "Produtor Executivo", valor: "Tim Burton" },
        { titulo: "Showrunners", valor: "Alfred Gough • Miles Millar" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "MGM Television • Netflix" },
        { titulo: "Local de Produção", valor: "Romênia (T1), Irlanda (T2)" },
        { titulo: "Status", valor: "Em Exibição" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "Jenna Ortega aprendeu a tocar violoncelo, fazer esgrima e até tiro com arco para interpretar Wandinha com o máximo de autenticidade.",
        "A famosa dancinha do baile na primeira temporada foi coreografada pela própria Jenna Ortega, inspirada em vídeos de clubes góticos dos anos 80.",
        "Para a segunda temporada, a produção se mudou da Romênia para a Irlanda, trazendo cenários ainda mais sombrios e uma atmosfera de terror mais acentuada."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 1.500.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Jenna Ortega nasceu para esse papel. O tom gótico de Tim Burton brilha em cada frame."
        },
        {
          autor: "The Guardian",
          texto: "Uma mistura perfeita de mistério adolescente com o humor ácido da Família Addams."
        },
        {
          autor: "enid_fan_club",
          texto: "A amizade da Enid e da Wandinha é a melhor coisa da série! A segunda temporada está ainda mais assustadora."
        }
      ]
    },

    mas: [
      { titulo: "O Mundo Sombrio de Sabrina", ano: "2018" },
      { titulo: "Locke & Key", ano: "2020" },
      { titulo: "The Umbrella Academy", ano: "2019" },
      { titulo: "Yellowjackets", ano: "2021" },
      { titulo: "Stranger Things", ano: "2016" }
    ]
},

  "the_boys": {
    id: "the_boys",
    titulo: "The Boys",
    imagem: "assets/img/pastaseries/the-boys.jpg",
    capa: "/assets/img/capa/the-boys-capa.jpg",
    tempo: "5 Temporadas",
    ano: "2019 - 2026",
    genero: ["Ação", "Sátira", "Ficção Científica", "Drama"],
    dataGenre: "acao comedia sci-fi",
    descricao: "Em um mundo onde super-heróis abraçam o lado sombrio de sua fama massiva, um grupo de vigilantes conhecidos como 'Os Meninos' se propõe a derrubar os super-heróis corruptos da Vought International com pouco mais do que sua coragem e disposição para lutar sujo.",
    
    elenco: [
      { ator: "Karl Urban", personagem: "Billy Butcher" },
      { ator: "Antony Starr", personagem: "Capitão Pátria (Homelander)" },
      { ator: "Jack Quaid", personagem: "Hughie Campbell" },
      { ator: "Erin Moriarty", personagem: "Annie / Estelar" },
      { ator: "Jensen Ackles", personagem: "Soldier Boy" },
      { ator: "Karen Fukuhara", personagem: "Kimiko" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["O Nome do Jogo", "Cherry", "Fique com o Futuro", "A Fêmea da Espécie", "Bom para a Alma", "Os Inocentes", "A Sociedade da Autopreservação", "Você Me Encontrou"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["A Grande Viagem", "Preparação e Planejamento", "Mil Homens com Armas de Prata", "Nada como um Bom Lar", "Temos que Ir Agora", "O Sangue nas Portas", "O Carniceiro, o Padeiro e o Candeeiro", "O Que Eu Sei"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Retorno", "A Única Pessoa no Céu", "Costa de Barbary", "Plano de Cinco Anos", "A Última Vez para Olhar para este Mundo de Mentiras", "Herogasm", "Aqui Vem uma Vela para Iluminar Você até a Cama", "O Instante de Sangue e Poeira"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["Departamento de Estratégias Sujas", "Vida entre os Canibais", "Vamos Colocar a Bandeira do Medo", "A Sabedoria dos Velhos", "Cuidado com o Jabberwock, Meu Filho", "Transe Sujo", "A Pessoa de Dentro", "Temporada de Assassinatos"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["Pátria Livre", "O Vírus", "Xeque-Mate", "Sede de Sangue", "O Dia do Julgamento", "O Carniceiro Final", "Terra de Ninguém", "O Fim dos Tempos"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/MN8fFM1ZdWo",
      info: [
        { titulo: "Showrunner", valor: "Eric Kripke" },
        { titulo: "Baseado em", valor: "HQ de Garth Ennis e Darick Robertson" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "35+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Amazon MGM Studios • Sony Pictures" },
        { titulo: "Local de Produção", valor: "Toronto, Canadá" },
        { titulo: "Status", valor: "Finalizada (Série Original)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Prime Video" }
      ],
      funFacts: [
        "Antony Starr (Homelander) é frequentemente elogiado por conseguir atuar apenas com as micro-expressões dos olhos, criando uma tensão constante.",
        "A série é famosa por ter um orçamento gigantesco de efeitos visuais para cenas 'gore', como a infame cena do Herogasm e o acidente no primeiro episódio.",
        "The Boys gerou um universo expandido com a animação 'Diabolical' e o spin-off live-action 'Gen V', que se conecta diretamente com a trama principal."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.800.000+ avaliações",
      reviews: [
        {
          autor: "Rotten Tomatoes",
          texto: "Uma sátira brutalmente honesta e sangrenta sobre o poder e o fascismo disfarçados de heroísmo."
        },
        {
          autor: "Omelete",
          texto: "The Boys é o antídoto perfeito para a fadiga de filmes de super-heróis convencionais."
        },
        {
          autor: "vought_leaks",
          texto: "Butcher é o melhor anti-herói já feito. A quinta temporada fechou com chave de ouro e muito sangue!"
        }
      ]
    },

    mas: [
      { titulo: "Gen V", ano: "2023" },
      { titulo: "Invincible", ano: "2021" },
      { titulo: "Watchmen", ano: "2019" },
      { titulo: "Peacemaker", ano: "2022" },
      { titulo: "Preacher", ano: "2016" }
    ]
},

  "the_walking_dead": {
    id: "the_walking_dead",
    titulo: "The Walking Dead",
    imagem: "assets/img/pastaseries/the-walking-dead.jpg",
    capa: "/assets/img/capa/the-walking-dead-capa.jpg",
    tempo: "11 Temporadas",
    ano: "2010 - 2022",
    genero: ["Terror", "Drama", "Sobrevivência"],
    dataGenre: "terror acao drama sobrevivencia",
    descricao: "Baseado na série de quadrinhos de Robert Kirkman, este drama corajoso retrata a vida nos meses e anos que se seguem a um apocalipse zumbi. Liderados pelo ex-policial Rick Grimes, sua família e um grupo de sobreviventes estão constantemente em busca de um lar seguro e protegido.",
    
    elenco: [
      { ator: "Andrew Lincoln", personagem: "Rick Grimes" },
      { ator: "Norman Reedus", personagem: "Daryl Dixon" },
      { ator: "Melissa McBride", personagem: "Carol Peletier" },
      { ator: "Lauren Cohan", personagem: "Maggie Greene" },
      { ator: "Jeffrey Dean Morgan", personagem: "Negan" },
      { ator: "Danai Gurira", personagem: "Michonne" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["Dias Passados", "Entranhas", "Diga aos Sapos", "Vatos", "Wildfire", "TS-19"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["O Caminho à Frente", "Sangue do Meu Sangue", "Salve o Último", "Rosa Cherokee", "Chupa-Cabra", "Segredos", "Praticamente Morto", "Nebraska", "Dedo no Gatilho", "A 18 Quilômetros", "Juiz, Júri e Carrasco", "Melhores Anjos", "Ao Lado do Fogo Extinto"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Semente", "Doentes", "Caminhe Comigo", "Assassino Interno", "Diga", "Consumido", "Quando os Mortos Batem à Porta", "Feitos para Sofrer", "O Rei do Suicídio", "Lar", "Eu Não Sou um Judas", "Limpo", "Flecha no Batente", "Presa", "Esta Vida Sofrida", "Bem-Vindos aos Túmulos"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["30 Dias Sem Acidentes", "Infectados", "Isolamento", "Indiferença", "Internamento", "Isca", "Peso Morto", "Longe Demais", "Depois", "Inmates", "Reivindicado", "Ainda", "Sozinho", "O Bosque", "Nós", "A"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["Não Há Santuário", "Estranhos", "Quatro Paredes e um Telhado", "Slabtown", "Autoajuda", "Consumidos", "Cruzados", "Coda", "O que Aconteceu e o que Está Acontecendo", "Eles", "A Distância", "Lembre-se", "Esquecer", "Gaste", "Tente", "Conquistar"] 
      },
      { 
        numero: "Temporada 6", 
        capitulos: ["Pela Primeira Vez de Novo", "JSS", "Obrigado", "Aqui Não é Aqui", "Agora", "Sempre Responsável", "Cabeça Erguida", "Do Início ao Fim", "Sem Saída", "O Próximo Mundo", "Nós no Mesmo Barco", "Ainda Não é Amanhã", "O Mesmo Barco", "Duas Vezes Mais Longe", "Leste", "O Último Dia na Terra"] 
      },
      { 
        numero: "Temporada 7", 
        capitulos: ["Chegará o Dia em que Você Não Estará", "O Poço", "A Cela", "Serviço", "Vá em Frente", "Jure", "Cante-me uma Canção", "Corações Ainda Batendo", "Pedra na Estrada", "Novos Melhores Amigos", "Hostis e Calamidades", "Diga Sim", "Enterre-me Aqui", "O Outro Lado", "Algo de que Eles Precisam", "O Primeiro Dia do Resto de sua Vida"] 
      },
      { 
        numero: "Temporada 8", 
        capitulos: ["Misericórdia", "Os Malditos", "Monstros", "Algum Cara", "O Grande e Assustador 'Ele'", "O Rei, a Viúva e o Rick", "Chegou a Hora", "Como Tem que Ser", "Honra", "Os Perdidos e os Saqueadores", "Mortos ou Vivos ou...", "A Chave", "Não Nos Deixe Desviar", "Vale Tudo", "Vale a Pena", "Ira"] 
      },
      { 
        numero: "Temporada 9", 
        capitulos: ["Um Novo Começo", "A Ponte", "Sinais de Aviso", "O Que Vem Depois", "Quem é Você Agora?", "Estranhos", "Evolução", "Adaptação", "Omega", "Bounty", "Guardiões", "Chokepoint", "Cicatrizes", "A Calmaria Antes", "A Tempestade"] 
      },
      { 
        numero: "Temporada 10", 
        capitulos: ["Linhas Que Cruzamos", "Nós Somos o Fim do Mundo", "Fantasmas", "Silencie os Sussurros", "O Que Sempre Somos", "Vínculos", "Aperte o Gatilho", "O Mundo Antes", "Squeeze", "Stalker", "Morning Star", "Walk With Us", "What We Become", "Look at the Flowers", "The Tower", "A Certain Doom", "Home Sweet Home", "Find Me", "One More", "Splinter", "Diverged", "Here's Negan"] 
      },
      { 
        numero: "Temporada 11", 
        capitulos: ["Acheron: Parte I", "Acheron: Parte II", "Hunted", "Rendition", "Out of the Ashes", "On the Inside", "Promises Broken", "For Blood", "No Other Way", "New Haunts", "Rogue Element", "The Lucky Ones", "Warlords", "The Rotten", "Trust", "Acts of God", "Lockdown", "A New Deal", "Variant", "What's Been Lost", "Outpost 22", "Faith", "Family", "Rest in Peace"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/sfAc2U20uyg",
      info: [
        { titulo: "Showrunners", valor: "Frank Darabont / Scott M. Gimple / Angela Kang" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "40+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "AMC Studios" },
        { titulo: "Total de Episódios", valor: "177" },
        { titulo: "Status", valor: "Finalizada (Universo Expandido em andamento)" },
        { titulo: "Prêmios", valor: "Vencedora de 2 Emmy Awards" },
        { titulo: "Distribuição", valor: "Netflix • Disney+ • AMC+" }
      ],
      funFacts: [
        "A palavra 'zumbi' nunca é usada na série. Os personagens os chamam de 'Walkers' (Errantes), 'Biters' (Mordedores) ou 'Lurkers' (Espreitadores).",
        "A maquiagem dos figurantes 'zumbis' ficava mais pálida e detalhada a cada temporada para mostrar que os corpos estavam se decompondo com o passar dos anos.",
        "Os atores que interpretavam os zumbis tinham que passar por uma 'escola de zumbis' para aprender a andar e se mover da maneira correta."
      ]
    },

    resenha: {
      nota: "⭐ 4.7 / 5 — Baseado em 1.500.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um marco cultural. Mais do que uma série de terror, é um estudo sobre a natureza humana sob pressão extrema."
        },
        {
          autor: "IMDb",
          texto: "As primeiras temporadas são o auge da TV de sobrevivência. O desenvolvimento de Rick Grimes é lendário."
        },
        {
          autor: "twdfan_99",
          texto: "O Negan é o vilão mais carismático que já existiu. Chorei no final da série, foi um encerramento digno!"
        }
      ]
    },

    mas: [
      { titulo: "The Last of Us", ano: "2023" },
      { titulo: "Fear the Walking Dead", ano: "2015" },
      { titulo: "TWD: Daryl Dixon", ano: "2023" },
      { titulo: "Black Summer", ano: "2019" },
      { titulo: "Z Nation", ano: "2014" }
    ]
},

  "friends": {
    id: "friends",
    titulo: "Friends",
    imagem: "assets/img/pastaseries/friends.jpg",
    capa: "/assets/img/capa/friends-capa.jpg",
    tempo: "10 Temporadas",
    ano: "1994 - 2004",
    genero: ["Comédia", "Romance"],
    dataGenre: "comedia romance",
    descricao: "Seis amigos unidos enfrentam as armadilhas da vida, do trabalho e do amor na Nova York dos anos 90, provando que a amizade é o verdadeiro suporte para qualquer situação.",
    
    elenco: [
      { ator: "Jennifer Aniston", personagem: "Rachel Green" },
      { ator: "Courteney Cox", personagem: "Monica Geller" },
      { ator: "Lisa Kudrow", personagem: "Phoebe Buffay" },
      { ator: "Matt LeBlanc", personagem: "Joey Tribbiani" },
      { ator: "Matthew Perry", personagem: "Chandler Bing" },
      { ator: "David Schwimmer", personagem: "Ross Geller" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["Aquele Onde Tudo Começou", "Aquele com o Ultrassom no Final", "Aquele com o Polegar", "Aquele com o George Stephanopoulos", "Aquele com o Detergente para Roupa da Alemanha Oriental", "Aquele com o Bumbum", "Aquele com o Blecaute", "Aquele em que Nana Morre Duas Vezes", "Aquele em que Underdog Escapa", "Aquele com o Macaco", "Aquele com a Sra. Bing", "Aquele com as Dezenas de Lasanhas", "Aquele com os Seios", "Aquele com os Doces Doces", "Aquele com o Cara do Desentupidor", "Aquele com Duas Partes: Parte 1", "Aquele com Duas Partes: Parte 2", "Aquele com o Pôquer", "Aquele com o Macaco Fugitivo", "Aquele com o Ortodontista Masoquista", "Aquele com o Convite Falso", "Aquele com o Fator Nojinho", "Aquele do Nascimento", "Aquele em que Rachel Descobre"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["Aquele com o Novo Namorado da Rachel", "Aquele com o Leite Materno", "Aquele em que Heckles Morre", "Aquele com o Marido da Phoebe", "Aquele com Cinco Bifes e uma Berinjela", "Aquele com o Bebê no Ônibus", "Aquele em que Ross Descobre", "Aquele com a Lista", "Aquele com o Pai da Phoebe", "Aquele com o Russ", "Aquele com o Casamento Lésbico", "Aquele depois do Superbowl: Parte 1", "Aquele depois do Superbowl: Parte 2", "Aquele com o Vídeo de Formatura", "Aquele em que Ross e Rachel... Você Sabe", "Aquele em que Joey se Muda", "Aquele em que Eddie se Muda", "Aquele em que o Dr. Ramoray Morre", "Aquele em que Eddie Não quer Ir", "Aquele com o Casamento do Cachorro de Louça", "Aquele com os Valentões", "Aquele com as Duas Festas", "Aquele com a Doença da Galinha", "Aquele com o Casamento do Barry e da Mindy"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Aquele com a Fantasia da Princesa Leia", "Aquele em que Ninguém Está Pronto", "Aquele com o Jam", "Aquele com o Metrônomo", "Aquele com o Irmão da Phoebe", "Aquele com o Flashback", "Aquele com o Carro de Corrida", "Aquele com o Futebol Americano", "Aquele com a Garota de Poughkeepsie", "Aquele com o Número de Rachel", "Aquele com Chandler Não Consegue Lembrar Qual Irmã", "Aquele com Todo o Ciúme", "Aquele em que Monica e Richard são Apenas Amigos", "Aquele com a Ex-Mulher de Phoebe", "Aquele em que Ross e Rachel Dão um Tempo", "Aquele da Manhã Seguinte", "Aquele sem o Esqui", "Aquele com a Fita da Hipnose", "Aquele com a Camiseta Minúscula", "Aquele com a Casa de Bonecas", "Aquele com o Pintinho e o Pato", "Aquele com o Grito", "Aquele com a Coisa do Ross", "Aquele com o Campeão de Luta Definitiva", "Aquele na Praia"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["Aquele com a Água-Viva", "Aquele com o Gato", "Aquele com as Algemas", "Aquele com a Dança de Salão", "Aquele com o Novo Namorado da Phoebe", "Aquele com a Garota Suja", "Aquele em que Chandler Atravessa a Linha", "Aquele com Chandler no Caixote", "Aquele com Todos os Doces", "Aquele com a Garota de Poughkeepsie", "Aquele com o Útero da Phoebe", "Aquele com os Embriões", "Aquele com a Rachel Apaixonada", "Aquele com o Dirty Day do Joey", "Aquele com o Rugby", "Aquele com a Festa Falsa", "Aquele com a Entrega Grátis", "Aquele com o Vestido de Noiva", "Aquele com o Convite", "Aquele com o Vestido Novo da Rachel", "Aquele com o Pior Padrinho do Mundo", "Aquele com o Casamento do Ross: Parte 1", "Aquele com o Casamento do Ross: Parte 2"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["Aquele depois do Ross Dizer Rachel", "Aquele com Todos os Beijos", "Aquele com o Ketchup Triplo", "Aquele em que Phoebe dá à Luz", "Aquele com o Erro do Joey", "Aquele com o Pé do Papai Noel", "Aquele em que Ross se Muda", "Aquele com Todos os Dias de Ação de Graças", "Aquele com o Sanduíche do Ross", "Aquele com a Risada Inapropriada", "Aquele com as Resoluções", "Aquele com a Risada de Trabalho do Chandler", "Aquele em que Joey Descobre", "Aquele em que Todos Descobrem", "Aquele com a Garota que Bate no Joey", "Aquele com o Policial", "Aquele com o Inadvertido Beijo da Rachel", "Aquele com a Rachel Fumante", "Aquele em que Ross Não Consegue Flertar", "Aquele com a Carona", "Aquele com a Balada da Rachel", "Aquele com o Olho do Joey", "Aquele em Vegas: Parte 1", "Aquele em Vegas: Parte 2"] 
      },
      { 
        numero: "Temporada 6", 
        capitulos: ["Aquele depois de Vegas", "Aquele em que Ross Abraça a Rachel", "Aquele com a Negação do Ross", "Aquele em que Joey Perde o Convênio", "Aquele com o Porsche do Porsche", "Aquele na Última Noite", "Aquele em que Phoebe Corre", "Aquele com os Dentes do Ross", "Aquele em que Ross Fica Doidão", "Aquele com a Rotina", "Aquele com a Mesa de Boticário", "Aquele da Piada", "Aquele com a Irmã da Rachel", "Aquele em que Chandler Não Consegue Chorar", "Aquele que Poderia Ter Sido: Parte 1", "Aquele que Poderia Ter Sido: Parte 2", "Aquele com o Unagi", "Aquele em que o Mac de Joey é Atropelado", "Aquele com a Geladeira do Joey", "Aquele com o Mac de Joey", "Aquele em que Ross Conhece o Pai de Elizabeth", "Aquele em que o Paul é o Cara", "Aquele com o Anel", "Aquele com a Proposta: Parte 1", "Aquele com a Proposta: Parte 2"] 
      },
      { 
        numero: "Temporada 7", 
        capitulos: ["Aquele com o Trovão da Monica", "Aquele com o Livro da Rachel", "Aquele com os Cookies da Phoebe", "Aquele com o Assistente da Rachel", "Aquele com a Foto de Noivado", "Aquele com a Biblioteca do Ross", "Aquele com o Livro de Erros do Ross", "Aquele em que Chandler Não Gosta de Cachorros", "Aquele com todos os Doces de Natal", "Aquele com o Tatu de Natal", "Aquele com os Cheesecakes", "Aquele em que Eles Ficam Acordados a Noite Toda", "Aquele em que Rosita Morre", "Aquele com o Trinta Anos da Rachel", "Aquele com o Novo Cérebro do Joey", "Aquele com a Verdade sobre Londres", "Aquele com o Vestido Barato da Monica", "Aquele com o Prêmio do Joey", "Aquele com a Prima do Ross", "Aquele com o Voto da Rachel", "Aquele com o Pai do Chandler", "Aquele com o Casamento da Monica e do Chandler: Parte 1", "Aquele com o Casamento da Monica e do Chandler: Parte 2"] 
      },
      { 
        numero: "Temporada 8", 
        capitulos: ["Aquele depois do Sim", "Aquele com o Suéter Vermelho", "Aquele em que Rachel Conta ao Ross", "Aquele com o Videotape", "Aquele com o Encontro da Rachel", "Aquele com a Festa de Halloween", "Aquele com a Mancha", "Aquele com a Stripper", "Aquele com o Boato", "Aquele com as Botas da Monica", "Aquele com o Chá de Bebê da Rachel", "Aquele em que Joey Namora a Rachel", "Aquele em que Chandler Toma Banho de Banheira", "Aquele com o Desejo da Rachel", "Aquele com o Vídeo do Parto", "Aquele em que Joey Conta para a Rachel", "Aquele com as Folhas de Chá", "Aquele em que o Joey está em Choque", "Aquele com o Aniversário de Casamento", "Aquele com o Chá de Bebê", "Aquele com a Aula de Culinária", "Aquele em que Rachel Está Atrasada", "Aquele em que Rachel tem o Bebê: Parte 1", "Aquele em que Rachel tem o Bebê: Parte 2"] 
      },
      { 
        numero: "Temporada 9", 
        capitulos: ["Aquele em que Ninguém Propõe", "Aquele com o Sono da Emma", "Aquele com o Pediatra", "Aquele com os Tubarões", "Aquele com o Jantar de Aniversário da Phoebe", "Aquele com a Babá Homem", "Aquele com a Canção Inapropriada do Ross", "Aquele com a Outra Irmã da Rachel", "Aquele com o Bilhete Premiado", "Aquele com o Natal em Tulsa", "Aquele em que a Rachel Volta a Trabalhar", "Aquele com a Ratazana da Phoebe", "Aquele em que Monica Canta", "Aquele com o Encontro às Cegas", "Aquele com o Assalto", "Aquele com o E-mail de Sacanagem", "Aquele com o Memorial", "Aquele com a Loteria", "Aquele com o Sonho da Rachel", "Aquele com a Festa na Sabatina", "Aquele com o Teste de Fertilidade", "Aquele com o Doador", "Aquele em Barbados: Parte 1", "Aquele em Barbados: Parte 2"] 
      },
      { 
        numero: "Temporada 10", 
        capitulos: ["Aquele depois do Beijo do Joey e da Rachel", "Aquele em que Ross Fica Doidão", "Aquele com o Bronzeamento do Ross", "Aquele com o Bolo", "Aquele em que a Irmã da Rachel Toma conta do Bebê", "Aquele com a Subvenção do Ross", "Aquele com o Estudo de Casa", "Aquele com o Ação de Graças Tardio", "Aquele com a Mãe Biológica", "Aquele em que o Pai do Chandler Chora", "Aquele em que a Stripper Chora", "Aquele com o Casamento da Phoebe", "Aquele em que o Joey Aprende Francês", "Aquele com a Princesa Consuela", "Aquele em que a Estelle Morre", "Aquele com a Festa de Despedida da Rachel", "O Último: Parte 1", "O Último: Parte 2"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/hDNNmeeJs1Q",
      info: [
        { titulo: "Criadores", valor: "David Crane • Marta Kauffman" },
        { titulo: "Música Tema", valor: "I'll Be There for You (The Rembrandts)" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "45+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Warner Bros. Television" },
        { titulo: "Local de Produção", valor: "Burbank, Califórnia (Gravado com plateia real)" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Prêmios", valor: "Vencedora de 6 Primetime Emmy Awards" },
        { titulo: "Distribuição", valor: "Max (HBO)" }
      ],
      funFacts: [
        "A icônica fonte no início da série não fica em Nova York, mas sim no lote da Warner Bros. na Califórnia.",
        "O papel de Ross Geller foi escrito especificamente para David Schwimmer; ele foi o primeiro ator a ser escalado.",
        "Bruce Willis apareceu na série de graça após perder uma aposta com Matthew Perry sobre o desempenho do filme 'Meu Vizinho Mafioso' nas bilheterias."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 2.500.000+ avaliações",
      reviews: [
        {
          autor: "Rotten Tomatoes",
          texto: "Uma das sitcoms mais influentes e amadas de todos os tempos. Conforto em forma de série."
        },
        {
          autor: "Omelete",
          texto: "Mesmo décadas depois, Friends continua relevante e capaz de conquistar novas gerações."
        },
        {
          autor: "central_perk_fan",
          texto: "Eu já assisti 10 vezes e ainda dou risada das mesmas piadas. 'We were on a break!'"
        }
      ]
    },

    mas: [
      { titulo: "How I Met Your Mother", ano: "2005" },
      { titulo: "The Big Bang Theory", ano: "2007" },
      { titulo: "Seinfeld", ano: "1989" },
      { titulo: "New Girl", ano: "2011" },
      { titulo: "Modern Family", ano: "2009" }
    ]
},

  "the_crown": {
    id: "the_crown",
    titulo: "The Crown",
    imagem: "assets/img/pastaseries/the-crown.jpg",
    capa: "/assets/img/capa/the-crown-capa.jpg",
    tempo: "6 Temporadas",
    ano: "2016 - 2023",
    genero: ["Drama", "Histórico", "Biografia"],
    dataGenre: "drama historico biografia",
    descricao: "Esta série dramática segue a vida da Rainha Elizabeth II, desde o seu casamento em 1947 até os dias atuais. A cada duas temporadas, um novo elenco assume os papéis para refletir o envelhecimento dos personagens através das décadas de reinado.",
    
    elenco: [
      { ator: "Claire Foy / Olivia Colman / Imelda Staunton", personagem: "Rainha Elizabeth II" },
      { ator: "Matt Smith / Tobias Menzies / Jonathan Pryce", personagem: "Príncipe Philip" },
      { ator: "Vanessa Kirby / Helena Bonham Carter / Lesley Manville", personagem: "Princesa Margaret" },
      { ator: "Josh O'Connor / Dominic West", personagem: "Príncipe Charles" },
      { ator: "Emma Corrin / Elizabeth Debicki", personagem: "Princesa Diana" },
      { ator: "Gillian Anderson", personagem: "Margaret Thatcher" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["Wolferton Splash", "Hyde Park Corner", "Windsor", "Ato de Deus", "Fumaça e Espelhos", "Gelignite", "Cientia Potentia Est", "Orgulho e Alegria", "Assassinos", "Gloriana"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["Infortúnio", "A Companhia dos Homens", "Lisboa", "Beryl", "Marionetes", "Passado", "Matrimonium", "Cara de Querida", "Paterfamilias", "Homem de Mistério"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Olding", "Margaretologia", "Aberfan", "Bubbikins", "Poeira Lunar", "Tywysog Cymru", "Moondust", "Dangling Man", "Imbroglio", "Grito do Coração"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["O Guia de Ouro", "O Teste de Balmoral", "Conto de Fadas", "Favoritos", "Fagan", "Terra de Ninguém", "O Princípio Hereditário", "48 Para 1", "Avalanche", "Guerra"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["Síndrome da Rainha Vitória", "O Sistema", "Mou Mou", "Anus Horribilis", "O Caminho a Seguir", "Ipatiev House", "Terra de Ninguém", "Gunpowder", "Casal 31", "Decommissioned"] 
      },
      { 
        numero: "Temporada 6", 
        capitulos: ["Persona Non Grata", "Duas Fotografias", "Dis-Moi Oui", "Aftermath", "Willsmania", "Ruritânia", "Alma Mater", "Ritz", "Hope Street", "Sleep, Dearie Sleep"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/JWtnJjn6ng0",
      info: [
        { titulo: "Criador", valor: "Peter Morgan" },
        { titulo: "Trilha Sonora", valor: "Hans Zimmer / Martin Phipps" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Left Bank Pictures • Sony Pictures" },
        { titulo: "Local de Produção", valor: "Reino Unido" },
        { titulo: "Status", valor: "Finalizada" },
        { titulo: "Prêmios", valor: "Vencedora de 21 Primetime Emmy Awards" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "A produção é uma das mais caras da história da TV, com um orçamento estimado em mais de 13 milhões de dólares por episódio.",
        "Claire Foy usou um espartilho rígido na primeira temporada para ajudar a manter a postura impecável da jovem Rainha Elizabeth.",
        "Muitas joias e figurinos usados na série são réplicas exatas de peças reais da Família Real Britânica, feitas com curadoria histórica rigorosa."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 350.000+ avaliações",
      reviews: [
        {
          autor: "Variety",
          texto: "Uma lição de história envolvente, com design de produção impecável e atuações dignas de nota."
        },
        {
          autor: "The Hollywood Reporter",
          texto: "The Crown consegue humanizar figuras que o mundo inteiro conhece apenas por protocolos."
        },
        {
          autor: "royal_watcher",
          texto: "O episódio de Aberfan na 3ª temporada é uma obra-prima de partir o coração. Olivia Colman é perfeita."
        }
      ]
    },

    mas: [
      { titulo: "Downton Abbey", ano: "2010" },
      { titulo: "The Gilded Age", ano: "2022" },
      { titulo: "The Great", ano: "2020" },
      { titulo: "Victoria", ano: "2016" },
      { titulo: "Succession", ano: "2018" }
    ]
},

  "black_mirror": {
    id: "black_mirror",
    titulo: "Black Mirror",
    imagem: "assets/img/pastaseries/black-mirror.jpg",
    capa: "/assets/img/capa/black-mirror-capa1.jpg",
    tempo: "6 Temporadas",
    ano: "2011 - Presente",
    genero: ["Ficção Científica", "Suspense", "Antologia", "Drama"],
    dataGenre: "sci-fi suspense drama antologia",
    descricao: "Uma série de antologia que explora um futuro próximo perturbador, onde as maiores inovações tecnológicas da humanidade e seus instintos mais sombrios colidem.",
    
    elenco: [
      { ator: "Bryce Dallas Howard", personagem: "Lacie (S3E1)" },
      { ator: "Aaron Paul", personagem: "Cliff (S6E3)" },
      { ator: "Hayley Atwell", personagem: "Martha (S2E1)" },
      { ator: "Jon Hamm", personagem: "Matt (Natal)" },
      { ator: "Daniel Kaluuya", personagem: "Bingham (S1E2)" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["Hino Nacional", "15 Milhões de Méritos", "Toda a Sua História"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["Volto Já", "Urso Branco", "O Momento Waldo", "Natal Branco (Especial)"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Queda Livre", "Versão de Testes", "Manda Quem Pode", "San Junipero", "Engenharia Reversa", "Oito Milhões de Cliques"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["USS Callister", "Arkangel", "Crocodilo", "Hang the DJ", "Metalhead", "Black Museum"] 
      },
      { 
        numero: "Temporada 5", 
        capitulos: ["Striking Vipers", "Smithereens", "Rachel, Jack e Ashley Too"] 
      },
      { 
        numero: "Temporada 6", 
        capitulos: ["A Joan é Péssima", "Loch Henry", "Beyond the Sea", "Mazey Day", "Demônio 79"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/V0HCZ4PGq_k",
      info: [
        { titulo: "Criador", valor: "Charlie Brooker" },
        { titulo: "Filme Interativo", valor: "Bandersnatch (2018)" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Zeppotron • House of Tomorrow" },
        { titulo: "Local de Produção", valor: "Reino Unido / Global" },
        { titulo: "Status", valor: "Em Produção (S7 para 2025/2026)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "O nome 'Black Mirror' (Espelho Preto) refere-se à tela de uma TV, celular ou computador quando está desligada, refletindo o espectador.",
        "O episódio 'San Junipero' foi o primeiro da série a ganhar um Emmy e quebrou a tradição de finais pessimistas da série.",
        "Muitas das tecnologias mostradas nas primeiras temporadas, como o sistema de crédito social ou robôs-cachorros, já possuem protótipos ou versões reais hoje em dia."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 600.000+ avaliações",
      reviews: [
        {
          autor: "Variety",
          texto: "Uma visão profética e aterrorizante do nosso relacionamento com a tecnologia."
        },
        {
          autor: "The Guardian",
          texto: "Brooker continua sendo o mestre do desconforto moderno. Cada episódio é um soco no estômago."
        },
        {
          autor: "tech_distopia",
          texto: "O episódio 'Beyond the Sea' da 6ª temporada é cinema puro. Aaron Paul está incrível!"
        }
      ]
    },

    mas: [
      { titulo: "Love, Death & Robots", ano: "2019" },
      { titulo: "Severance (Ruptura)", ano: "2022" },
      { titulo: "Electric Dreams", ano: "2017" },
      { titulo: "Dark Mirror", ano: "2020" },
      { titulo: "The Twilight Zone", ano: "1959" }
    ]
},

  "the_bear_(o_urso)": {
    id: "the_bear_(o_urso)",
    titulo: "The Bear",
    imagem: "assets/img/pastaseries/the-bear.jpg",
    capa: "/assets/img/capa/the-bear-capa.jpg",
    tempo: "4 Temporadas",
    ano: "2022 - Presente",
    genero: ["Drama", "Comédia"],
    dataGenre: "drama comedia",
    descricao: "Carmy Berzatto, um jovem chef de elite do mundo da alta gastronomia, volta para Chicago para administrar a lanchonete de sua família após uma perda trágica. Ele precisa equilibrar as tensões da cozinha, uma equipe obstinada e seus próprios traumas.",
    
    elenco: [
      { ator: "Jeremy Allen White", personagem: "Carmen 'Carmy' Berzatto" },
      { ator: "Ayo Edebiri", personagem: "Sydney Adamu" },
      { ator: "Ebon Moss-Bachrach", personagem: "Richard 'Richie' Jerimovich" },
      { ator: "Abby Elliott", personagem: "Natalie 'Sugar' Berzatto" },
      { ator: "Liza Colón-Zayas", personagem: "Tina" },
      { ator: "Matty Matheson", personagem: "Neil Fak" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: ["Sistema", "Mãos", "Brigada", "Cães", "Sherbet", "Ceres", "Revisão", "Braciola"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: ["Beef", "Massa", "Sundae", "Honeydew", "Pop", "Peixes", "Garfos", "Bolognese", "Omelete", "O Urso"] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: ["Amanhã", "Next", "Portas", "Violet", "Children", "Napkins", "Legacy", "Ice Chips", "Apologies", "Forever"] 
      },
      { 
        numero: "Temporada 4", 
        capitulos: ["Estrela", "O Retorno", "Fogo", "Cardápio", "Família", "Resgate", "Crítica", "Cozinha", "Linhagem", "O Próximo Pedido"] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/gB_ZshCshpg",
      info: [
        { titulo: "Criador", valor: "Christopher Storer" },
        { titulo: "Local de Produção", valor: "Chicago, Illinois (EUA)" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "FX Productions" },
        { titulo: "Status", valor: "Finalizada / Possíveis Especiais" },
        { titulo: "Prêmios", valor: "Vencedora de múltiplos Emmy e Globos de Ouro" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+ / Hulu" }
      ],
      funFacts: [
        "Jeremy Allen White treinou em cozinhas reais e frequentou o Institute of Culinary Education para aprender as técnicas de corte que vemos na série.",
        "O episódio 'Peixes' (2x06) é famoso por reunir um elenco de estrelas como Jamie Lee Curtis, Jon Bernthal e Bob Odenkirk em um jantar de Natal caótico.",
        "Matty Matheson, que interpreta o Neil Fak, é um chef profissional na vida real e atua como produtor e consultor gastronômico da série."
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Crítica e Público",
      reviews: [
        {
          autor: "Rolling Stone",
          texto: "Um retrato visceral e honesto sobre o estresse na cozinha e o processo de cura através do trabalho."
        },
        {
          autor: "AdoroCinema",
          texto: "Edição frenética e atuações de tirar o fôlego. 'The Bear' redefine o drama televisivo contemporâneo."
        },
        {
          autor: "chef_luigi_92",
          texto: "Finalmente uma série que mostra o caos real de uma cozinha. Sinto a ansiedade em cada 'Yes, Chef!'"
        }
      ]
    },

    mas: [
      { titulo: "Boiling Point", ano: "2021" },
      { titulo: "Shameless", ano: "2011" },
      { titulo: "Chef's Table", ano: "2015" },
      { titulo: "Beef (Treta)", ano: "2023" },
      { titulo: "Succession", ano: "2018" }
    ]
},

  "narcos": {
    id: "narcos",
    titulo: "Narcos",
    imagem: "assets/img/pastaseries/narcos.jpg",
    capa: "/assets/img/capa/narcos-capa.jpg",
    tempo: "3 Temporadas",
    ano: "2015 - 2017",
    genero: ["Crime", "Drama", "Biografia"],
    dataGenre: "crime drama biografia",
    descricao: "A série narra a história real da propagação da cocaína nos Estados Unidos e na Europa, graças ao Cartel de Medellín, liderado por Pablo Escobar, enquanto as forças policiais lutam em um conflito brutal e sangrento.",
    
    elenco: [
      { ator: "Wagner Moura", personagem: "Pablo Escobar" },
      { ator: "Pedro Pascal", personagem: "Javier Peña" },
      { ator: "Boyd Holbrook", personagem: "Steve Murphy" },
      { ator: "Damian Alcazar", personagem: "Gilberto Rodríguez Orejuela" },
      { ator: "Alberto Ammann", personagem: "Pacho Herrera" },
      { ator: "Paulina Gaitán", personagem: "Tata Escobar" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Descida", "A Espada de Simón Bolívar", "Os Homens de Sempre", "O Palácio em Chamas", 
          "Haverá um Futuro", "Explosivos", "Você Vai Chorar Sangue", "A Grande Mentira", 
          "La Catedral", "A Decolagem"
        ] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Finalmente Livre", "Cambalacho", "Nossa Senhora de La Altagracia", "O Bom, o Mau e o Morto", 
          "Os Inimigos do Meu Inimigo", "Los Pepes", "Alemanha, 1993", "Erros de Cálculo", 
          "Nuestra Finca", "Al Fin Cayó!"
        ] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: [
          "A Estratégia do Chefão", "O Cartel de Cali", "Siga o Dinheiro", "Xeque-Mate", 
          "MRO", "Os Melhores Planos", "Sin Salida", "Convivir", "Todos os Homens do Presidente", "Regresso a Casa"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/U7elNhHwgBU",
      info: [
        { titulo: "Produtor Executivo", valor: "José Padilha" },
        { titulo: "Narração", valor: "Steve Murphy (T1-T2) / Javier Peña (T3)" },
        { titulo: "Idiomas Disponíveis", valor: "Espanhol, Inglês, Português (BR)" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Gaumont International Television" },
        { titulo: "Local de Produção", valor: "Colômbia" },
        { titulo: "Status", valor: "Finalizada (Seguida por Narcos: México)" },
        { titulo: "Idioma Original", valor: "Espanhol / Inglês" },
        { titulo: "Distribuição", valor: "Netflix" }
      ],
      funFacts: [
        "Wagner Moura, que é brasileiro, teve que se mudar para Medellín meses antes das filmagens para aprender espanhol do zero e ganhar peso para o papel.",
        "A série mistura imagens reais de arquivo da época (noticiários e fotos) com as cenas dramatizadas para aumentar o realismo.",
        "O verdadeiro Javier Peña e Steve Murphy trabalharam como consultores na série para garantir a precisão dos detalhes táticos da captura de Escobar."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 450.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma performance magistral de Wagner Moura que humaniza e aterroriza ao mesmo tempo."
        },
        {
          autor: "The New York Times",
          texto: "Viciante, educativa e tecnicamente impecável. O ritmo da terceira temporada prova que a série sobrevive além de Escobar."
        },
        {
          autor: "plata_o_plomo_fan",
          texto: "A abertura 'Tuyo' é a melhor de todas as séries da Netflix. Impossível pular!"
        }
      ]
    },

    mas: [
      { titulo: "Narcos: México", ano: "2018" },
      { titulo: "El Chapo", ano: "2017" },
      { titulo: "Griselda", ano: "2024" },
      { titulo: "ZeroZeroZero", ano: "2020" },
      { titulo: "Peaky Blinders", ano: "2013" }
    ]
},

  "euphoria": {
    id: "euphoria",
    titulo: "Euphoria",
    imagem: "assets/img/pastaseries/euphoria.jpg",
    capa: "/assets/img/capa/euphoria-capa.jpg",
    tempo: "3 Temporadas",
    ano: "2019 - Presente",
    genero: ["Drama", "Teen"],
    dataGenre: "drama teen",
    descricao: "Uma visão crua e visualmente deslumbrante sobre um grupo de estudantes do ensino médio que navega por amores, traumas, redes sociais e vício em drogas em um mundo cada vez mais incerto.",
    
    elenco: [
      { ator: "Zendaya", personagem: "Rue Bennett" },
      { ator: "Hunter Schafer", personagem: "Jules Vaughn" },
      { ator: "Sydney Sweeney", personagem: "Cassie Howard" },
      { ator: "Jacob Elordi", personagem: "Nate Jacobs" },
      { ator: "Alexa Demie", personagem: "Maddy Perez" },
      { ator: "Maude Apatow", personagem: "Lexi Howard" }
    ],

    temporadas_detalhes: [
      { 
        numero: "Temporada 1", 
        capitulos: [
          "Piloto", "Stuntin' Like My Daddy", "Made You Look", "Shook Ones Pt. II", 
          "Bonnie and Clyde", "The Next Episode", "The Trials and Tribulations of Trying to Pee While Depressed", "And Salt the Earth Behind You"
        ] 
      },
      { 
        numero: "Especiais (Ponte)", 
        capitulos: ["Trouble Don't Last Always (Rue)", "Fuck Anyone Who's Not a Sea Blob (Jules)"] 
      },
      { 
        numero: "Temporada 2", 
        capitulos: [
          "Trying to Get to Heaven Before They Close the Door", "Out of Touch", "Ruminations: Big and Little Bullys", 
          "You Who Cannot See, Think of Those Who Can", "Stand Still Like the Hummingbird", "A Thousand Little Trees of Blood", 
          "The Theater and Its Double", "All My Life, My Heart Has Yearned for a Thing I Cannot Name"
        ] 
      },
      { 
        numero: "Temporada 3", 
        capitulos: [
          "O Salto", "Sombras do Passado", "Novas Cicatrizes", "A Cidade que Nunca Dorme", 
          "Consequências", "Reencontro", "Labirinto de Espelhos", "Luz no Fim do Túnel"
        ] 
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/RPz63F7C6vA",
      info: [
        { titulo: "Criador", valor: "Sam Levinson" },
        { titulo: "Trilha Sonora", valor: "Labrinth" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "A24 • HBO Entertainment" },
        { titulo: "Local de Produção", valor: "Los Angeles, Califórnia (EUA)" },
        { titulo: "Status", valor: "Em Exibição" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Max (HBO)" }
      ],
      funFacts: [
        "Zendaya fez história ao se tornar a pessoa mais jovem a ganhar dois prêmios Emmy de Melhor Atriz em Série Dramática pelo papel de Rue.",
        "A série é famosa pela sua 'Maquiagem Euphoria', que influenciou tendências de moda mundiais com o uso de glitter, pedrarias e cores vibrantes.",
        "A 3ª temporada apresenta um salto temporal de cinco anos, mostrando os personagens fora do ambiente escolar e lidando com a vida adulta."
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 400.000+ avaliações",
      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma experiência sensorial. Euphoria usa a estética para traduzir sentimentos que as palavras não alcançam."
        },
        {
          autor: "Vogue",
          texto: "O figurino e a maquiagem são personagens à parte. Uma obra-prima visual da A24."
        },
        {
          autor: "labrinth_fan",
          texto: "A trilha sonora do Labrinth é o que dá alma para essa série. Impossível não se emocionar com as cenas da Rue."
        }
      ]
    },

    mas: [
      { titulo: "Skins", ano: "2007" },
      { titulo: "The Idol", ano: "2023" },
      { titulo: "Genera+ion", ano: "2021" },
      { titulo: "Grand Army", ano: "2020" },
      { titulo: "Thirteen (Aos Treze)", ano: "2003" }
    ]
},

"the_office": {
  id: "the_office",
  titulo: "The Office",
  imagem: "assets/img/pastaseries/the-office.jpg",
  capa: "/assets/img/capa/the-office-capa.jpg",
  tempo: "9 Temporadas",
  ano: "2005 - 2013",
  genero: ["Comédia", "Sitcom", "documentário"],
  dataGenre: "comedia sitcom documentario",
  descricao: "No formato de documentário, a série retrata o cotidiano de um grupo de funcionários de uma empresa de papel em Scranton, Pensilvânia. Liderados pelo atrapalhado gerente Michael Scott, eles lidam com o tédio, as fofocas e as rivalidades do ambiente de escritório.",
  
  elenco: [
    { ator: "Steve Carell", personagem: "Michael Scott" },
    { ator: "Rainn Wilson", personagem: "Dwight Schrute" },
    { ator: "John Krasinski", personagem: "Jim Halpert" },
    { ator: "Jenna Fischer", personagem: "Pam Beesly" },
    { ator: "B.J. Novak", personagem: "Ryan Howard" },
    { ator: "Ed Helms", personagem: "Andy Bernard" }
  ],

  temporadas_detalhes: [
    { 
      numero: "Temporada 1", 
      capitulos: ["Piloto", "Dia da Diversidade", "Plano de Saúde", "A Aliança", "Basquete", "A Garota Bonita"] 
    },
    { 
      numero: "Temporada 2", 
      capitulos: ["O Prêmio Dundie", "Assédio Sexual", "Luta de Escritório", "O Incêndio", "Halloween", "O Churrasco", "O Cliente", "Avaliação de Desempenho", "Vigilância Eletrônica", "Festa de Natal", "O Cruzeiro da Bebida", "O Ferimento", "O Segredo", "O Tapete", "Meninos e Meninas", "O Reclamante", "O Aniversário do Dwight", "O Dia das Crianças", "A Grande Venda", "Prova de Drogas", "Resolução de Conflitos", "Noite de Cassino"] 
    },
    { 
      numero: "Temporada 3", 
      capitulos: ["Cala a Boca, Gay", "A Convenção", "O Golpe", "Conselhos de Sobrevivência", "Iniciação", "Dia das Bruxas", "O Fechamento", "A Fusão", "O Presidiário", "Um Natal à La Benihana", "De Volta das Férias", "Vendedores Viajantes", "O Retorno", "Ben Franklin", "O Casamento da Phyllis", "Negócios é Negócios", "Coquetel", "O Negociador", "Segurança no Trabalho", "Recall de Produto", "Dia de Folga", "Corrida na Praia", "O Trabalho"] 
    },
    { 
      numero: "Temporada 4", 
      capitulos: ["Corrida Divertida", "Dunder Mifflin Infinity", "A Festa de Lançamento", "Dinheiro", "Separação Local", "A Propaganda", "O Depoimento", "O Jantar", "Modelo de Cadeira", "Noite na Cidade", "Dia de Dieta", "Adeus, Toby"] 
    },
    { 
      numero: "Temporada 5", 
      capitulos: ["Perda de Peso", "Ética nos Negócios", "Inundação", "Crime e Castigo", "Transferência de Funcionários", "Pesquisa de Satisfação", "Viagem de Negócios", "Estrutura Salarial", "O Excedente", "O Duelo", "Relegação", "Prince Family Paper", "Alívio do Estresse", "Palestra", "Troca de Sangue", "Aniversário Dourado", "Novo Chefe", "Two Weeks", "Dream Team", "A Michael Scott Paper Co.", "Heavy Competition", "Broke", "Casual Friday", "Cafe Disco", "Company Picnic"] 
    },
    { 
      numero: "Temporada 6", 
      capitulos: ["Gossip", "The Meeting", "The Promotion", "The Delivery", "The Niagra", "Mafia", "The Lover", "Koi Pond", "Murder", "Shareholder Meeting", "Scott's Tots", "Secret Santa", "The Banker", "Sabre", "Manager and Salesman", "The Delivery", "St. Patrick's Day", "New Leads", "Happy Hour", "Secretary's Day", "Body Language", "The Cover-Up", "The Chump", "Whistleblower"] 
    },
    { 
      numero: "Temporada 7", 
      capitulos: ["Nepotismo", "Conselhos", "O Brinquedo de Andy", "O Sexo", "O Picadeiro", "Fantasia de Halloween", "O Batizado", "O Público", "China", "Classy Christmas", "Ultimato", "PDA", "Threat Level Midnight", "Todd Packer", "Venda de Garagem", "Dia do Treinamento", "Adeus, Michael", "The Inner Circle", "Dwight K. Schrute, (Acting) Manager", "Search Committee"] 
    },
    { 
      numero: "Temporada 8", 
      capitulos: ["A Lista", "O Incentivo", "Lotto", "Garden Party", "Spooked", "Doomsday", "Pam's Replacement", "Gettysburg", "Mrs. California", "Christmas Wishes", "Trivia", "Pool Party", "Jury Duty", "Special Project", "Tallahassee", "After Hours", "Test the Store", "Last Day in Florida", "Get the Girl", "Welcome Party", "Angry Andy", "Fundraiser", "Turf War", "Free Family Portrait Studio"] 
    },
    { 
      numero: "Temporada 9", 
      capitulos: ["Nova Gene", "A Árvore de Natal", "Ancestralidade", "O Trabalho", "Aqui vem o Treble", "O Barco", "The Target", "Dwight Christmas", "Lice", "Suit Warehouse", "Customer Loyalty", "Junior Salesman", "Vandalism", "Couples Discount", "Moving On", "The Farm", "Promos", "Stairmageddon", "Paper Airplane", "Livin' the Dream", "A.A.R.M.", "Final da Série"] 
    }
  ],

  trailer: {
    url: "https://www.youtube.com/embed/2iKdm69vNlo",
    info: [
      { titulo: "Adaptador", valor: "Greg Daniels" },
      { titulo: "Criadores Originais", valor: "Ricky Gervais • Stephen Merchant" },
      { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
      { titulo: "Legendas", valor: "40+ idiomas" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Estúdio", valor: "Universal Television" },
      { titulo: "Local de Produção", valor: "Van Nuys, Califórnia" },
      { titulo: "Status", valor: "Finalizada" },
      { titulo: "Prêmios", valor: "Vencedora de 5 Primetime Emmy Awards" },
      { titulo: "Distribuição", valor: "Netflix • Prime Video • HBO Max" }
    ],
    funFacts: [
      "Muitos dos atores secundários, como B.J. Novak (Ryan), Mindy Kaling (Kelly) e Paul Lieberstein (Toby), eram na verdade os roteiristas principais da série.",
      "John Krasinski gravou as imagens de abertura da série em Scranton, Pensilvânia, quando ele conseguiu o papel de Jim e foi visitar a cidade real.",
      "A cena da proposta de Jim para Pam em um posto de gasolina foi a cena mais cara da série, custando cerca de 250 mil dólares para construir o posto e recriar a chuva."
    ]
  },

  resenha: {
    nota: "⭐ 4.9 / 5 — Baseado em 3.000.000+ avaliações",
    reviews: [
      {
        autor: "Rotten Tomatoes",
        texto: "Uma série que começou como uma cópia e se tornou a sitcom definitiva da era moderna."
      },
      {
        autor: "IMDb",
        texto: "Michael Scott é o personagem mais irritante e amável da história da TV. Assista 100 vezes e ainda rirá."
      },
      {
        autor: "dunder_mifflin_forever",
        texto: "O final da série é a coisa mais emocionante que já vi. Chorei como um bebê com a volta do Michael."
      }
    ]
  },

  mas: [
    { titulo: "Parks and Recreation", ano: "2009" },
    { titulo: "Brooklyn Nine-Nine", ano: "2013" },
    { titulo: "Community", ano: "2009" },
    { titulo: "Arrested Development", ano: "2003" },
    { titulo: "Abbott Elementary", ano: "2021" }
  ]
},

"bridgerton": {
  id: "bridgerton",
  titulo: "Bridgerton",
  imagem: "assets/img/pastaseries/bridgerton.jpg",
  capa: "/assets/img/capa/bridgerton-capa.jpg",
  tempo: "4 Temporadas",
  ano: "2020 - Presente",
  genero: ["Drama", "Romance", "Histórico"],
  dataGenre: "romance drama historico",
  descricao: "Oito irmãos inseparáveis buscam amor e felicidade na alta sociedade de Londres. Inspirada nos best-sellers de Julia Quinn, a série revela os segredos e escândalos da Regência Britânica através do olhar da misteriosa Lady Whistledown.",
  
  elenco: [
    { ator: "Nicola Coughlan", personagem: "Penelope Featherington" },
    { ator: "Luke Newton", personagem: "Colin Bridgerton" },
    { ator: "Luke Thompson", personagem: "Benedict Bridgerton" },
    { ator: "Jonathan Bailey", personagem: "Anthony Bridgerton" },
    { ator: "Simone Ashley", personagem: "Kate Sharma" },
    { ator: "Julie Andrews", personagem: "Voz de Lady Whistledown" }
  ],

  temporadas_detalhes: [
    { 
      numero: "Temporada 1", 
      capitulos: ["Diamante de Primeira Água", "Choque e Deleite", "A Arte do Desmaio", "Uma Questão de Honra", "O Duque e Eu", "Pura Emoção", "Oceanos de Distância", "Depois da Tempestade"] 
    },
    { 
      numero: "Temporada 2", 
      capitulos: ["O Libertino", "Onde Começa o Dever", "Obsessão", "Vitória", "Um Destino de Honra", "A Escolha", "Harmonia", "O Visconde que me Amava"] 
    },
    { 
      numero: "Temporada 3", 
      capitulos: ["Saindo das Sombras", "Sob a Luz do Luar", "Forças da Natureza", "Velhos Amigos", "Tic-Tac", "Romanceando o Sr. Bridgerton", "Dando as Cartas", "Revelação"] 
    },
    { 
      numero: "Temporada 4", 
      capitulos: ["O Baile de Máscaras", "Um Encontro de Almas", "A Dama de Prata", "Corações Errantes", "Sombras de My Cottage", "Segredos de Família", "O Caminho do Coração", "Alegria Compartilhada"] 
    }
  ],

  trailer: {
    url: "https://www.youtube.com/embed/gpv7ayf_tyE",
    info: [
      { titulo: "Produção", valor: "Shonda Rhimes (Shondaland)" },
      { titulo: "Baseado em", valor: "Os Bridgertons (Série de Livros)" },
      { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
      { titulo: "Legendas", valor: "30+ idiomas" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Estúdio", valor: "Netflix" },
      { titulo: "Local de Produção", valor: "Bath e Londres, Reino Unido" },
      { titulo: "Status", valor: "Em Exibição / Renovada" },
      { titulo: "Spin-off", valor: "Rainha Charlotte: Uma História Bridgerton" },
      { titulo: "Distribuição", valor: "Netflix" }
    ],
    funFacts: [
      "A série é famosa por suas versões instrumentais de músicas pop modernas, como hits de Taylor Swift, Billie Eilish e Ariana Grande transformados em quartetos de cordas.",
      "Diferente da maioria das séries de época, Bridgerton usa uma estética 'color-blind' e figurinos com cores vibrantes que não seriam historicamente possíveis na época, para criar um visual de conto de fadas.",
      "A 3ª temporada, focada em Penelope e Colin ('Polin'), quebrou recordes de audiência na Netflix, tornando-se uma das temporadas mais assistidas da história da plataforma."
    ]
  },

  resenha: {
    nota: "⭐ 4.8 / 5 — Baseado em 1.200.000+ avaliações",
    reviews: [
      {
        autor: "Vogue",
        texto: "Um banquete visual. Bridgerton reinventa o drama de época com diversidade, cores e muito romance."
      },
      {
        autor: "AdoroCinema",
        texto: "Viciante do início ao fim. A química entre os protagonistas de cada temporada é o grande trunfo da série."
      },
      {
        autor: "lady_w_fan",
        texto: "Benedict finalmente teve sua vez na 4ª temporada! A espera pelo baile de máscaras valeu muito a pena."
      }
    ]
  },

  mas: [
    { titulo: "Rainha Charlotte", ano: "2023" },
    { titulo: "The Gilded Age", ano: "2022" },
    { titulo: "Downton Abbey", ano: "2010" },
    { titulo: "Sanditon", ano: "2019" },
    { titulo: "Enola Holmes", ano: "2020" }
  ]
}
};


