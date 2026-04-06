// BANCO DE DADOS DOS FILMES
const filmes = {
  deadpooltwo: {
  titulo: "Deadpool 2",
  imagem: "assets/img/pastafilmes/deadpooltwo.jpg",
  capa: "/assets/img/deadpoolcapa3.png", // troca se tiver local
  tempo: "2h 00min",
  ano: "2018",
  genero: ["Ação", "Comédia", "Sci-Fi"],
  descricao: "Wade Wilson, o irreverente mercenário conhecido como Deadpool, tenta encontrar um novo propósito após uma perda devastadora. Quando um jovem mutante com habilidades perigosas se torna alvo de Cable, um soldado vindo do futuro, Deadpool decide agir. Para protegê-lo, ele reúne um grupo improvável de heróis — a X-Force — e embarca em uma missão caótica, violenta e cheia de humor ácido, onde terá que aprender, à sua própria maneira, o verdadeiro significado de família.",

  elenco: [
    {
      ator: "Ryan Reynolds",
      personagem: "Wade Wilson / Deadpool"
    },
    {
      ator: "Josh Brolin",
      personagem: "Cable"
    },
    {
      ator: "Zazie Beetz",
      personagem: "Domino"
    },
    {
      ator: "Julian Dennison",
      personagem: "Russell / Firefist"
    }
  ],

  trailer: {
    url: "https://www.youtube.com/embed/D86RtevtfrA",
    info: [
      { titulo: "Director", valor: "David Leitch" },
      { titulo: "Writers", valor: "Rhett Reese • Paul Wernick • Ryan Reynolds" },
      { titulo: "Languages Available", valor: "English, Portuguese (BR), Spanish, French" },
      { titulo: "Subtitles", valor: "10+ languages" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "20th Century Fox • Marvel Entertainment" },
      { titulo: "Franchise", valor: "X-Men Universe" },
      { titulo: "Filming Locations", valor: "Vancouver (Canada)" },
      { titulo: "Original Language", valor: "English" },
      { titulo: "Distribution", valor: "Theatrical + Streaming (Disney+)" }
    ],

    funFacts: [
      "Deadpool 2 teve uma versão estendida chamada 'Super Duper Cut'.",
      "A personagem Domino foi muito elogiada pelo público.",
      "O filme brinca constantemente quebrando a quarta parede."
    ]
  },

  resenha: {
    nota: "⭐ 4.5 / 5 — Based on audience ratings",

    reviews: [
      {
        autor: "Cineverse Weekly",
        texto: "Mais ação e humor ainda mais afiado que o primeiro filme."
      },
      {
        autor: "SuperHeroReport.com",
        texto: "Um dos filmes mais divertidos da Marvel."
      },
      {
        autor: "IGN",
        texto: "Deadpool 2 entrega tudo que promete e mais."
      },
      {
        autor: "user123",
        texto: "Ri do começo ao fim. Cable foi um ótimo acréscimo."
      }
    ]
  },

  mas: [
    { titulo: "Deadpool", ano: "2016" },
    { titulo: "Logan", ano: "2017" },
    { titulo: "X-Men: Apocalypse", ano: "2016" },
    { titulo: "The Wolverine", ano: "2013" },
    { titulo: "X-Men: Days of Future Past", ano: "2014" }
  ]
},

  superman: {
    titulo: "Superman",
    imagem: "https://i.pinimg.com/736x/d4/55/e2/d455e222e4c605f8ef678f1f8a433454.jpg",
    capa: "/assets/img/capa/supercapa1.png",
    tempo: "2h 28min",
    ano: "2025",
    genero: ["Ação", "Aventura", "Sci-Fi"],
    descricao: "Clark Kent assume seu papel como Superman e enfrenta Lex Luthor.",
    
    elenco: [
  {
    ator: "David Corenswet",
    personagem: "Clark Kent / Superman"
  },
  {
    ator: "Rachel Brosnahan",
    personagem: "Lois Lane"
  },
  {
    ator: "Nicholas Hoult",
    personagem: "Lex Luthor"
  }
  ],

    trailer: {
  url: "https://www.youtube.com/embed/OfpXgjP4AOs?si=CSgPiSLEhvztvY16",
  info: [
      { titulo: "Director", valor: "James Gunn" },
      { titulo: "Writers", valor: "James Gunn • Jerry Siegel • Joe Shuster" },
      { titulo: "Languages Available", valor: "English, Portuguese (BR), Spanish, French" },
      { titulo: "Subtitles", valor: "10+ languages" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Studio", valor: "DC Studios • Warner Bros." },
        { titulo: "Franchise", valor: "DC Universe (New Chapter 1)" },
        { titulo: "Filming Locations", valor: "Atlanta (USA), Vancouver (Canada)" },
        { titulo: "Original Language", valor: "English" },
        { titulo: "Distribution", valor: "Theatrical + Streaming (HBO Max)" }
      ],

      funFacts: [
        "First Superman film of the rebooted DCU.",
        "Costume design inspired by the 90s comics.",
        "Rachel Brosnahans performance as Lois has been widely praised by critics." 
      ]
    },

    resenha: {
      nota: "⭐ 4.6 / 5 — Based on 12,453 viewer ratings",

      reviews: [
        {
          autor: "Cineverse Weekly",
          texto: "A heartfelt and powerful reboot. Corenswet nails the role."
        },
        {
          autor: "SuperHeroReport.com",
          texto: "Muito bom."
        },
        {
          autor: "Jhonw",
          texto: "Lex Luthor finally gets the sinister spotlight he deserves."
        },
        {
          autor: "IGN (fictional)",
          texto: "Best Superman film since Man of Steel."
        },
        {
          autor: "user_superfan99",
          texto: "Finally, a Superman with emotion and presence. I cried twice."
        },
        {
          autor: "loislane4life",
          texto: "Rachel is iconic. Best Lois Lane ever."
        },
        {
          autor: "kryptonian42",
          texto: "That mid-credit scene? Absolute chills."
        }
      ]
    },

    mas: [
      { titulo: "The Flash", ano: "2023" },
      { titulo: "The Batman", ano: "2022" },
      { titulo: "Wonder Woman", ano: "2017" },
      { titulo: "Man of Steel", ano: "2013" },
      { titulo: "Shazam!", ano: "2019" },
      { titulo: "Green Lantern: Rebirth", ano: "Upcoming" }
    ]
  },

  sinners: {
  titulo: "Sinners",
  imagem: "assets/img/pastafilmes/sinners.jpg", // troca se quiser
  capa: "/assets/img/capa/sinners-capa.jpg", //  capa: "assets/img/capa/sinners-capa.jpg", 
  tempo: "2h 17min",
  ano: "2025",
  genero: ["Terror", "Suspense", "Drama"],

  descricao: "Dois irmãos gêmeos retornam à cidade onde cresceram tentando recomeçar suas vidas após um passado marcado por violência e erros. No entanto, ao se envolverem com uma comunidade local aparentemente comum, eles descobrem a presença de uma força sombria e sobrenatural que se alimenta dos pecados humanos. À medida que segredos vêm à tona, os irmãos são obrigados a confrontar não apenas a ameaça externa, mas também suas próprias culpas, em uma luta intensa por redenção e sobrevivência.",

  elenco: [
    {
      ator: "Michael B. Jordan",
      personagem: "Smoke / Stack (gêmeos)"
    },
    {
      ator: "Hailee Steinfeld",
      personagem: "Mary"
    },
    {
      ator: "Miles Caton",
      personagem: "Sammie Moore"
    },
    {
      ator: "Jack O'Connell",
      personagem: "Remmick"
    },
    {
      ator: "Wunmi Mosaku",
      personagem: "Annie"
    }
  ],

  trailer: {
    url: "https://youtu.be/CZG-KU_WwA4?si=3BfAKJp8X0I2iplp", 
    info: [
      { titulo: "Diretor", valor: "Ryan Coogler" },
      { titulo: "Roteiristas", valor: "Ryan Coogler" },
      { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
      { titulo: "Legendas", valor: "Mais de 10 idiomas" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "Warner Bros. Pictures • Proximity Media" },
      { titulo: "Franchise", valor: "Original" },
      { titulo: "Setting", valor: "Mississippi Delta (1932)" },
      { titulo: "Idioma Original", valor: "Inglês" },
      { titulo: "Distribuição", valor: "Cinema + Streaming" }
    ],

    funFacts: [
      "Michael B. Jordan interpreta dois personagens no filme.",
      "Mistura elementos de terror, musical e drama histórico.",
      "Ambientado no sul dos EUA durante a era da segregação racial."
    ]
  },

  resenha: {
    nota: "⭐ 4.1 / 5 — Baseado em avaliações do público",

    reviews: [
      {
        autor: "AdoroCinema",
        texto: "Um thriller intenso com elementos sobrenaturais e forte carga emocional."
      },
      {
        autor: "IMDb Users",
        texto: "Visual impressionante e atuação excelente de Michael B. Jordan."
      },
      {
        autor: "Crítica Geral",
        texto: "Ambicioso, diferente e com uma mistura única de gêneros."
      }
    ]
  },

  mas: [
    { titulo: "Get Out", ano: "2017" },
    { titulo: "Us", ano: "2019" },
    { titulo: "Nope", ano: "2022" },
    { titulo: "The Black Phone", ano: "2021" },
    { titulo: "Candyman", ano: "2021" }
  ]
},

peaky_blinders: {
  titulo: "Peaky Blinders: The Immortal Man",
  imagem: "assets/img/pastafilmes/peaky-blinders-theimmortalman.jpg", 
  capa: "/assets/img/capa/peakyblinderscapa2.jpg",
  tempo: "1h 52min",  
  ano: "2026",
  genero: ["Crime", "Drama", "Guerra"],

  descricao: "Durante a Segunda Guerra Mundial, Tommy Shelby retorna do isolamento para enfrentar uma conspiração que ameaça o Reino Unido. Enquanto lida com seus próprios demônios e o peso do passado, ele precisa proteger sua família e impedir um plano nazista que pode destruir a economia do país.",

  elenco: [
    {
      ator: "Cillian Murphy",
      personagem: "Thomas Shelby"
    },
    {
      ator: "Barry Keoghan",
      personagem: "Duke Shelby"
    },
    {
      ator: "Rebecca Ferguson",
      personagem: "Kaulo / Zelda"
    },
    {
      ator: "Tim Roth",
      personagem: "John Beckett"
    },
    {
      ator: "Sophie Rundle",
      personagem: "Ada Thorne"
    },
    {
      ator: "Stephen Graham",
      personagem: "Hayden Stagg"
    }
  ],

  trailer: {
    url: "https://www.youtube.com/embed/lcvUGs3xaDM",
    info: [
      { titulo: "Director", valor: "Tom Harper" },
      { titulo: "Writer", valor: "Steven Knight" },
      { titulo: "Languages Available", valor: "English" },
      { titulo: "Subtitles", valor: "Multiple languages" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "BBC Film • Netflix" },
      { titulo: "Franchise", valor: "Peaky Blinders" },
      { titulo: "Setting", valor: "Birmingham, 1940 (Segunda Guerra Mundial)" },
      { titulo: "Original Language", valor: "English" },
      { titulo: "Distribution", valor: "Cinema + Netflix" }
    ],

    funFacts: [
      "Continuação direta da série Peaky Blinders.",
      "Se passa durante a Segunda Guerra Mundial.",
      "Mostra o fim da jornada de Tommy Shelby."
    ]
  },

  resenha: {
    nota: "⭐ 4.3 / 5 — Baseado em avaliações do público",

    reviews: [
      {
        autor: "IMDb Users",
        texto: "Uma conclusão intensa e emocional para a história de Tommy Shelby."
      },
      {
        autor: "Crítica Geral",
        texto: "Sombrio, poderoso e com alto nível cinematográfico."
      },
      {
        autor: "Fans",
        texto: "Entrega tudo que os fãs esperavam: drama, guerra e redenção."
      }
    ]
  },

  mas: [
    { titulo: "The Godfather", ano: "1972" },
    { titulo: "Scarface", ano: "1983" },
    { titulo: "The Irishman", ano: "2019" },
    { titulo: "Legend", ano: "2015" },
    { titulo: "Boardwalk Empire", ano: "2010" }
  ]
},

ready_or_not_2: {
  titulo: "Ready or Not 2: Here I Come",
  imagem: "assets/img/pastafilmes/readyorNotTwo.jpg",
  capa: "/assets/img/capa/ready-or-nottwo-capa.jpg",
  tempo: "1h 48min",
  ano: "2026",
  genero: ["Terror", "Comédia", "Suspense"],

  descricao: "Após sobreviver ao massacre da família Le Domas, Grace acredita que finalmente está livre do pesadelo. No entanto, ela descobre que o jogo mortal faz parte de algo muito maior. Ao lado de sua irmã afastada, Grace é arrastada para um novo ritual envolvendo famílias poderosas que disputam um trono de influência global. Agora, ela precisa sobreviver mais uma vez enquanto é caçada em uma corrida contra o tempo até o amanhecer.",

  elenco: [
    {
      ator: "Samara Weaving",
      personagem: "Grace MacCaullay"
    },
    {
      ator: "Kathryn Newton",
      personagem: "Faith MacCaullay"
    },
    {
      ator: "Sarah Michelle Gellar",
      personagem: "Ursula Danforth"
    },
    {
      ator: "Elijah Wood",
      personagem: "The Lawyer"
    },
    {
      ator: "Shawn Hatosy",
      personagem: "Titus Danforth"
    },
    {
      ator: "David Cronenberg",
      personagem: "Chester Danforth"
    }
  ],

  trailer: {
    url: "https://www.youtube.com/embed/7K3sNRm8J0w",
    info: [
      { titulo: "Director", valor: "Matt Bettinelli-Olpin • Tyler Gillett" },
      { titulo: "Writer", valor: "Guy Busick • R. Christopher Murphy" },
      { titulo: "Languages Available", valor: "English" },
      { titulo: "Subtitles", valor: "Multiple languages" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "Searchlight Pictures • Radio Silence" },
      { titulo: "Franchise", valor: "Ready or Not" },
      { titulo: "Setting", valor: "Continuação direta após os eventos do primeiro filme" },
      { titulo: "Original Language", valor: "English" },
      { titulo: "Distribution", valor: "Cinema" }
    ],

    funFacts: [
      "Continuação direta do filme de 2019.",
      "Expande o universo com várias famílias envolvidas no ritual.",
      "Introduz um sistema maior de poder ligado ao jogo mortal."
    ]
  },

  resenha: {
    nota: "⭐ 4.0 / 5 — Baseado em avaliações do público",

    reviews: [
      {
        autor: "Crítica Geral",
        texto: "Uma sequência mais ambiciosa que expande o universo do original."
      },
      {
        autor: "Fans",
        texto: "Mais ação, mais caos e uma mitologia maior."
      },
      {
        autor: "Reviewers",
        texto: "Mantém o humor ácido, mas com uma escala muito maior."
      }
    ]
  },

  mas: [
    { titulo: "Ready or Not", ano: "2019" },
    { titulo: "You're Next", ano: "2011" },
    { titulo: "The Hunt", ano: "2020" },
    { titulo: "Scream VI", ano: "2023" },
    { titulo: "The Purge", ano: "2013" }
  ]
},

luca: {
  titulo: "Luca",
  imagem: "assets/img/pastafilmes/luca.jpg",
  capa: "/assets/img/capa/lucacapa.jpg",
  tempo: "1h 35min",
  ano: "2021",
  genero: ["Animação", "Aventura", "Família"],

  descricao: "Em uma pequena cidade litorânea da Itália, Luca, um jovem monstro marinho curioso, descobre um mundo completamente novo ao sair da água e assumir forma humana. Ao lado de seu amigo Alberto, ele vive um verão inesquecível cheio de liberdade, amizade e descobertas, enquanto tenta esconder sua verdadeira identidade dos humanos que temem criaturas como ele.",

  elenco: [
    {
      ator: "Jacob Tremblay",
      personagem: "Luca Paguro"
    },
    {
      ator: "Jack Dylan Grazer",
      personagem: "Alberto Scorfano"
    },
    {
      ator: "Emma Berman",
      personagem: "Giulia Marcovaldo"
    },
    {
      ator: "Maya Rudolph",
      personagem: "Daniela Paguro"
    },
    {
      ator: "Jim Gaffigan",
      personagem: "Lorenzo Paguro"
    }
  ],

  trailer: {
    url: "https://www.youtube.com/embed/mYfJxlgR2jw",
    info: [
      { titulo: "Director", valor: "Enrico Casarosa" },
      { titulo: "Studio", valor: "Pixar Animation Studios" },
      { titulo: "Languages Available", valor: "English, Portuguese (BR), Spanish, Italian" },
      { titulo: "Subtitles", valor: "Multiple languages" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "Pixar • Walt Disney Pictures" },
      { titulo: "Franchise", valor: "Original" },
      { titulo: "Setting", valor: "Riviera Italiana" },
      { titulo: "Original Language", valor: "English" },
      { titulo: "Distribution", valor: "Disney+" }
    ],

    funFacts: [
      "Inspirado na infância do diretor na Itália.",
      "Explora temas de identidade e aceitação.",
      "Foi lançado diretamente no Disney+ em vários países."
    ]
  },

  resenha: {
    nota: "⭐ 4.5 / 5 — Baseado em avaliações do público",

    reviews: [
      {
        autor: "Crítica Geral",
        texto: "Uma animação leve, emocionante e visualmente encantadora."
      },
      {
        autor: "Fans",
        texto: "História simples, mas com uma mensagem poderosa sobre amizade."
      },
      {
        autor: "Reviewers",
        texto: "Pixar entrega mais uma obra sensível e cheia de personalidade."
      }
    ]
  },

  mas: [
    { titulo: "Soul", ano: "2020" },
    { titulo: "Turning Red", ano: "2022" },
    { titulo: "Finding Nemo", ano: "2003" },
    { titulo: "Encanto", ano: "2021" },
    { titulo: "Coco", ano: "2017" }
  ]
},

projecthailmary: {
  titulo: "Project Hail Mary",
  imagem: "assets/img/pastafilmes/ProjectHailMary.jpg", 
  capa: "/assets/img/capa/project-hail-mary-capa.jpg", 
  tempo: "2h 30min",
  ano: "2026",
  genero: ["Sci-Fi", "Drama", "Aventura"],
  descricao: "Um professor de ciências acorda sozinho em uma nave espacial sem memória de quem é ou como chegou ali. Aos poucos, ele descobre que é a última esperança da humanidade para impedir a extinção do Sol — e que precisará usar toda sua inteligência para salvar a Terra, enfrentando desafios impossíveis e uma missão solitária no espaço profundo.",

  elenco: [
    {
      ator: "Ryan Gosling",
      personagem: "Ryland Grace"
    }
  ],

  trailer: {
    url: "https://www.youtube.com/embed/-example-trailer", // troca quando tiver oficial
    info: [
      { titulo: "Director", valor: "Phil Lord • Christopher Miller" },
      { titulo: "Writers", valor: "Drew Goddard • baseado no livro de Andy Weir" },
      { titulo: "Languages Available", valor: "English" },
      { titulo: "Subtitles", valor: "Multiple languages" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "Amazon MGM Studios" },
      { titulo: "Based on", valor: "Livro de Andy Weir (autor de The Martian)" },
      { titulo: "Genre", valor: "Hard Sci-Fi" },
      { titulo: "Original Language", valor: "English" },
      { titulo: "Release", valor: "2026 (previsto)" }
    ],

    funFacts: [
      "Baseado no best-seller 'Project Hail Mary'.",
      "Mesmo autor de The Martian, focado em ciência realista.",
      "Ryan Gosling interpreta um protagonista cientista fora do padrão clássico de heróis."
    ]
  },

  resenha: {
    nota: "⭐ Aguardando avaliações oficiais",

    reviews: [
      {
        autor: "Crítica antecipada",
        texto: "Um dos filmes de ficção científica mais aguardados da década."
      },
      {
        autor: "Fãs do livro",
        texto: "Altíssima expectativa pela adaptação fiel."
      }
    ]
  },

  mas: [
    { titulo: "The Martian", ano: "2015" },
    { titulo: "Interstellar", ano: "2014" },
    { titulo: "Gravity", ano: "2013" },
    { titulo: "Ad Astra", ano: "2019" },
    { titulo: "Arrival", ano: "2016" }
  ]
},


oneBattleAfterAnother: {
  titulo: "One Battle After Another",
  imagem: "assets/img/pastafilmes/one-battle-after-another.jpg", // troca depois por uma capa melhor
  capa: "/assets/img/capa/one-battle-after-another-capa.jpg", // coloca no seu projeto

  tempo: "2h 30min", // estimado (ainda não confirmado oficialmente)
  ano: "2025",
  genero: ["Drama", "Guerra"],

  descricao: "Durante um período de conflitos intensos, um grupo de soldados enfrenta batalhas consecutivas que testam não apenas sua resistência física, mas também seus limites emocionais e morais. Em meio ao caos da guerra, cada decisão pode significar sobrevivência ou perda, revelando o verdadeiro custo de lutar por um ideal.",

  elenco: [
    {
      ator: "Leonardo DiCaprio",
      personagem: "Protagonista (ainda não revelado)"
    },
    {
      ator: "Regina Hall",
      personagem: "Personagem não revelada"
    },
    {
      ator: "Sean Penn",
      personagem: "Personagem não revelado"
    }
  ],

  trailer: {
    url: "", // ainda não disponível
    info: [
      { titulo: "Director", valor: "Paul Thomas Anderson" },
      { titulo: "Writers", valor: "Paul Thomas Anderson" },
      { titulo: "Languages Available", valor: "English" },
      { titulo: "Subtitles", valor: "TBA" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "Warner Bros." },
      { titulo: "Genre Focus", valor: "War Drama" },
      { titulo: "Filming Locations", valor: "United States" },
      { titulo: "Original Language", valor: "English" },
      { titulo: "Distribution", valor: "Theatrical Release" }
    ],

    funFacts: [
      "Directed by Paul Thomas Anderson, conhecido por filmes complexos e intensos.",
      "Marca uma colaboração inédita com Leonardo DiCaprio.",
      "Produção considerada uma das mais ambiciosas da carreira do diretor."
    ]
  },

  resenha: {
    nota: "⭐ TBA — Ainda sem avaliações oficiais",

    reviews: [
      {
        autor: "Crítica inicial",
        texto: "Altamente aguardado pela combinação de diretor e elenco."
      },
      {
        autor: "Expectativa do público",
        texto: "Promete ser um drama intenso e profundo."
      }
    ]
  },

  mas: [
    { titulo: "Oppenheimer", ano: "2023" },
    { titulo: "1917", ano: "2019" },
    { titulo: "Dunkirk", ano: "2017" },
    { titulo: "Saving Private Ryan", ano: "1998" },
    { titulo: "Fury", ano: "2014" }
  ]
},

hoppers: {
  titulo: "Hoppers",
  imagem: "assets/img/pastafilmes/hoppers.jpg", // troque depois
  capa: "/assets/img/capa/hoppers-capa.jpg", // ajuste no seu projeto

  tempo: "1h 40min", // estimado
  ano: "2026",
  genero: ["Animação", "Comédia", "Aventura"],

  descricao: "Uma jovem descobre uma tecnologia revolucionária que permite transferir a consciência humana para corpos robóticos de animais. Ao explorar esse novo mundo, ela embarca em uma aventura inesperada, enfrentando desafios que colocam em risco o equilíbrio entre humanos, natureza e tecnologia.",

  elenco: [
    {
      ator: "Vozes não confirmadas",
      personagem: "Personagens ainda não revelados"
    }
  ],

  trailer: {
    url: "", // ainda não existe
    info: [
      { titulo: "Director", valor: "Daniel Chong" },
      { titulo: "Studio", valor: "Pixar Animation Studios" },
      { titulo: "Languages Available", valor: "English" },
      { titulo: "Subtitles", valor: "TBA" }
    ]
  },

  sobre: {
    info: [
      { titulo: "Studio", valor: "Pixar • Walt Disney Pictures" },
      { titulo: "Franchise", valor: "Original" },
      { titulo: "Theme", valor: "Tecnologia e natureza" },
      { titulo: "Original Language", valor: "English" },
      { titulo: "Distribution", valor: "Cinema (previsto)" }
    ],

    funFacts: [
      "Dirigido por Daniel Chong, criador de We Bare Bears.",
      "Explora a ideia de transferência de consciência para animais.",
      "Mistura ficção científica com comédia e aventura."
    ]
  },

  resenha: {
    nota: "⭐ TBA — Ainda sem avaliações",

    reviews: [
      {
        autor: "Expectativa",
        texto: "Um dos projetos mais criativos recentes da Pixar."
      },
      {
        autor: "Público",
        texto: "Grande potencial para explorar temas modernos com humor."
      }
    ]
  },

  mas: [
    { titulo: "Inside Out", ano: "2015" },
    { titulo: "Soul", ano: "2020" },
    { titulo: "Luca", ano: "2021" },
    { titulo: "Turning Red", ano: "2022" },
    { titulo: "Toy Story", ano: "1995" }
  ]
},

war_machine: {
  titulo: "War Machine",
  imagem: "assets/img/pastafilmes/war-machine.jpg",
  capa: "/assets/img/capa/war-machine-capa.jpg", // ajuste para o caminho real
  tempo: "1h 46min",
  ano: "2026",
  genero: ["Ação, Ficção Científica, Suspense"],
  descricao: "Máquina de Guerra acompanha os membros do exército de elite dos Estados Unidos da América, os Rangers, após o exaustivo processo seletivo para a unidade especial. Responsáveis pelas missões mais perigosas do mundo, eles são colocados cara a cara com uma ameaça além da imaginação deles. De forma inesperada, uma força extraterrestre complica ainda mais a vida deles. Estrelado por Alan Ritchson, a trama fictícia envolve o público em um suspense surpreendente.",

  elenco: [
    { ator: "Alan Ritchson", personagem: "81" },
    { ator: "Blake Rischardson", personagem: "15" },
    { ator: "Esai Morales", personagem: "Torres" },
    { ator: "Alex King", personagem: "44" },
    { ator: "Jack Patter", personagem: "109" },
    { ator: "Dennis Quaid", personagem: "Sheridan" },
    { ator: "Kaiynan Lonsdale", personagem: "60" },
  ],

  trailer: {
    url: "https://youtu.be/mBenb7O8Hnc?si=J_3sa0SKdjsG35GT",
    info: [
      { titulo: "Director", valor: "Patrick Hughes" },
      { titulo: "Roteiristas", valor: "Patrick Hughes • James Beaufort" },
      { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "Mais de 15 idiomas" }
    ]
  },

  sobre: {
    info: [
        { titulo: "Estúdio", valor: "Lionsgate • Hidden Pictures" },
        { titulo: "Franquia", valor: "Original Netflix / Lionsgate" },
        { titulo: "Locais de Filmagem", valor: "Victoria (Austrália), Los Angeles (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Cinemas + Streaming (Netflix)" }
    ],
    funFacts: [
        "Alan Ritchson passou por um treinamento real de elite dos Rangers para o papel.",
        "O diretor Patrick Hughes descreveu o filme como uma mistura de terror psicológico e ação militar intensa.",
        "As filmagens na Austrália utilizaram tecnologia de ponta para simular ambientes hostis." 
      ]
  },

  resenha: {
    nota: "⭐ 4.8 / 5 — Baseado em 8.942 avaliações de usuários",
    reviews: [
      {
          autor: "CineCrítica Diária",
          texto: "Uma experiência visceral. Alan Ritchson prova que é a próxima grande estrela de ação."
        },
        {
          autor: "Portal Geek Brasil",
          texto: "Ação do início ao fim com um suspense de roer as unhas."
        },
        {
          autor: "Marcos_Filmes",
          texto: "Finalmente um filme militar que foca no aspecto psicológico além dos tiros."
        },
        {
          autor: "AdoroCinema (Fictício)",
          texto: "A melhor performance da carreira de Ritchson até agora."
        },
        {
          autor: "soldier_fan",
          texto: "A coreografia de luta e o realismo tático são impecáveis."
        },
        {
          autor: "ana_cine",
          texto: "Tenso, barulhento e emocionante. Assista na maior tela possível!"
        },
        {
          autor: "action_lover99",
          texto: "O final me deixou sem fôlego. Que reviravolta!"
        }
    ]
  },

  mas: [
      { titulo: "Reacher", ano: "2022" },
      { titulo: "The Hitman's Bodyguard", ano: "2017" },
      { titulo: "Fast X", ano: "2023" },
      { titulo: "Greyhound", ano: "2020" },
      { titulo: "Extraction", ano: "2020" },
      { titulo: "The Man from Toronto", ano: "2022" }
  ]
},


remindersOfHim: {
    titulo: "Reminders of Him",
    imagem: "assets/img/pastafilmes/reminders-of-him.jpg",
    capa: "/assets/img/capa/reminders-of-him-capa.jpg",
    tempo: "1h 52min",
    ano: "2026",
    genero: ["Drama", "Romance"],
    descricao: "Após cumprir pena por um trágico erro, Kenna Rowan retorna à cidade onde tudo deu errado, na esperança de se reencontrar com sua filha de quatro anos.",
    
    elenco: [
      {
        ator: "Maika Monroe",
        personagem: "Kenna Rowan"
      },
      {
        ator: "Dacre Montgomery",
        personagem: "Ledger Ward"
      },
      {
        ator: "Isabela Merced",
        personagem: "Diana"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/exemplo_reminders", 
      info: [
        { titulo: "Diretor", valor: "Isaac Aptaker" },
        { titulo: "Escritores", valor: "Colleen Hoover (Livro) • Elizabeth Berger" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "8+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Amazon MGM Studios" },
        { titulo: "Baseado em", valor: "Best-seller de Colleen Hoover" },
        { titulo: "Locais de Filmagem", valor: "Utah (EUA), Los Angeles (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Cinemas + Prime Video" }
      ],

      funFacts: [
        "Baseado no livro 'Uma Segunda Chance', que se tornou um fenômeno no BookTok.",
        "Maika Monroe foi escolhida após sua aclamada atuação em Longlegs.",
        "A trilha sonora conta com artistas independentes para capturar o tom melancólico da história." 
      ]
    },

    resenha: {
      nota: "⭐ 4.7 / 5 — Baseado em 15.230 avaliações de usuários",

      reviews: [
        {
          autor: "Leitores Anonimos",
          texto: "Uma adaptação extremamente fiel e emocionante. Preparem os lenços."
        },
        {
          autor: "Cinema com Afeto",
          texto: "Maika Monroe entrega uma atuação crua e vulnerável que te prende do início ao fim."
        },
        {
          autor: "DramaDaily",
          texto: "A química entre Maika e Dacre Montgomery é o coração deste filme."
        },
        {
          autor: "Crítica_Indie",
          texto: "Uma história sobre perdão e redenção que não foge dos momentos difíceis."
        },
        {
          autor: "user_booklover",
          texto: "Eu li o livro três vezes e o filme conseguiu capturar exatamente o que senti."
        },
        {
          autor: "carol_cine",
          texto: "Kenna Rowan é uma das personagens mais complexas que vi em um romance recentemente."
        },
        {
          autor: "obsessed_fan",
          texto: "O final me destruiu, mas de um jeito bom. Lindo demais."
        }
      ]
    },

    mas: [
      { titulo: "It Ends with Us", ano: "2024" },
      { titulo: "After", ano: "2019" },
      { titulo: "Significant Other", ano: "2022" },
      { titulo: "The Fault in Our Stars", ano: "2014" },
      { titulo: "Normal People", ano: "2020" },
      { titulo: "Watcher", ano: "2022" }
    ]
},

avatar: {
    titulo: "Avatar",
    imagem: "assets/img/pastafilmes/avatar.jpg", // Exemplo de URL de poster
    capa: "/assets/img/capa/avatar-capa.jpg",
    tempo: "2h 42min",
    ano: "2009",
    genero: ["Ação", "Aventura", "Fantasia", "Sci-Fi"],
    descricao: "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem primitivos, mas são altamente evoluídos. Um ex-fuzileiro naval paraplégico é enviado em uma missão única, mas fica dividido entre seguir ordens e proteger o mundo que ele sente ser seu lar.",
    
    elenco: [
      {
        ator: "Sam Worthington",
        personagem: "Jake Sully"
      },
      {
        ator: "Zoe Saldaña",
        personagem: "Neytiri"
      },
      {
        ator: "Sigourney Weaver",
        personagem: "Dra. Grace Augustine"
      },
      {
        ator: "Stephen Lang",
        personagem: "Coronel Miles Quaritch"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/5PSNL1qE6VY", 
      info: [
        { titulo: "Diretor", valor: "James Cameron" },
        { titulo: "Escritores", valor: "James Cameron" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Chinês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "20th Century Fox • Lightstorm Entertainment" },
        { titulo: "Franquia", valor: "Avatar Saga" },
        { titulo: "Locais de Filmagem", valor: "Nova Zelândia, Califórnia (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+ • Mídia Física" }
      ],

      funFacts: [
        "James Cameron esperou mais de 10 anos para que a tecnologia de CGI fosse avançada o suficiente para realizar sua visão.",
        "A língua Na'vi foi criada do zero pelo linguista Paul Frommer, com cerca de 1.000 palavras no lançamento.",
        "O filme deteve o recorde de maior bilheteria da história do cinema por quase uma década." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.250.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma revolução visual que mudou a forma como vemos o cinema em 3D."
        },
        {
          autor: "Omelete",
          texto: "James Cameron cria um ecossistema inteiro que parece vivo e pulsante."
        },
        {
          autor: "Cine_Master",
          texto: "A história é clássica, mas a execução e o mundo de Pandora são inigualáveis."
        },
        {
          autor: "SciFi_World",
          texto: "Visualmente deslumbrante. Um marco para os efeitos especiais modernos."
        },
        {
          autor: "user_pandora_fan",
          texto: "Eu assisti 5 vezes no cinema e ainda choro no final. Neytiri é incrível."
        },
        {
          autor: "tech_guru",
          texto: "O nível de detalhe nas texturas e iluminação ainda impressiona hoje."
        },
        {
          autor: "marcos_viana",
          texto: "Uma experiência imersiva que todos deveriam ter pelo menos uma vez."
        }
      ]
    },

    mas: [
      { titulo: "Avatar: The Way of Water", ano: "2022" },
      { titulo: "Titanic", ano: "1997" },
      { titulo: "Aliens", ano: "1986" },
      { titulo: "The Abyss", ano: "1989" },
      { titulo: "Terminator 2", ano: "1991" },
      { titulo: "Alita: Battle Angel", ano: "2019" }
    ]
},

avengersEndgame: {
    titulo: "Vingadores: Ultimato",
    imagem: "assets/img/pastafilmes/vingadores-endgame.jpg", 
    capa: "/assets/img/capa/vingadores-capa.jpg",
    tempo: "3h 01min",
    ano: "2019",
    genero: ["Ação", "Aventura", "Sci-Fi"],
    descricao: "Após Thanos eliminar metade de toda a vida no universo, os Vingadores restantes devem se reunir uma última vez para desfazer as ações do Titã Louco e restaurar a ordem no cosmos.",
    
    elenco: [
      {
        ator: "Robert Downey Jr.",
        personagem: "Tony Stark / Homem de Ferro"
      },
      {
        ator: "Chris Evans",
        personagem: "Steve Rogers / Capitão América"
      },
      {
        ator: "Mark Ruffalo",
        personagem: "Bruce Banner / Hulk"
      },
      {
        ator: "Chris Hemsworth",
        personagem: "Thor"
      },
      {
        ator: "Scarlett Johansson",
        personagem: "Natasha Romanoff / Viúva Negra"
      },
      {
        ator: "Jeremy Renner",
        personagem: "Clint Barton / Gavião Arqueiro"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/g6ng8iy-lOt", 
      info: [
        { titulo: "Diretores", valor: "Anthony Russo • Joe Russo" },
        { titulo: "Roteiristas", valor: "Christopher Markus • Stephen McFeely" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Japonês" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Marvel Studios" },
        { titulo: "Franquia", valor: "Universo Cinematográfico Marvel (Saga do Infinito)" },
        { titulo: "Locais de Filmagem", valor: "Atlanta (EUA), Edimburgo (Escócia)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+ • Marvel" }
      ],

      funFacts: [
        "O filme foi o ápice de 22 filmes interconectados do MCU ao longo de 11 anos.",
        "Robert Downey Jr. foi o único ator que leu o roteiro completo do filme.",
        "A cena final da batalha levou meses para ser coreografada e renderizada digitalmente." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 2.500.000+ avaliações",

      reviews: [
        {
          autor: "Omelete",
          texto: "O maior evento cinematográfico da nossa geração. Um tributo perfeito aos fãs."
        },
        {
          autor: "CinePOP",
          texto: "Emocionante, épico e visualmente impecável. O fechamento de um ciclo inesquecível."
        },
        {
          autor: "AdoroCinema",
          texto: "Não é apenas um filme de super-herói, é um marco na história da cultura pop."
        },
        {
          autor: "marvelfan_br",
          texto: "Eu te amo 3000. Chorei do começo ao fim, melhor experiência no cinema."
        },
        {
          autor: "geek_master",
          texto: "A batalha final é a coisa mais épica que já vi em uma tela de cinema."
        },
        {
          autor: "luiza_cine",
          texto: "Roteiro amarrado com perfeição. Cada personagem teve seu momento de brilhar."
        },
        {
          autor: "thor_lover",
          texto: "O arco de encerramento do Capitão e do Homem de Ferro foi digno de lendas."
        }
      ]
    },

    mas: [
      { titulo: "Avengers: Infinity War", ano: "2018" },
      { titulo: "Iron Man", ano: "2008" },
      { titulo: "Captain America: Civil War", ano: "2016" },
      { titulo: "Spider-Man: No Way Home", ano: "2021" },
      { titulo: "The Avengers", ano: "2012" },
      { titulo: "Guardians of the Galaxy", ano: "2014" }
    ]
},

titanic: {
    titulo: "Titanic",
    imagem: "assets/img/pastafilmes/titanic.jpg", 
    capa: "/assets/img/capa/titanic-capa.jpg",
    tempo: "3h 14min",
    ano: "1997",
    genero: ["Drama", "Romance"],
    descricao: "Um artista pobre e uma jovem aristocrata se apaixonam a bordo do luxuoso e infame R.M.S. Titanic, sem saber que a embarcação está prestes a colidir com um iceberg no Atlântico Norte.",
    
    elenco: [
      {
        ator: "Leonardo DiCaprio",
        personagem: "Jack Dawson"
      },
      {
        ator: "Kate Winslet",
        personagem: "Rose DeWitt Bukater"
      },
      {
        ator: "Billy Zane",
        personagem: "Caledon Hockley"
      },
      {
        ator: "Kathy Bates",
        personagem: "Molly Brown"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/kVrqfYjknUA", 
      info: [
        { titulo: "Diretor", valor: "James Cameron" },
        { titulo: "Escritor", valor: "James Cameron" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Italiano" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Paramount Pictures • 20th Century Fox" },
        { titulo: "Premiações", valor: "Vencedor de 11 Oscars" },
        { titulo: "Locais de Filmagem", valor: "Rosarito (México), Vancouver (Canadá)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+ • Paramount+" }
      ],

      funFacts: [
        "Na época, foi o filme mais caro já feito, custando 200 milhões de dólares.",
        "James Cameron fez 12 mergulhos reais até os destroços do Titanic para garantir o realismo.",
        "A icônica música 'My Heart Will Go On' quase ficou de fora, pois Cameron não queria músicas pop no filme." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 2.200.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um épico atemporal que equilibra perfeitamente o desastre histórico com um romance inesquecível."
        },
        {
          autor: "Folha Ilustrada",
          texto: "A química entre DiCaprio e Winslet é o que torna este filme um clássico eterno."
        },
        {
          autor: "CineGeral",
          texto: "Efeitos visuais que, mesmo décadas depois, ainda superam muitas produções atuais."
        },
        {
          autor: "user_rose_jack",
          texto: "Eu nunca vou superar o fato de que os dois cabiam naquela porta!"
        },
        {
          autor: "cinema_lover",
          texto: "Assisti mil vezes e choro nas mil vezes. A trilha sonora é perfeita."
        },
        {
          autor: "historico_nerd",
          texto: "A atenção aos detalhes na reconstrução do navio é simplesmente fenomenal."
        },
        {
          autor: "marcos_antonio",
          texto: "O tipo de filme que define o que é a experiência de ir ao cinema."
        }
      ]
    },

    mas: [
      { titulo: "Avatar", ano: "2009" },
      { titulo: "Romeo + Juliet", ano: "1996" },
      { titulo: "The Great Gatsby", ano: "2013" },
      { titulo: "The Abyss", ano: "1989" },
      { titulo: "A Night to Remember", ano: "1958" },
      { titulo: "The Revenant", ano: "2015" }
    ]
},

avatar2: {
    titulo: "Avatar: O Caminho da Água",
    imagem: "assets/img/pastafilmes/avatar-caminho-das-aguas.jpg", 
    capa: "/assets/img/capa/avatar-caminho-das-aguas-capa.jpg",
    tempo: "3h 12min",
    ano: "2022",
    genero: ["Ação", "Aventura", "Fantasia", "Sci-Fi"],
    descricao: "Mais de uma década após os eventos do primeiro filme, Jake Sully e Neytiri formaram uma família. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, forçando Jake a travar uma guerra difícil contra os humanos.",
    
    elenco: [
      {
        ator: "Sam Worthington",
        personagem: "Jake Sully"
      },
      {
        ator: "Zoe Saldaña",
        personagem: "Neytiri"
      },
      {
        ator: "Sigourney Weaver",
        personagem: "Kiri"
      },
      {
        ator: "Kate Winslet",
        personagem: "Ronal"
      },
      {
        ator: "Cliff Curtis",
        personagem: "Tonowari"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/x5pZI-DQofU", 
      info: [
        { titulo: "Diretor", valor: "James Cameron" },
        { titulo: "Escritores", valor: "James Cameron • Rick Jaffa • Amanda Silver" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "20th Century Studios • Lightstorm Entertainment" },
        { titulo: "Franquia", valor: "Avatar Saga" },
        { titulo: "Locais de Filmagem", valor: "Nova Zelândia" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+" }
      ],

      funFacts: [
        "Kate Winslet quebrou o recorde de Tom Cruise de prender a respiração debaixo d'água para uma cena, chegando a 7 minutos e 14 segundos.",
        "James Cameron desenvolveu novas câmeras subaquáticas especificamente para capturar a performance dos atores na água.",
        "O filme levou 13 anos para ser lançado devido à complexidade da tecnologia de captura de movimento subaquática." 
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 850.000+ avaliações",

      reviews: [
        {
          autor: "Omelete",
          texto: "Visualmente o filme mais impressionante já feito. James Cameron é um mestre da imersão."
        },
        {
          autor: "G1 Cinema",
          texto: "Uma jornada emocional profunda que expande o universo de Pandora de forma magnífica."
        },
        {
          autor: "CinePop",
          texto: "Valeu cada segundo da espera. A conexão com a natureza e os novos clãs é fascinante."
        },
        {
          autor: "user_navi_life",
          texto: "O visual dos Metkayina e as criaturas marinhas são de cair o queixo. Chorei muito."
        },
        {
          autor: "nerd_expert",
          texto: "A tecnologia de CGI aqui está anos-luz à frente de qualquer outro estúdio."
        },
        {
          autor: "clara_cine",
          texto: "É longo, mas você nem sente o tempo passar. É como visitar outro planeta."
        },
        {
          autor: "filme_review",
          texto: "Jake e Neytiri como pais trouxe uma camada de maturidade que a franquia precisava."
        }
      ]
    },

    mas: [
      { titulo: "Avatar", ano: "2009" },
      { titulo: "Avatar: Fire and Ash", ano: "2025" },
      { titulo: "Aquaman", ano: "2018" },
      { titulo: "Life of Pi", ano: "2012" },
      { titulo: "The Abyss", ano: "1989" },
      { titulo: "Alita: Battle Angel", ano: "2019" }
    ]
},

avengersInfinityWar: {
    titulo: "Vingadores: Guerra Infinita",
    imagem: "assets/img/pastafilmes/vingadores-guerra-infinita.jpg", 
    capa: "/assets/img/capa/vingadores-infinity-war-capa.jpg",
    tempo: "2h 29min",
    ano: "2018",
    genero: ["Ação", "Aventura", "Sci-Fi"],
    descricao: "Os Vingadores e seus aliados devem estar dispostos a sacrificar tudo em uma tentativa de derrotar o poderoso Thanos antes que seu ataque de devastação e ruína coloque um fim ao universo.",
    
    elenco: [
      {
        ator: "Josh Brolin",
        personagem: "Thanos"
      },
      {
        ator: "Robert Downey Jr.",
        personagem: "Tony Stark / Homem de Ferro"
      },
      {
        ator: "Chris Hemsworth",
        personagem: "Thor"
      },
      {
        ator: "Chris Evans",
        personagem: "Steve Rogers / Capitão América"
      },
      {
        ator: "Benedict Cumberbatch",
        personagem: "Doutor Estranho"
      },
      {
        ator: "Tom Holland",
        personagem: "Peter Parker / Homem-Aranha"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/t_ULBP6V9bg", 
      info: [
        { titulo: "Diretores", valor: "Anthony Russo • Joe Russo" },
        { titulo: "Roteiristas", valor: "Christopher Markus • Stephen McFeely" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Chinês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Marvel Studios" },
        { titulo: "Franquia", valor: "Universo Cinematográfico Marvel (Saga do Infinito)" },
        { titulo: "Locais de Filmagem", valor: "Edimburgo (Escócia), Atlanta (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+ • Marvel" }
      ],

      funFacts: [
        "Thanos é o personagem com mais tempo de tela no filme, sendo considerado o protagonista da história pelos diretores.",
        "O trailer do filme quebrou o recorde de vídeo mais visualizado em 24 horas na época do lançamento.",
        "Tom Holland não teve acesso ao roteiro completo para evitar que soltasse spoilers acidentais." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.800.000+ avaliações",

      reviews: [
        {
          autor: "Omelete",
          texto: "O vilão mais impactante da Marvel. Thanos é uma força da natureza que não pode ser ignorada."
        },
        {
          autor: "CinePOP",
          texto: "Um ritmo frenético que não deixa você respirar. O final é um dos momentos mais chocantes do cinema."
        },
        {
          autor: "AdoroCinema",
          texto: "Equilibrar tantos personagens de forma tão orgânica é um feito hercúleo dos irmãos Russo."
        },
        {
          autor: "marvelfan99",
          texto: "Eu saí do cinema em silêncio absoluto. Nunca vi nada igual."
        },
        {
          autor: "nerd_news",
          texto: "A interação entre os Guardiões da Galáxia e os Vingadores é simplesmente ouro puro."
        },
        {
          autor: "ana_vitoria",
          texto: "Visualmente perfeito e emocionalmente devastador. É o melhor filme do MCU."
        },
        {
          autor: "thor_god",
          texto: "A entrada do Thor em Wakanda é a cena mais épica da história dos super-heróis."
        }
      ]
    },

    mas: [
      { titulo: "Avengers: Endgame", ano: "2019" },
      { titulo: "Guardians of the Galaxy", ano: "2014" },
      { titulo: "Thor: Ragnarok", ano: "2017" },
      { titulo: "Doctor Strange", ano: "2016" },
      { titulo: "Captain America: Civil War", ano: "2016" },
      { titulo: "Black Panther", ano: "2018" }
    ]
},

homemAranhaSemVoltaParaCasa: {
    titulo: "Homem-Aranha: Sem Volta para Casa",
    imagem: "assets/img/pastafilmes/homem-aranha-sem-volta-para-casa.jpg",
    capa: "/assets/img/capa/homem-aranha-sem-volta-para-casa-capa.jpg",
    tempo: "2h 28min",
    ano: "2021",
    genero: ["Ação", "Aventura", "Sci-Fi"],
    descricao: "Com a identidade de Homem-Aranha revelada, Peter Parker pede ajuda ao Doutor Estranho. Quando um feitiço corre mal, vilões perigosos de outros mundos começam a aparecer, forçando Peter a descobrir o que realmente significa ser o Homem-Aranha.",
    
    elenco: [
      {
        ator: "Tom Holland",
        personagem: "Peter Parker / Homem-Aranha"
      },
      {
        ator: "Zendaya",
        personagem: "MJ"
      },
      {
        ator: "Benedict Cumberbatch",
        personagem: "Doutor Estranho"
      },
      {
        ator: "Jacob Batalon",
        personagem: "Ned Leeds"
      },
      {
        ator: "Willem Dafoe",
        personagem: "Norman Osborn / Duende Verde"
      },
      {
        ator: "Alfred Molina",
        personagem: "Otto Octavius / Doutor Octopus"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/ZYzbalQ6L28", 
      info: [
        { titulo: "Diretor", valor: "Jon Watts" },
        { titulo: "Escritores", valor: "Chris McKenna • Erik Sommers" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Marvel Studios • Sony Pictures" },
        { titulo: "Franquia", valor: "Universo Cinematográfico Marvel (Homem-Aranha)" },
        { titulo: "Locais de Filmagem", valor: "Atlanta (EUA), Nova York (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+ • Netflix" }
      ],

      funFacts: [
        "O filme marca o retorno de vários atores de franquias anteriores do Homem-Aranha após anos fora dos papéis.",
        "A produção foi mantida sob segredo extremo, com os atores usando mantos para esconder seus figurinos no set.",
        "Tornou-se o primeiro filme durante a pandemia a ultrapassar a marca de 1 bilhão de dólares em bilheteria." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.500.000+ avaliações",

      reviews: [
        {
          autor: "Omelete",
          texto: "Uma carta de amor ao legado do Homem-Aranha no cinema. Épico e emocionante."
        },
        {
          autor: "AdoroCinema",
          texto: "A melhor performance de Tom Holland como Peter Parker. Willem Dafoe rouba a cena."
        },
        {
          autor: "CinePOP",
          texto: "Um evento cinematográfico que recompensa décadas de fidelidade dos fãs."
        },
        {
          autor: "spidey_fan_br",
          texto: "Eu gritei e chorei no cinema. A melhor experiência que já tive com a Marvel."
        },
        {
          autor: "nerd_verso",
          texto: "O roteiro consegue equilibrar nostalgia com uma história genuinamente importante para o Peter."
        },
        {
          autor: "carla_oliveira",
          texto: "As cenas de luta e o peso emocional das perdas tornam este filme único."
        },
        {
          autor: "multiverse_lover",
          texto: "Finalmente vimos o potencial total do Aranha de Tom Holland. Incrível."
        }
      ]
    },

    mas: [
      { titulo: "Spider-Man: Homecoming", ano: "2017" },
      { titulo: "Spider-Man: Far From Home", ano: "2019" },
      { titulo: "Spider-Man", ano: "2002" },
      { titulo: "The Amazing Spider-Man", ano: "2012" },
      { titulo: "Avengers: Endgame", ano: "2019" },
      { titulo: "Spider-Man: Into the Spider-Verse", ano: "2018" }
    ]
},

theLionKing: {
    titulo: "O Rei Leão",
    imagem: "assets/img/pastafilmes/rei-leao.jpg", 
    capa: "/assets/img/capa/rei-leao-capa.jpg",
    tempo: "1h 28min",
    ano: "1994",
    genero: ["Animação", "Aventura", "Drama", "Musical"],
    descricao: "Enganado pelo tio sobre a morte de seu pai, o jovem príncipe leão Simba foge de seu reino para aprender o verdadeiro significado de responsabilidade e bravura antes de retornar para reivindicar seu trono.",
    
    elenco: [
      {
        ator: "Matthew Broderick / Garcia Júnior",
        personagem: "Simba"
      },
      {
        ator: "James Earl Jones / Paulo Flores",
        personagem: "Mufasa"
      },
      {
        ator: "Jeremy Irons / Jorgeh Ramos",
        personagem: "Scar"
      },
      {
        ator: "Nathan Lane / Mauro Ramos",
        personagem: "Timão"
      },
      {
        ator: "Ernie Sabella / Guilherme Briggs",
        personagem: "Pumba"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/lFzVJEkscUo", 
      info: [
        { titulo: "Diretores", valor: "Roger Allers • Rob Minkoff" },
        { titulo: "Músicas", valor: "Elton John • Tim Rice • Hans Zimmer" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "30+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Walt Disney Animation Studios" },
        { titulo: "Franquia", valor: "The Lion King" },
        { titulo: "Prêmios", valor: "Vencedor de 2 Oscars (Trilha Sonora e Canção)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+" }
      ],

      funFacts: [
        "A cena do estouro dos gnus levou cerca de três anos para ser animada usando um software de computador inovador na época.",
        "Originalmente, o filme seria intitulado 'O Rei da Selva', até que a equipe percebesse que leões não vivem em selvas.",
        "É a animação desenhada à mão de maior bilheteria de todos os tempos." 
      ]
    },

    resenha: {
      nota: "⭐ 5.0 / 5 — Baseado em 1.100.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "A obra-prima máxima da Disney. Um roteiro shakespeariano com animação impecável."
        },
        {
          autor: "Folha de SP",
          texto: "A trilha sonora de Elton John e Hans Zimmer é o coração pulsante deste épico africano."
        },
        {
          autor: "CinePop",
          texto: "O ciclo da vida nunca foi tão bem representado. Um filme que transcende gerações."
        },
        {
          autor: "nostalgia_fan",
          texto: "Assisti na infância e hoje meus filhos amam. Simba é um ícone eterno."
        },
        {
          autor: "critico_geek",
          texto: "Scar continua sendo um dos vilões mais complexos e sinistros da história da animação."
        },
        {
          autor: "bruno_p",
          texto: "O início do filme com 'Circle of Life' é arrepiante até hoje. Cinema puro."
        },
        {
          autor: "disney_lover",
          texto: "Hakuna Matata é o lema da minha vida. Timão e Pumba são o melhor alívio cômico!"
        }
      ]
    },

    mas: [
      { titulo: "Aladdin", ano: "1992" },
      { titulo: "Beauty and the Beast", ano: "1991" },
      { titulo: "The Lion King II: Simba's Pride", ano: "1998" },
      { titulo: "Hercules", ano: "1997" },
      { titulo: "Mulan", ano: "1998" },
      { titulo: "The Little Mermaid", ano: "1989" }
    ]
},

velozesEFuriosos7: {
    titulo: "Velozes e Furiosos 7",
    imagem: "assets/img/pastafilmes/velozes-e-furiososserven.jpg", 
    capa: "/assets/img/capa/velozes-e-furiososserven-capa.jpg",
    tempo: "2h 17min",
    ano: "2015",
    genero: ["Ação", "Suspense", "Aventura"],
    descricao: "Após derrotarem Owen Shaw, Dominic Toretto, Brian O'Conner e o resto da equipe retornam aos EUA para uma vida normal. No entanto, o irmão mais velho de Owen, Deckard Shaw, busca vingança, colocando toda a família em perigo novamente.",
    
    elenco: [
      {
        ator: "Vin Diesel",
        personagem: "Dominic Toretto"
      },
      {
        ator: "Paul Walker",
        personagem: "Brian O'Conner"
      },
      {
        ator: "Jason Statham",
        personagem: "Deckard Shaw"
      },
      {
        ator: "Michelle Rodriguez",
        personagem: "Letty Ortiz"
      },
      {
        ator: "Dwayne Johnson",
        personagem: "Luke Hobbs"
      },
      {
        ator: "Tyrese Gibson",
        personagem: "Roman Pearce"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/Skpu5HaVkOc", 
      info: [
        { titulo: "Diretor", valor: "James Wan" },
        { titulo: "Roteirista", valor: "Chris Morgan" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Italiano" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Universal Pictures • Original Film" },
        { titulo: "Franquia", valor: "Fast & Furious" },
        { titulo: "Locais de Filmagem", valor: "Abu Dhabi (EAU), Atlanta (EUA), Colorado (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Amazon Prime Video • Telecine" }
      ],

      funFacts: [
        "Este foi o último filme de Paul Walker, que faleceu antes do término das filmagens. Seus irmãos serviram como dublês de corpo.",
        "A cena dos carros saltando de um avião de carga foi realizada de verdade, com veículos reais sendo lançados de paraquedas.",
        "É o filme de maior bilheteria da franquia, arrecadando mais de 1,5 bilhão de dólares mundialmente." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 950.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma despedida emocionante e honrosa para Paul Walker. Ação de tirar o fôlego."
        },
        {
          autor: "Omelete",
          texto: "James Wan traz um frescor visual para a série, elevando as cenas de luta e perseguição."
        },
        {
          autor: "CinePOP",
          texto: "Impossível não se emocionar com os minutos finais. É mais do que apenas carros, é sobre família."
        },
        {
          autor: "speed_demon_br",
          texto: "A sequência em Abu Dhabi com o Lykan Hypersport saltando entre prédios é lendária!"
        },
        {
          autor: "paul_walker_fan",
          texto: "See You Again me faz chorar toda vez. Um tributo perfeito para o nosso Brian."
        },
        {
          autor: "ricardo_filmes",
          texto: "Vilão incrível. Jason Statham trouxe uma ameaça real que a equipe nunca tinha enfrentado."
        },
        {
          autor: "geek_auto",
          texto: "O equilíbrio entre a ação absurda e o drama pessoal foi o ponto alto deste filme."
        }
      ]
    },

    mas: [
      { titulo: "Fast & Furious 6", ano: "2013" },
      { titulo: "The Fate of the Furious", ano: "2017" },
      { titulo: "Furious 7 (Original Soundtrack)", ano: "2015" },
      { titulo: "Fast Five", ano: "2011" },
      { titulo: "Hobbs & Shaw", ano: "2019" },
      { titulo: "Gone in 60 Seconds", ano: "2000" }
    ]
},

frozen: {
    titulo: "Frozen: Uma Aventura Congelante",
    imagem: "assets/img/pastafilmes/frozen.jpg", 
    capa: "/assets/img/capa/frozen-capa.jpg",
    tempo: "1h 42min",
    ano: "2013",
    genero: ["Animação", "Aventura", "Família", "Musical"],
    descricao: "A destemida e otimista Anna parte em uma jornada épica ao lado do alpinista Kristoff e sua leal rena Sven para encontrar sua irmã Elsa, cujos poderes gelados prenderam o reino de Arendelle em um inverno eterno.",
    
    elenco: [
      {
        ator: "Kristen Bell / Erika Menezes",
        personagem: "Anna"
      },
      {
        ator: "Idina Menzel / Taryn Szpilman",
        personagem: "Elsa"
      },
      {
        ator: "Josh Gad / Fábio Porchat",
        personagem: "Olaf"
      },
      {
        ator: "Jonathan Groff / Raphael Rossatto",
        personagem: "Kristoff"
      },
      {
        ator: "Santino Fontana / Olavo Cavalheiro",
        personagem: "Hans"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/tb7_Z3-Q4kY", 
      info: [
        { titulo: "Diretores", valor: "Chris Buck • Jennifer Lee" },
        { titulo: "Músicas", valor: "Kristen Anderson-Lopez • Robert Lopez" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Alemão" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Walt Disney Animation Studios" },
        { titulo: "Franquia", valor: "Frozen" },
        { titulo: "Prêmios", valor: "Vencedor de 2 Oscars (Melhor Animação e Canção Original)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+" }
      ],

      funFacts: [
        "A personagem Elsa foi originalmente escrita como uma vilã, mas os diretores mudaram de ideia após ouvirem a música 'Let It Go'.",
        "A equipe de animação viajou para a Noruega para estudar as paisagens e a arquitetura para criar o reino de Arendelle.",
        "Olaf foi criado para ser um símbolo do amor inocente entre as duas irmãs." 
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 1.300.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma das melhores animações da Disney. Desconstrói o clichê do 'príncipe encantado' com maestria."
        },
        {
          autor: "CinePop",
          texto: "Um fenômeno cultural. As músicas são viciantes e a história de amor fraternal é tocante."
        },
        {
          autor: "Omelete",
          texto: "Visualmente deslumbrante, especialmente nas cenas em que Elsa usa seus poderes."
        },
        {
          autor: "disney_nerd_99",
          texto: "Eu já vi esse filme 50 vezes e nunca canso de cantar Let It Go a plenos pulmões!"
        },
        {
          autor: "mãe_de_duas",
          texto: "Amei como o filme foca no poder da amizade entre irmãs. Minhas filhas adoram o Olaf."
        },
        {
          autor: "geek_reviewer",
          texto: "A reviravolta do vilão foi uma das mais surpreendentes da história da Disney."
        },
        {
          autor: "critico_musical",
          texto: "A trilha sonora é impecável. Cada canção ajuda a desenvolver os personagens perfeitamente."
        }
      ]
    },

    mas: [
      { titulo: "Frozen II", ano: "2019" },
      { titulo: "Tangled", ano: "2010" },
      { titulo: "Moana", ano: "2016" },
      { titulo: "The Little Mermaid", ano: "1989" },
      { titulo: "Brave", ano: "2012" },
      { titulo: "Zootopia", ano: "2016" }
    ]
},

barbie: {
    titulo: "Barbie",
    imagem: "assets/img/pastafilmes/barbie.jpg", 
    capa: "/assets/img/capa/barbie-capa.jpg",
    tempo: "1h 54min",
    ano: "2023",
    genero: ["Comédia", "Fantasia", "Aventura"],
    descricao: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos que perfeita, Barbie parte para o mundo real em busca da verdadeira felicidade, acompanhada por um Ken em crise existencial.",
    
    elenco: [
      {
        ator: "Margot Robbie",
        personagem: "Barbie Estereotipada"
      },
      {
        ator: "Ryan Gosling",
        personagem: "Ken"
      },
      {
        ator: "America Ferrera",
        personagem: "Gloria"
      },
      {
        ator: "Kate McKinnon",
        personagem: "Barbie Estranha"
      },
      {
        ator: "Will Ferrell",
        personagem: "CEO da Mattel"
      },
      {
        ator: "Simu Liu",
        personagem: "Ken Alternativo"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/pBk4NYhWNMM", 
      info: [
        { titulo: "Diretora", valor: "Greta Gerwig" },
        { titulo: "Roteiristas", valor: "Greta Gerwig • Noah Baumbach" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Warner Bros. Pictures • LuckyChap" },
        { titulo: "Franquia", valor: "Barbie (Live-Action)" },
        { titulo: "Prêmios", valor: "Vencedor de 1 Oscar (Melhor Canção Original)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Max (HBO) • Prime Video" }
      ],

      funFacts: [
        "A produção do filme causou uma escassez global de tinta rosa fluorescente da marca Rosco.",
        "Margot Robbie instituiu 'dias de rosa' no set, onde quem não usasse a cor recebia uma multa simbólica doada para caridade.",
        "O design da Barbieland foi inspirado na arquitetura de Palm Springs e nas 'Casas de Sonho' clássicas da Mattel." 
      ]
    },

    resenha: {
      nota: "⭐ 4.7 / 5 — Baseado em 1.100.000+ avaliações",

      reviews: [
        {
          autor: "Omelete",
          texto: "Inteligente, satírico e visualmente impecável. Greta Gerwig entregou muito mais que um filme de boneca."
        },
        {
          autor: "AdoroCinema",
          texto: "Margot Robbie nasceu para esse papel, mas Ryan Gosling como Ken é a alma cômica do filme."
        },
        {
          autor: "CinePOP",
          texto: "Um roteiro profundo que aborda temas existenciais com leveza e muito rosa. Inesquecível."
        },
        {
          autor: "barbie_fan_br",
          texto: "Eu chorei com o monólogo da America Ferrera. O filme entende o que é ser mulher hoje."
        },
        {
          autor: "geek_reviewer",
          texto: "A trilha sonora da Dua Lipa e Billie Eilish é simplesmente perfeita para o tom do filme."
        },
        {
          autor: "ken_energy_23",
          texto: "Eu sou apenas Ken! A coreografia de I'm Just Ken é a melhor coisa que vi no cinema esse ano."
        },
        {
          autor: "critico_indie",
          texto: "Uma obra de arte que consegue equilibrar o comercial com o autoral de forma brilhante."
        }
      ]
    },

    mas: [
      { titulo: "Little Women", ano: "2019" },
      { titulo: "Lady Bird", ano: "2017" },
      { titulo: "The LEGO Movie", ano: "2014" },
      { titulo: "Enchanted", ano: "2007" },
      { titulo: "Clueless", ano: "1995" },
      { titulo: "Oppenheimer", ano: "2023" }
    ]
},

superMarioBrosMovie: {
    titulo: "Super Mario Bros. O Filme",
    imagem: "assets/img/pastafilmes/mario.jpg", 
    capa: "/assets/img/capa/capa-mario1.jpg",
    tempo: "1h 32min",
    ano: "2023",
    genero: ["Animação", "Aventura", "Comédia", "Fantasia"],
    descricao: "Os irmãos encanadores Mario e Luigi são transportados para um mundo mágico. Quando Luigi é capturado pelo Rei dos Koopas, Bowser, Mario deve se unir à Princesa Peach e ao exército de Toads para salvar seu irmão e o Reino Cogumelo.",
    
    elenco: [
      {
        ator: "Chris Pratt / Raphael Rossatto",
        personagem: "Mario"
      },
      {
        ator: "Anya Taylor-Joy / Carina Eighener",
        personagem: "Princesa Peach"
      },
      {
        ator: "Charlie Day / Manolo Rey",
        personagem: "Luigi"
      },
      {
        ator: "Jack Black / Márcio Dondi",
        personagem: "Bowser"
      },
      {
        ator: "Keegan-Michael Key / Eduardo Drummond",
        personagem: "Toad"
      },
      {
        ator: "Seth Rogen / Guilherme Briggs",
        personagem: "Donkey Kong"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/In8WQS_SIs8", 
      info: [
        { titulo: "Diretores", valor: "Aaron Horvath • Michael Jelenic" },
        { titulo: "Música", valor: "Brian Tyler • Koji Kondo" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Japonês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Illumination • Nintendo • Universal" },
        { titulo: "Franquia", valor: "Super Mario" },
        { titulo: "Local de Produção", valor: "Paris (França), Califórnia (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês / Japonês" },
        { titulo: "Distribuição", valor: "Prime Video • Telecine" }
      ],

      funFacts: [
        "A música 'Peaches', cantada por Jack Black, tornou-se um hit viral e foi escrita pelo próprio ator em apenas alguns dias.",
        "O filme está repleto de 'easter eggs' de outros jogos da Nintendo, incluindo referências a Metroid, Punch-Out!! e Kid Icarus.",
        "Charles Martinet, a voz original do Mario nos jogos por décadas, faz participações especiais como o pai de Mario e Giuseppe." 
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 980.000+ avaliações",

      reviews: [
        {
          autor: "Omelete",
          texto: "Uma carta de amor aos videogames. Visualmente vibrante e extremamente divertido para todas as idades."
        },
        {
          autor: "NerdBunker",
          texto: "A Illumination acertou em cheio no tom. Peach como uma líder forte foi uma das melhores mudanças."
        },
        {
          autor: "AdoroCinema",
          texto: "Nostalgia pura. Ver a Rainbow Road e as mecânicas dos jogos na tela grande foi um sonho realizado."
        },
        {
          autor: "nintendo_fan_br",
          texto: "O Bowser do Jack Black é simplesmente a melhor coisa que aconteceu ao cinema em 2023!"
        },
        {
          autor: "gamer_girl",
          texto: "Eu procurei easter eggs o filme todo. A trilha sonora adaptada dos jogos é de arrepiar."
        },
        {
          autor: "papai_geek",
          texto: "Levei meus filhos e não sei quem se divertiu mais. Um filme leve, rápido e muito bonito."
        },
        {
          autor: "critico_vj",
          texto: "Finalmente uma adaptação de jogo que respeita a essência do material original."
        }
      ]
    },

    mas: [
      { titulo: "Sonic the Hedgehog", ano: "2020" },
      { titulo: "Minions: The Rise of Gru", ano: "2022" },
      { titulo: "Detective Pikachu", ano: "2019" },
      { titulo: "Wreck-It Ralph", ano: "2012" },
      { titulo: "Despicable Me", ano: "2010" },
      { titulo: "The Legend of Zelda (Upcoming)", ano: "TBA" }
    ]
},

harryPotterReliquiasDaMorteParte2: {
    titulo: "Harry Potter e as Relíquias da Morte: Parte 2",
    imagem: "assets/img/pastafilmes/harry-potter-serven-parte-two.jpg", 
    capa: "/assets/img/capa/harry-potter-serven-parte-two-capa.jpg",
    tempo: "2h 10min",
    ano: "2011",
    genero: ["Aventura", "Fantasia", "Mistério"],
    descricao: "Harry, Ron e Hermione continuam sua busca pelas Horcruxes de Voldemort. A batalha final entre as forças do bem e do mal no mundo bruxo culmina em uma guerra épica dentro dos muros de Hogwarts.",
    
    elenco: [
      {
        ator: "Daniel Radcliffe / Caio César",
        personagem: "Harry Potter"
      },
      {
        ator: "Emma Watson / Luísa Palomanes",
        personagem: "Hermione Granger"
      },
      {
        ator: "Rupert Grint / Charles Emmanuel",
        personagem: "Ron Weasley"
      },
      {
        ator: "Ralph Fiennes / Márcio Simões",
        personagem: "Lord Voldemort"
      },
      {
        ator: "Alan Rickman / Allan Lima",
        personagem: "Severus Snape"
      },
      {
        ator: "Maggie Smith / Geisa Vidal",
        personagem: "Minerva McGonagall"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/mObK5XD8udk", 
      info: [
        { titulo: "Diretor", valor: "David Yates" },
        { titulo: "Escritores", valor: "Steve Kloves • J.K. Rowling (Livro)" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Alemão" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Warner Bros. Pictures • Heyday Films" },
        { titulo: "Franquia", valor: "Wizarding World (Harry Potter)" },
        { titulo: "Locais de Filmagem", valor: "Londres (Reino Unido), Escócia" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Max (HBO) • Mídia Física" }
      ],

      funFacts: [
        "É o filme mais curto de toda a franquia Harry Potter, apesar de cobrir o clímax da história.",
        "A cena da Batalha de Hogwarts levou meses para ser filmada e envolveu centenas de figurantes e efeitos práticos.",
        "Ralph Fiennes (Voldemort) improvisou o abraço desconfortável em Draco Malfoy, o que gerou uma reação de choque genuína no ator Tom Felton." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.450.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um desfecho magistral para a maior saga de fantasia do cinema moderno. Emocionante do início ao fim."
        },
        {
          autor: "Omelete",
          texto: "A performance de Alan Rickman como Snape neste filme é digna de todos os prêmios possíveis."
        },
        {
          autor: "CinePOP",
          texto: "O confronto final entre Harry e Voldemort é visualmente espetacular e carregado de peso emocional."
        },
        {
          autor: "potterhead_99",
          texto: "Eu chorei na cena das memórias do Snape e não parei até os créditos subirem. Sempre."
        },
        {
          autor: "geek_expert",
          texto: "Roteiro muito bem adaptado, conseguiram dar um fechamento digno para cada personagem querido."
        },
        {
          autor: "bruxo_br",
          texto: "A trilha sonora do Alexandre Desplat traz uma urgência e uma tristeza que definem perfeitamente o filme."
        },
        {
          autor: "ana_clara_cine",
          texto: "O final perfeito para a minha infância. Hogwarts será sempre nosso lar."
        }
      ]
    },

    mas: [
      { titulo: "Harry Potter and the Deathly Hallows: Part 1", ano: "2010" },
      { titulo: "Fantastic Beasts and Where to Find Them", ano: "2016" },
      { titulo: "The Lord of the Rings: The Return of the King", ano: "2003" },
      { titulo: "Percy Jackson & The Olympians", ano: "2010" },
      { titulo: "Harry Potter and the Philosopher's Stone", ano: "2001" },
      { titulo: "The Chronicles of Narnia", ano: "2005" }
    ]
},

interstellar: {
    titulo: "Interestelar",
    imagem: "assets/img/pastafilmes/interestelar.jpg", 
    capa: "/assets/img/capa/interestela-capa.jpg",
    tempo: "2h 49min",
    ano: "2014",
    genero: ["Ficção Científica", "Drama", "Aventura"],
    descricao: "As reservas naturais da Terra estão se esgotando. Um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, passando por um buraco de minhoca recém-descoberto.",
    
    elenco: [
      {
        ator: "Matthew McConaughey",
        personagem: "Cooper"
      },
      {
        ator: "Anne Hathaway",
        personagem: "Amelia Brand"
      },
      {
        ator: "Jessica Chastain",
        personagem: "Murph (Adulta)"
      },
      {
        ator: "Michael Caine",
        personagem: "Professor Brand"
      },
      {
        ator: "Matt Damon",
        personagem: "Dr. Mann"
      },
      {
        ator: "Timothée Chalamet",
        personagem: "Tom (Jovem)"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/zSWdZVtXT7E", 
      info: [
        { titulo: "Diretor", valor: "Christopher Nolan" },
        { titulo: "Escritores", valor: "Jonathan Nolan • Christopher Nolan" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Paramount Pictures • Warner Bros. • Legendary" },
        { titulo: "Consultoria Científica", valor: "Kip Thorne (Físico Teórico)" },
        { titulo: "Locais de Filmagem", valor: "Islândia, Alberta (Canadá), Califórnia (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Max (HBO) • Prime Video" }
      ],

      funFacts: [
        "A representação visual do buraco negro (Gargantua) foi tão precisa que resultou na publicação de novos artigos científicos sobre astrofísica.",
        "Hans Zimmer compôs a trilha sonora sem saber que o filme era sobre ficção científica; Nolan apenas lhe deu uma página sobre a relação entre um pai e seu filho.",
        "A equipe de produção plantou 500 acres de milho reais para as cenas da fazenda de Cooper, que depois foram vendidos com lucro." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.900.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma experiência cinematográfica transcendental. Nolan equilibra física quântica com emoção humana pura."
        },
        {
          autor: "Omelete",
          texto: "Visualmente arrebatador e com uma das melhores trilhas sonoras da história do cinema."
        },
        {
          autor: "CinePOP",
          texto: "Um filme que te faz questionar o tempo, o espaço e a força do amor. Obrigatório."
        },
        {
          autor: "astronomy_fan",
          texto: "A cena de acoplagem com a trilha 'No Time for Caution' é a coisa mais tensa que já vi."
        },
        {
          autor: "murph_lover",
          texto: "Eu nunca mais consegui ouvir o tique-taque de um relógio da mesma forma. Chorei demais."
        },
        {
          autor: "nerd_expert",
          texto: "Roteiro complexo, mas extremamente gratificante. Cada detalhe importa para o final."
        },
        {
          autor: "marcos_viana",
          texto: "McConaughey entrega a melhor atuação de sua carreira na cena das mensagens de vídeo."
        }
      ]
    },

    mas: [
      { titulo: "Inception", ano: "2010" },
      { titulo: "The Martian", ano: "2015" },
      { titulo: "Gravity", ano: "2013" },
      { titulo: "Oppenheimer", ano: "2023" },
      { titulo: "Arrival", ano: "2016" },
      { titulo: "Tenet", ano: "2020" }
    ]
},

minions: {
    titulo: "Minions",
    imagem: "assets/img/pastafilmes/minions.jpg", 
    capa: "/assets/img/capa/minions-capa.jpg",
    tempo: "1h 31min",
    ano: "2015",
    genero: ["Animação", "Aventura", "Comédia", "Família"],
    descricao: "Seres amarelos unicelulares e milenares, os Minions têm uma missão: servir aos maiores vilões da história. Após a morte de seu antigo mestre, eles tentam encontrar um novo chefe e acabam recrutados pela terrível Scarlet Overkill.",
    
    elenco: [
      {
        ator: "Pierre Coffin",
        personagem: "Kevin / Stuart / Bob"
      },
      {
        ator: "Sandra Bullock / Adriana Esteves",
        personagem: "Scarlet Overkill"
      },
      {
        ator: "Jon Hamm / Vladimir Brichta",
        personagem: "Herb Overkill"
      },
      {
        ator: "Michael Keaton",
        personagem: "Walter Nelson"
      },
      {
        ator: "Allison Janney",
        personagem: "Madge Nelson"
      },
      {
        ator: "Geoffrey Rush",
        personagem: "Narrador"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/P9-FCC6I7u0", 
      info: [
        { titulo: "Diretores", valor: "Kyle Balda • Pierre Coffin" },
        { titulo: "Roteirista", valor: "Brian Lynch" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Illumination Entertainment" },
        { titulo: "Franquia", valor: "Meu Malvado Favorito (Despicable Me)" },
        { titulo: "Local de Produção", valor: "Paris (França), Santa Monica (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês / Minionês" },
        { titulo: "Distribuição", valor: "Universal Pictures • Netflix" }
      ],

      funFacts: [
        "A língua dos Minions (Minionês) é uma mistura de palavras de vários idiomas, incluindo francês, espanhol, italiano, japonês e inglês.",
        "Os três Minions principais foram desenhados para se parecerem com as filhas de Gru: Margo (Kevin), Edith (Stuart) e Agnes (Bob).",
        "O filme arrecadou mais de 1,1 bilhão de dólares, tornando-se uma das animações mais lucrativas de todos os tempos." 
      ]
    },

    resenha: {
      nota: "⭐ 4.6 / 5 — Baseado em 820.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma comédia caótica e extremamente visual. Bob, Kevin e Stuart provam que têm carisma para brilhar sozinhos."
        },
        {
          autor: "Omelete",
          texto: "O humor 'slapstick' funciona perfeitamente. É impossível não rir com a inocência destrutiva desses seres amarelos."
        },
        {
          autor: "CinePop",
          texto: "A trilha sonora repleta de clássicos dos anos 60 traz um charme especial para a aventura em Londres."
        },
        {
          autor: "banana_lover_99",
          texto: "Bananãaaa! O Bob é a coisa mais fofa que já vi em uma animação. Ri do começo ao fim."
        },
        {
          autor: "geek_reviewer",
          texto: "Scarlet Overkill é uma vilã divertida, mas o show é realmente dos Minions. Diversão garantida para a família."
        },
        {
          autor: "papai_coruja",
          texto: "Meus filhos amam e eu também me divirto com as referências históricas e as trapalhadas deles."
        },
        {
          autor: "critico_vj",
          texto: "A animação da Illumination continua impecável, com cores vibrantes e um ritmo frenético."
        }
      ]
    },

    mas: [
      { titulo: "Despicable Me", ano: "2010" },
      { titulo: "Minions: The Rise of Gru", ano: "2022" },
      { titulo: "The Secret Life of Pets", ano: "2016" },
      { titulo: "Sing", ano: "2016" },
      { titulo: "Despicable Me 2", ano: "2013" },
      { titulo: "The Super Mario Bros. Movie", ano: "2023" }
    ]
},

toyStory4: {
    titulo: "Toy Story 4",
    imagem: "assets/img/pastafilmes/toy-story-four.jpg", 
    capa: "/assets/img/capa/toy-story-four-capa.jpg",
    tempo: "1h 40min",
    ano: "2019",
    genero: ["Animação", "Aventura", "Comédia", "Família"],
    descricao: "Woody, Buzz Lightyear e o resto da gangue embarcam em uma viagem de estrada com Bonnie e um novo brinquedo chamado Garfinho. A jornada se transforma em uma reunião inesperada quando o desvio de Woody o leva ao seu antigo amigo Bo Peep.",
    
    elenco: [
      {
        ator: "Tom Hanks / Marco Ribeiro",
        personagem: "Woody"
      },
      {
        ator: "Tim Allen / Guilherme Briggs",
        personagem: "Buzz Lightyear"
      },
      {
        ator: "Annie Potts / Telma da Costa",
        personagem: "Betty (Bo Peep)"
      },
      {
        ator: "Tony Hale / Elcio Romar",
        personagem: "Garfinho (Forky)"
      },
      {
        ator: "Keanu Reeves / Duda Ribeiro",
        personagem: "Duke Caboom"
      },
      {
        ator: "Joan Cusack / Mabel Cezar",
        personagem: "Jessie"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/76CslX-q57M", 
      info: [
        { titulo: "Diretor", valor: "Josh Cooley" },
        { titulo: "Roteiristas", valor: "Andrew Stanton • Stephany Folsom" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Pixar Animation Studios • Disney" },
        { titulo: "Franquia", valor: "Toy Story" },
        { titulo: "Prêmios", valor: "Vencedor do Oscar de Melhor Animação" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Disney+" }
      ],

      funFacts: [
        "Duke Caboom foi dublado por Keanu Reeves, que insistiu em fazer poses de motoqueiro durante as sessões de gravação.",
        "O antiquário 'Second Chance Antiques' contém mais de 10.000 itens, muitos deles referências a filmes anteriores da Pixar.",
        "Betty (Bo Peep) retornou com um visual e personalidade totalmente repaginados, tornando-se uma das protagonistas da trama." 
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 750.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma conclusão (ou novo começo) visualmente deslumbrante que prova que a Pixar ainda tem fôlego para essa franquia."
        },
        {
          autor: "Omelete",
          texto: "Garfinho é o melhor acréscimo em anos. A crise existencial de um talher é hilária e profunda."
        },
        {
          autor: "CinePop",
          texto: "O final é emocionante e corajoso. Encerra o arco do Woody de uma forma que ninguém esperava."
        },
        {
          autor: "pixar_fan_br",
          texto: "Eu achei que não precisava de um quarto filme, mas saí do cinema chorando e querendo ver de novo."
        },
        {
          autor: "mãe_geek",
          texto: "Duke Caboom é o melhor personagem do filme! 'Yes I Can!'. Meus filhos riram demais."
        },
        {
          autor: "nerd_expert",
          texto: "A iluminação e as texturas deste filme estão em outro nível. Parece real em vários momentos."
        },
        {
          autor: "bruno_p_critico",
          texto: "Betty roubou o show. Ver a evolução dela de um abajur para uma heroína de ação foi fantástico."
        }
      ]
    },

    mas: [
      { titulo: "Toy Story 3", ano: "2010" },
      { titulo: "Finding Dory", ano: "2016" },
      { titulo: "Coco", ano: "2017" },
      { titulo: "The Incredibles 2", ano: "2018" },
      { titulo: "Lightyear", ano: "2022" },
      { titulo: "Cars 3", ano: "2017" }
    ]
},

oppenheimer: {
    titulo: "Oppenheimer",
    imagem: "assets/img/pastafilmes/oppenheimer.jpg", 
    capa: "/assets/img/capa/oppenheimer-capa.jpg",
    tempo: "3h 00min",
    ano: "2023",
    genero: ["Biografia", "Drama", "História"],
    descricao: "A história do físico americano J. Robert Oppenheimer e seu papel no Projeto Manhattan, o esforço secreto da Segunda Guerra Mundial para desenvolver as primeiras armas nucleares do mundo.",
    
    elenco: [
      {
        ator: "Cillian Murphy",
        personagem: "J. Robert Oppenheimer"
      },
      {
        ator: "Emily Blunt",
        personagem: "Kitty Oppenheimer"
      },
      {
        ator: "Robert Downey Jr.",
        personagem: "Lewis Strauss"
      },
      {
        ator: "Matt Damon",
        personagem: "Leslie Groves"
      },
      {
        ator: "Florence Pugh",
        personagem: "Jean Tatlock"
      },
      {
        ator: "Rami Malek",
        personagem: "David Hill"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/uYPbbksJxIg", 
      info: [
        { titulo: "Diretor", valor: "Christopher Nolan" },
        { titulo: "Escritor", valor: "Christopher Nolan • Kai Bird • Martin J. Sherwin" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "20+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Universal Pictures • Syncopy • Atlas Entertainment" },
        { titulo: "Prêmios", valor: "Vencedor de 7 Oscars, incluindo Melhor Filme e Diretor" },
        { titulo: "Locais de Filmagem", valor: "Novo México (EUA), Nova Jersey (EUA)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Max (HBO) • Prime Video" }
      ],

      funFacts: [
        "Christopher Nolan insistiu em recriar o teste nuclear Trinity sem o uso de efeitos especiais de CGI (computação gráfica).",
        "O roteiro foi escrito inteiramente em primeira pessoa ('Eu faço...', 'Eu sinto...'), algo raro no cinema, para refletir a perspectiva interna de Oppenheimer.",
        "Cillian Murphy passou por uma dieta extrema para atingir a silhueta frágil e icônica do físico." 
      ]
    },

    resenha: {
      nota: "⭐ 4.9 / 5 — Baseado em 1.100.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Uma obra-prima técnica e narrativa. Nolan redefine o gênero de cinebiografia com uma tensão constante."
        },
        {
          autor: "Omelete",
          texto: "Cillian Murphy entrega a atuação de uma vida. O design de som é tão poderoso que você sente as explosões na alma."
        },
        {
          autor: "CinePOP",
          texto: "O julgamento final e o conflito político são tão empolgantes quanto a própria criação da bomba."
        },
        {
          autor: "historia_nerd_99",
          texto: "O realismo histórico e a cinematografia em IMAX preto e branco são simplesmente de outro nível."
        },
        {
          autor: "ana_clara_cine",
          texto: "Três horas que passam voando. A trilha sonora do Ludwig Göransson é hipnotizante e agoniante ao mesmo tempo."
        },
        {
          autor: "geek_reviewer",
          texto: "A química entre Robert Downey Jr. e Cillian Murphy no ato final é cinema em seu estado mais puro."
        },
        {
          autor: "critico_vj",
          texto: "Oppenheimer não é apenas um filme sobre a bomba, mas sobre as consequências morais que mudaram o mundo para sempre."
        }
      ]
    },

    mas: [
      { titulo: "Interstellar", ano: "2014" },
      { titulo: "Dunkirk", ano: "2017" },
      { titulo: "The Theory of Everything", ano: "2014" },
      { titulo: "The Imitation Game", ano: "2014" },
      { titulo: "Inception", ano: "2010" },
      { titulo: "Barbie", ano: "2023" }
    ]
},

matrix: {
    titulo: "Matrix",
    imagem: "assets/img/pastafilmes/matrix.jpg", 
    capa: "/assets/img/capa/matrix-capa.jpg",
    tempo: "2h 16min",
    ano: "1999",
    genero: ["Ação", "Sci-Fi"],
    descricao: "Um programador de computador descobre que o mundo em que vive é na verdade uma simulação virtual criada por máquinas para escravizar a humanidade. Ele se junta a um grupo de rebeldes para lutar pela liberdade.",
    
    elenco: [
      {
        ator: "Keanu Reeves / Reynaldo Buzzoni",
        personagem: "Thomas Anderson / Neo"
      },
      {
        ator: "Laurence Fishburne / Márcio Simões",
        personagem: "Morpheus"
      },
      {
        ator: "Carrie-Anne Moss / Fátima Mourão",
        personagem: "Trinity"
      },
      {
        ator: "Hugo Weaving / Hélio Ribeiro",
        personagem: "Agente Smith"
      },
      {
        ator: "Joe Pantoliano / Marco Antônio Costa",
        personagem: "Cypher"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/m8e-FF8MsqU", 
      info: [
        { titulo: "Diretoras", valor: "Lilly Wachowski • Lana Wachowski" },
        { titulo: "Escritoras", valor: "Lilly Wachowski • Lana Wachowski" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol, Francês" },
        { titulo: "Legendas", valor: "25+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Warner Bros. • Village Roadshow • Silver Pictures" },
        { titulo: "Franquia", valor: "The Matrix Trilogy" },
        { titulo: "Prêmios", valor: "Vencedor de 4 Oscars (Técnicos)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Max (HBO) • Prime Video" }
      ],

      funFacts: [
        "A técnica 'Bullet Time' (tempo de bala) foi revolucionária e exigiu o uso de 120 câmeras fotográficas disparadas sequencialmente.",
        "Antes de Keanu Reeves, o papel de Neo foi oferecido a Will Smith, que recusou para fazer o filme 'As Loucas Aventuras de James West'.",
        "O elenco principal passou por quatro meses de treinamento intensivo de artes marciais com coreógrafos de Hong Kong." 
      ]
    },

    resenha: {
      nota: "⭐ 5.0 / 5 — Baseado em 2.100.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um marco na história do cinema. Mudou para sempre a forma como filmes de ação e ficção científica são feitos."
        },
        {
          autor: "Omelete",
          texto: "Mais do que efeitos especiais, Matrix traz uma discussão filosófica profunda sobre realidade e controle."
        },
        {
          autor: "CinePOP",
          texto: "Visualmente icônico. O figurino de couro preto e os óculos escuros definiram uma era da cultura pop."
        },
        {
          autor: "nerd_expert_99",
          texto: "Eu já vi este filme dezenas de vezes e sempre descubro um detalhe novo no código da Matrix."
        },
        {
          autor: "sci_fi_lover",
          texto: "A cena do Neo desviando das balas no telhado é a sequência mais épica da história do cinema."
        },
        {
          autor: "bruno_p_critico",
          texto: "Hugo Weaving entrega um dos vilões mais intimidadores de todos os tempos. O Agente Smith é inesquecível."
        },
        {
          autor: "ana_clara_cine",
          texto: "O filme envelheceu como vinho. Os temas de tecnologia e vigilância são mais atuais do que nunca."
        }
      ]
    },

    mas: [
      { titulo: "The Matrix Reloaded", ano: "2003" },
      { titulo: "John Wick", ano: "2014" },
      { titulo: "Blade Runner 2048", ano: "2017" },
      { titulo: "Inception", ano: "2010" },
      { titulo: "The Animatrix", ano: "2003" },
      { titulo: "Ghost in the Shell", ano: "1995" }
    ]
},

johnWick: {
    titulo: "John Wick: De Volta ao Jogo",
    imagem: "assets/img/pastafilmes/jonh-wick.jpg", 
    capa: "/assets/img/capa/jonh-wick-capa.jpg",
    tempo: "1h 41min",
    ano: "2014",
    genero: ["Ação", "Suspense"],
    descricao: "Um ex-assassino de aluguel sai da aposentadoria para caçar os gângsteres que mataram seu cachorro e roubaram tudo o que ele tinha de mais precioso, desencadeando uma vingança implacável.",
    
    elenco: [
      {
        ator: "Keanu Reeves / Reynaldo Buzzoni",
        personagem: "John Wick"
      },
      {
        ator: "Michael Nyqvist",
        personagem: "Viggo Tarasov"
      },
      {
        ator: "Alfie Allen",
        personagem: "Iosef Tarasov"
      },
      {
        ator: "Willem Dafoe",
        personagem: "Marcus"
      },
      {
        ator: "Ian McShane",
        personagem: "Winston"
      },
      {
        ator: "Adrianne Palicki",
        personagem: "Ms. Perkins"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/2AUmvWm5P2I", 
      info: [
        { titulo: "Diretores", valor: "Chad Stahelski • David Leitch" },
        { titulo: "Roteirista", valor: "Derek Kolstad" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "15+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Lionsgate • Summit Entertainment" },
        { titulo: "Franquia", valor: "John Wick Saga" },
        { titulo: "Estilo de Luta", valor: "Gun-fu (Artes Marciais + Armas)" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Prime Video • Netflix" }
      ],

      funFacts: [
        "Keanu Reeves realizou cerca de 90% de suas próprias cenas de ação, treinando judô e jiu-jitsu por meses.",
        "O filme foi dirigido pelos antigos dublês de Keanu Reeves em Matrix, Chad Stahelski e David Leitch.",
        "A contagem de corpos de John Wick no primeiro filme é de exatamente 77 pessoas." 
      ]
    },

    resenha: {
      nota: "⭐ 4.8 / 5 — Baseado em 920.000+ avaliações",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "Um sopro de vida para os filmes de ação modernos. Coreografias impecáveis e um estilo visual único."
        },
        {
          autor: "Omelete",
          texto: "Keanu Reeves nasceu para interpretar o 'Bicho-Papão'. Simples, direto e extremamente satisfatório."
        },
        {
          autor: "CinePOP",
          texto: "O mundo dos assassinos e o Hotel Continental criam uma mitologia fascinante que vai muito além da vingança."
        },
        {
          autor: "ação_lover_br",
          texto: "Nunca mexa com o cachorro de um homem que não tem nada a perder. Épico!"
        },
        {
          autor: "nerd_expert",
          texto: "As cenas no clube Red Circle são uma aula de direção de ação e iluminação neon."
        },
        {
          autor: "marcos_viana",
          texto: "O ritmo do filme é perfeito. Não há gordura, apenas ação pura e bem executada."
        },
        {
          autor: "geek_reviewer",
          texto: "John Wick redefiniu o gênero. Agora todo filme de ação quer ser como ele."
        }
      ]
    },

    mas: [
      { titulo: "John Wick: Chapter 2", ano: "2017" },
      { titulo: "John Wick: Chapter 3 – Parabellum", ano: "2019" },
      { titulo: "John Wick: Chapter 4", ano: "2023" },
      { titulo: "Atomic Blonde", ano: "2017" },
      { titulo: "The Equalizer", ano: "2014" },
      { titulo: "Taken", ano: "2008" }
    ]
},

screamserven: {
    titulo: "Pânico 7",
    imagem: "assets/img/pastafilmes/screamserven.jpg", 
    capa: "/assets/img/capa/screamserven-capa.jpg",
    tempo: "Em definição",
    ano: "2026",
    genero: ["Terror", "Slasher", "Mistério"],
    descricao: "Sidney Prescott retorna ao centro do terror quando um novo Ghostface emerge com regras inéditas. Após os eventos recentes, o passado e o presente se colidem em uma luta final pela sobrevivência na franquia que redefiniu o gênero meta-horror.",
    
    elenco: [
      {
        ator: "Neve Campbell",
        personagem: "Sidney Prescott"
      },
      {
        ator: "Courteney Cox",
        personagem: "Gale Weathers"
      },
      {
        ator: "Patrick Dempsey",
        personagem: "Mark Kincaid"
      },
      {
        ator: "Roger L. Jackson",
        personagem: "Ghostface (Voz)"
      }
    ],

    trailer: {
      url: "https://www.youtube.com/embed/Scream7Teaser", 
      info: [
        { titulo: "Diretor", valor: "Kevin Williamson" },
        { titulo: "Roteirista", valor: "Guy Busick" },
        { titulo: "Idiomas Disponíveis", valor: "Inglês, Português (BR), Espanhol" },
        { titulo: "Legendas", valor: "15+ idiomas" }
      ]
    },

    sobre: {
      info: [
        { titulo: "Estúdio", valor: "Spyglass Media Group • Paramount Pictures" },
        { titulo: "Franquia", valor: "Scream (Pânico)" },
        { titulo: "Criador Original", valor: "Kevin Williamson" },
        { titulo: "Idioma Original", valor: "Inglês" },
        { titulo: "Distribuição", valor: "Cinemas • Paramount+" }
      ],

      funFacts: [
        "Este filme marca o retorno de Kevin Williamson, o roteirista original do primeiro filme, agora ocupando a cadeira de diretor.",
        "Neve Campbell confirmou seu retorno como Sidney Prescott após ficar de fora do sexto filme por disputas salariais.",
        "A produção promete focar mais uma vez na 'Final Girl' original, trazendo de volta elementos de suspense clássicos da trilogia inicial." 
      ]
    },

    resenha: {
      nota: "⭐ 4.7 / 5 — Expectativa do Público",

      reviews: [
        {
          autor: "AdoroCinema",
          texto: "O retorno de Sidney Prescott é o que os fãs precisavam. A nostalgia está mais viva do que nunca."
        },
        {
          autor: "Omelete",
          texto: "Kevin Williamson na direção traz uma segurança de que a essência de Pânico será respeitada."
        },
        {
          autor: "CinePOP",
          texto: "Ghostface nunca pareceu tão perigoso. O clima de 'conclusão épica' domina a produção."
        },
        {
          autor: "ghostface_fan_br",
          texto: "Sidney está de volta! Mal posso esperar para ver como as novas regras do terror vão funcionar."
        },
        {
          autor: "horror_geek",
          texto: "A franquia Pânico é a única que consegue se manter relevante por décadas. Ansiedade a mil."
        },
        {
          autor: "slasher_lover",
          texto: "Patrick Dempsey voltando como Detetive Kincaid é o fanservice que eu pedi aos céus."
        },
        {
          autor: "critico_terror",
          texto: "Esperamos que este capítulo feche com chave de ouro o legado de Sidney Prescott."
        }
      ]
    },

    mas: [
      { titulo: "Scream", ano: "1996" },
      { titulo: "Scream VI", ano: "2023" },
      { titulo: "Scream (5)", ano: "2022" },
      { titulo: "Halloween Ends", ano: "2022" },
      { titulo: "Thanksgiving", ano: "2023" },
      { titulo: "A Nightmare on Elm Street", ano: "1984" }
    ]
}
};


// PEGAR ID DA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// VALIDAÇÃO (IMPORTANTE parar execução)
if (!filmes[id]) {
  document.body.innerHTML = "<h1>Filme não encontrado</h1>";
  throw new Error("Filme inválido");
}

// FILME ATUAL
const filme = filmes[id];

// ATUALIZAR ELEMENTOS
document.getElementById("titulo").textContent = filme.titulo;
document.getElementById("poster").src = filme.imagem;

document.getElementById("meta").innerHTML = `
  <span>${filme.tempo}</span>
  <span>${filme.ano}</span>
  <span>${filme.genero.join(", ")}</span>
`;

document.getElementById("descricao").textContent = filme.descricao;

// ELENCO
document.getElementById("elenco").innerHTML = filme.elenco
  .map(item => `
    <p class="spacep">
      <strong class="ator">${item.ator} — </strong>
      <span class="personagem">${item.personagem}</span>
    </p>
  `)
  .join("");


// TRAILER (verifica se existe)
if (filme.trailer) {
  // vídeo
  document.getElementById("trailer").src = filme.trailer.url;

  // infos abaixo
  document.getElementById("trailerInfo").innerHTML = `
    <p class="spacep">
      ${filme.trailer.info
        .map(item => `
          <strong class="ator">${item.titulo}:</strong> 
          <span class="personagem">${item.valor}</span><br>
        `)
        .join("")}
    </p>
  `;
}

// SOBRE
if (filme.sobre) {
  document.getElementById("sobre").innerHTML = `
    
    <p class="spacep">
      ${filme.sobre.info
        .map(item => `
          <strong class="ator">${item.titulo}:</strong> 
          <span class="personagem">${item.valor}</span><br>
        `)
        .join("")}
    </p>

    <p class="funfact">
      <strong class="ator">Fun Facts:</strong><br>
      <span class="personagem">
        ${filme.sobre.funFacts.join("<br>")}
      </span>
    </p>

  `;
}

// RESENHA
if (filme.resenha) {
  document.getElementById("resenha").innerHTML = `
    
    <p class="spacep">
      
      <strong class="ator">
        ${filme.resenha.nota}
      </strong><br>

      ${filme.resenha.reviews
        .map(item => `
          <strong class="ator">— ${item.autor}:</strong>
          <span class="personagem">"${item.texto}"</span><br>
        `)
        .join("")}

    </p>
  `;
}

// MAIS
if (filme.mas) {
  document.getElementById("mas").innerHTML = `
    
    <p class="spacep">
      ${filme.mas
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
container.style.setProperty("--bg-filme", `url(${filme.capa})`);
//  container.style.backgroundImage = `url(${filme.capa})`;
container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";
console.log(filme.capa)
