/* =========================================================
   🍿 POPCORN HUB — SCRIPT.JS
   ========================================================= */

const filmes = [
    {
        id: 1,
        titulo: "Vingadores: Ultimato",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Após o estalo de Thanos dizimar metade do universo, os Vingadores remanescentes se unem numa última missão para desfazer a tragédia e enfrentar o titã louco de vez.",
        classificacao: "12",
        nota: "8.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        trailerId: "TcMBFSGVi1c"
    },
    {
        id: 2,
        titulo: "Pantera Negra",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "T'Challa retorna a Wakanda para assumir o trono, mas precisa proteger seu povo e o vibranium de ameaças que colocam em risco o futuro da nação mais avançada do planeta.",
        classificacao: "12",
        nota: "7.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
        trailerId: "xjDjIWPwcPU"
    },
    {
        id: 3,
        titulo: "Jurassic Park",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Um bilionário cria um parque temático com dinossauros clonados a partir de DNA fóssil, mas uma falha de segurança transforma a atração em um pesadelo de sobrevivência.",
        classificacao: "12",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
        trailerId: "QWBKEmWWL38"
    },
    {
        id: 4,
        titulo: "Homem-Aranha: Sem Volta Para Casa",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Peter Parker precisa lidar com as consequências de sua identidade revelada e acaba enfrentando vilões de outros universos ao pedir ajuda ao Doutor Estranho.",
        classificacao: "12",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        trailerId: "JfVOs4VSpmA"
    },
    {
        id: 5,
        titulo: "Interestelar",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "Um grupo de astronautas atravessa um buraco de minhoca em busca de um novo lar para a humanidade, enquanto o tempo passa de forma diferente para quem fica na Terra.",
        classificacao: "10",
        nota: "8.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        trailerId: "zSWdZVtXT7E"
    },
    {
        id: 6,
        titulo: "Duna",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "O jovem Paul Atreides é levado ao planeta deserto Arrakis, onde disputas por uma valiosa especiaria decidem o destino de famílias e impérios em toda a galáxia.",
        classificacao: "12",
        nota: "8.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
        trailerId: "8g18jFHCLXk"
    },
    {
        id: 7,
        titulo: "Matrix",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "Um programador descobre que a realidade que conhece é uma simulação controlada por máquinas e precisa escolher entre a verdade dolorosa e a ilusão confortável.",
        classificacao: "16",
        nota: "8.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
        trailerId: "vKQi3bBA1y8"
    },
    {
        id: 8,
        titulo: "Avatar: O Caminho da Água",
        genero: "ficcao",
        generoNome: "Ficção Científica",
        sinopse: "Jake Sully e sua família enfrentam novas ameaças enquanto buscam refúgio entre os povos dos oceanos de Pandora para proteger o que restou de seu lar.",
        classificacao: "12",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
        trailerId: "d9MyW72ELq0"
    },
    {
        id: 9,
        titulo: "Bohemian Rhapsody",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "A trajetória de Freddie Mercury e do Queen, da formação da banda ao histórico show no Live Aid, mostrando os bastidores de uma das carreiras mais icônicas do rock.",
        classificacao: "14",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
        trailerId: "mP0VHJYFOAU"
    },
    {
        id: 10,
        titulo: "A Rede Social",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "A história real da criação do Facebook por Mark Zuckerberg em Harvard, e os conflitos e processos judiciais que surgiram junto com o sucesso da rede social.",
        classificacao: "12",
        nota: "7.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
        trailerId: "lB95KLmpLR4"
    },
    {
        id: 11,
        titulo: "Oppenheimer",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "A história do físico J. Robert Oppenheimer e de seu papel no desenvolvimento da bomba atômica durante o Projeto Manhattan, e o peso moral que carregou depois.",
        classificacao: "16",
        nota: "8.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
        trailerId: "uYPbbksJxIg"
    },
    {
        id: 12,
        titulo: "Prenda-me Se For Capaz",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "Baseado em fatos reais, acompanha Frank Abagnale Jr., um dos falsificadores mais talentosos da história, e o agente do FBI obcecado em capturá-lo.",
        classificacao: "12",
        nota: "8.1",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/4d/Catch_Me_If_You_Can_2002_movie.jpg",
        trailerId: "TdAKzpZ23w4"
    },
    {
        id: 13,
        titulo: "La La Land",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Uma atriz em início de carreira e um pianista de jazz se apaixonam em Los Angeles, enquanto tentam equilibrar seus sonhos profissionais e o amor entre os dois.",
        classificacao: "L",
        nota: "8.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
        trailerId: "0pdqf4P9MB8"
    },
    {
        id: 14,
        titulo: "Diário de uma Paixão",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Um casal de jovens apaixonados é separado pela diferença de classe social e pela guerra, mas o amor que viveram décadas antes ainda ecoa em suas vidas.",
        classificacao: "14",
        nota: "7.8",
        capa: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
        trailerId: "BjJcYdEOI0k"
    },
    {
        id: 15,
        titulo: "Titanic",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "A bordo do transatlântico mais famoso da história, uma jovem da alta sociedade e um artista pobre vivem um romance intenso que é interrompido pela tragédia do naufrágio.",
        classificacao: "12",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
        trailerId: "2e-eXJ6HgkQ"
    },
    {
        id: 16,
        titulo: "Como Eu Era Antes de Você",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Uma jovem sem rumo na vida é contratada para cuidar de um homem que ficou tetraplégico após um acidente, e os dois acabam transformando a visão um do outro sobre a vida.",
        classificacao: "14",
        nota: "7.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg",
        trailerId: "Eh993__rOxA"
    },
    {
        id: 17,
        titulo: "O Diabo Veste Prada",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Uma recém-formada consegue emprego como assistente da temida editora-chefe de uma revista de moda e precisa sobreviver às exigências absurdas do mundo fashion.",
        classificacao: "12",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/e/e7/The_Devil_Wears_Prada_main_onesheet.jpg",
        trailerId: "R8nH9qKXdBY"
    },
    {
        id: 18,
        titulo: "As Branquelas",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Dois agentes do FBI precisam se disfarçar como duas socialites para protegê-las de um sequestro e acabam vivendo situações cada vez mais hilárias.",
        classificacao: "12",
        nota: "6.0",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/2b/White_chicks.jpg",
        trailerId: "aeVkbNka9HM"
    },
    {
        id: 19,
        titulo: "Se Beber, Não Case!",
        genero: "comedia",
        generoNome: "Comédia",
        sinopse: "Depois de uma despedida de solteiro em Las Vegas, três amigos acordam sem lembrar de nada e descobrem que o noivo sumiu, tendo poucas horas para encontrá-lo antes do casamento.",
        classificacao: "16",
        nota: "7.7",
        capa: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
        trailerId: "dB2jElYbTIo"
    },
    {
        id: 20,
        titulo: "Guardiões da Galáxia Vol. 3",
        genero: "pop",
        generoNome: "Pop",
        sinopse: "Peter Quill ainda sofre com a perda de Gamora e precisa reunir sua equipe para uma missão perigosa que pode significar o fim dos Guardiões caso não seja bem-sucedida.",
        classificacao: "12",
        nota: "7.9",
        capa: "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg",
        trailerId: "28AuL3OHfuc"
    },
    {
        id: 21,
        titulo: "Invictus",
        genero: "vidareal",
        generoNome: "Vida Real",
        sinopse: "Baseado em fatos reais, mostra como Nelson Mandela usa a Copa do Mundo de rúgbi de 1995 para unir a África do Sul pós-apartheid em torno de um único objetivo.",
        classificacao: "12",
        nota: "7.3",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/05/Invictus-poster.png",
        trailerId: "EchyFyRETzc"
    },
    {
        id: 22,
        titulo: "Simplesmente Amor",
        genero: "romance",
        generoNome: "Romance",
        sinopse: "Diversas histórias de amor se entrelaçam em Londres durante o período do Natal, mostrando diferentes faces do amor entre amigos, casais e famílias.",
        classificacao: "14",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/e/eb/Love_Actually_movie.jpg",
        trailerId: "hJ-_H62To4A"
    },
    {
        id: 23,
        titulo: "Seu Nome",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Um garoto e uma garota que nunca se conheceram começam a trocar de corpo misteriosamente, e precisam descobrir a ligação entre eles antes que seja tarde demais.",
        classificacao: "L",
        nota: "8.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
        trailerId: "0T6PBmyExMk"
    },
    {
        id: 24,
        titulo: "Demon Slayer: Mugen Train",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Tanjiro e seus companheiros embarcam no Trem Infinito para investigar desaparecimentos misteriosos e enfrentam um dos demônios mais poderosos já vistos.",
        classificacao: "14",
        nota: "8.2",
        capa: "https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg",
        trailerId: "ATJYac_dORw"
    },
    {
        id: 25,
        titulo: "Jujutsu Kaisen 0",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Yuta Okkotsu é assombrado por uma amiga de infância transformada em uma maldição poderosa e precisa aprender a controlar seus poderes na Escola Técnica de Feitiçaria de Jujutsu.",
        classificacao: "14",
        nota: "7.6",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_Kaisen_0_Cover.png",
        trailerId: "8QkHWlrHqlE"
    },
    {
        id: 26,
        titulo: "A Viagem de Chihiro",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Uma garota se muda com a família e acaba presa em um mundo espiritual repleto de deuses e monstros, onde precisa trabalhar em uma casa de banhos mágica para salvar seus pais.",
        classificacao: "L",
        nota: "8.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        trailerId: "L5SjMRioGEk"
    },
    {
        id: 27,
        titulo: "One Piece Film: Red",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "Uta, a cantora mais amada do mundo e filha secreta de Shanks, revela sua identidade em um grande show, e Luffy e os Chapéus de Palha se veem em meio a segredos perigosos do passado dela.",
        classificacao: "12",
        nota: "7.4",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/44/One_Piece_Film_Red_Visual_Poster.jpg",
        trailerId: "eU0i7L3cakI"
    },
    {
        id: 28,
        titulo: "My Hero Academia: You're Next",
        genero: "anime",
        generoNome: "Anime",
        sinopse: "No filme mais recente da franquia, Deku e seus colegas de Yuei enfrentam um vilão que ataca diretamente a essência do que significa ser um herói, em uma das maiores batalhas da série.",
        classificacao: "12",
        nota: "7.5",
        capa: "https://upload.wikimedia.org/wikipedia/en/1/13/My_Hero_Academia_-_You%27re_Next.png",
        trailerId: "HzSVqFy7NsQ",
        destaque: true
    }
];

// Ícone e cores de fallback exibidos enquanto o pôster real carrega (ou se falhar)
const POSTER_FALLBACK = {
    pop: { icone: "🎬", corA: "#3a0d10", corB: "#0c0c12" },
    ficcao: { icone: "🚀", corA: "#0d1f3a", corB: "#05070c" },
    vidareal: { icone: "🎭", corA: "#3a2a0d", corB: "#0c0c12" },
    romance: { icone: "💕", corA: "#3a0d2a", corB: "#0c0c12" },
    comedia: { icone: "😂", corA: "#0d3a1f", corB: "#0c0c12" },
    anime: { icone: "🍥", corA: "#3a1a0d", corB: "#0c0c12" }
};

// SVG padrão de fallback para impedir imagem quebrada
const PLACEHOLDER_IMG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='100%' height='100%' fill='%231f2937'/><text x='50%' y='50%' font-family='sans-serif' font-size='30' fill='%239ca3af' text-anchor='middle'>🎬 Sem Imagem</text></svg>";

let favoritos = JSON.parse(localStorage.getItem("popcorn_favs")) || [];
let vistos = JSON.parse(localStorage.getItem("popcorn_watched")) || [];
let likes = JSON.parse(localStorage.getItem("popcorn_likes")) || [];
let dislikes = JSON.parse(localStorage.getItem("popcorn_dislikes")) || [];

let generoAtual = "all";
let filmeAtual = null;

let movieGrid, favoritesGrid, emptyFavorites, searchInput, modal, modalTitle, modalSynopsis, modalRating, modalAge, trailer, favoriteBtn, watchedBtn, likeBtn, dislikeBtn;

function carregarElementosDOM() {
    movieGrid = document.getElementById("movie-grid");
    favoritesGrid = document.getElementById("favorites-grid");
    emptyFavorites = document.getElementById("empty-favorites");
    searchInput = document.getElementById("movie-search");
    modal = document.getElementById("movie-modal");
    modalTitle = document.getElementById("modal-title");
    modalSynopsis = document.getElementById("modal-synopsis");
    modalRating = document.getElementById("modal-rating");
    modalAge = document.getElementById("modal-age-rating");
    trailer = document.getElementById("movie-trailer");
    favoriteBtn = document.getElementById("favorite-btn");
    watchedBtn = document.getElementById("watched-btn");
    likeBtn = document.getElementById("like-btn");
    dislikeBtn = document.getElementById("dislike-btn");
}

function salvarDados() {
    localStorage.setItem("popcorn_favs", JSON.stringify(favoritos));
    localStorage.setItem("popcorn_watched", JSON.stringify(vistos));
    localStorage.setItem("popcorn_likes", JSON.stringify(likes));
    localStorage.setItem("popcorn_dislikes", JSON.stringify(dislikes));
}

function criarCard(filme) {
    const card = document.createElement("article");
    const favorito = favoritos.includes(filme.id);
    const visto = vistos.includes(filme.id);

    card.className = "movie-card";
    card.dataset.id = filme.id;

    const fallback = POSTER_FALLBACK[filme.genero] || POSTER_FALLBACK.pop;

    card.innerHTML = `
        <div class="movie-poster">
            <div class="poster-art" style="--poster-a:${fallback.corA};--poster-b:${fallback.corB};">
                <span class="poster-icon">${fallback.icone}</span>
                <span class="poster-title">${filme.titulo}</span>
                <span class="poster-caption">${filme.generoNome}</span>
            </div>
            <img src="${filme.capa}" alt="Poster de ${filme.titulo}" loading="lazy" onload="this.classList.add('loaded');" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';this.classList.add('loaded');">
            <span class="age-badge age-${filme.classificacao}">${filme.classificacao}</span>
            ${visto ? `<span class="watched-badge">✓ Visto</span>` : ""}
            <div class="movie-overlay">
                <span class="movie-genre">${filme.generoNome}</span>
                <button type="button" class="card-favorite ${favorito ? "active" : ""}" data-favorite="${filme.id}" aria-label="Favoritar" aria-pressed="${favorito}">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <button type="button" class="details-btn" data-details="${filme.id}">▶ Ver detalhes</button>
            </div>
        </div>
        <div class="movie-card-content">
            <h3>${filme.titulo}</h3>
            <div class="movie-card-meta">
                <span class="movie-rating">⭐ ${filme.nota}</span>
                <span>${filme.generoNome}</span>
            </div>
        </div>
    `;

    return card;
}

// Exibe o filme marcado como "destaque" (ex.: o mais recente lançamento premiado) em um banner especial
function renderizarDestaque() {
    const secao = document.getElementById("destaque-section");
    if (!secao) return;

    const destaque = filmes.find(filme => filme.destaque);
    if (!destaque) return;

    secao.innerHTML = `
        <div class="destaque-content">
            <div class="destaque-poster">
                <img src="${destaque.capa}" alt="Pôster de ${destaque.titulo}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
            </div>
            <div class="destaque-info">
                <span class="destaque-selo">🏆 Top Filme Premiado</span>
                <h2>${destaque.titulo}</h2>
                <p>${destaque.sinopse}</p>
                <div class="destaque-meta">
                    <span class="movie-rating">⭐ ${destaque.nota}</span>
                    <span>${destaque.generoNome}</span>
                    <span>Classificação: ${destaque.classificacao}</span>
                </div>
                <button type="button" class="destaque-btn" data-details="${destaque.id}">▶ Ver detalhes e comprar</button>
            </div>
        </div>
    `;
    secao.hidden = false;
}

function renderizarFilmes(lista) {
    if (!movieGrid) return;
    movieGrid.innerHTML = "";

    if (lista.length === 0) {
        movieGrid.innerHTML = `<p class="empty-message">🎬 Nenhum filme encontrado.</p>`;
        return;
    }

    lista.forEach(filme => movieGrid.appendChild(criarCard(filme)));
}

function renderizarFavoritos() {
    if (!favoritesGrid) return;
    favoritesGrid.innerHTML = "";

    const lista = filmes.filter(filme => favoritos.includes(filme.id));

    if (lista.length === 0) {
        if (emptyFavorites) emptyFavorites.style.display = "block";
        return;
    }

    if (emptyFavorites) emptyFavorites.style.display = "none";
    lista.forEach(filme => favoritesGrid.appendChild(criarCard(filme)));
}

function atualizarCatalogo() {
    const termo = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const resultado = filmes.filter(filme => {
        const generoOK = generoAtual === "all" || filme.genero === generoAtual;
        const buscaOK = filme.titulo.toLowerCase().includes(termo) || filme.generoNome.toLowerCase().includes(termo);
        return generoOK && buscaOK;
    });

    renderizarFilmes(resultado);
}

function abrirModal(id) {
    const filme = filmes.find(item => item.id === Number(id));
    if (!filme || !modal) return;

    filmeAtual = filme;

    if (modalTitle) modalTitle.textContent = filme.titulo;
    if (modalSynopsis) modalSynopsis.textContent = filme.sinopse;
    if (modalRating) modalRating.textContent = `⭐ ${filme.nota}`;
    if (modalAge) modalAge.textContent = `Classificação: ${filme.classificacao}`;
    if (trailer) trailer.src = `https://www.youtube.com/embed/${filme.trailerId}?autoplay=1&rel=0`;

    atualizarBotoes();

    // Reinicia a seleção de sessão para o filme recém-aberto e gera assentos próprios dele
    diaAtual = "02/09/2026";
    document.querySelectorAll(".btn-dia").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.data === diaAtual);
    });
    carregarHorarios(diaAtual);

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (trailer) trailer.src = "";
    filmeAtual = null;
}

function atualizarBotoes() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;

    if (favoriteBtn) {
        const ativo = favoritos.includes(id);
        favoriteBtn.classList.toggle("active", ativo);
        favoriteBtn.setAttribute("aria-pressed", ativo);
    }
    if (watchedBtn) {
        const ativo = vistos.includes(id);
        watchedBtn.classList.toggle("active", ativo);
        watchedBtn.setAttribute("aria-pressed", ativo);
    }
    if (likeBtn) likeBtn.classList.toggle("active", likes.includes(id));
    if (dislikeBtn) dislikeBtn.classList.toggle("active", dislikes.includes(id));
}

function alternarFavorito(id) {
    const targetId = id ? Number(id) : (filmeAtual ? filmeAtual.id : null);
    if (!targetId) return;

    favoritos = favoritos.includes(targetId) ? favoritos.filter(item => item !== targetId) : [...favoritos, targetId];
    salvarDados();
    atualizarCatalogo();
    renderizarFavoritos();
    atualizarBotoes();
}

function alternarVisto() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;
    vistos = vistos.includes(id) ? vistos.filter(item => item !== id) : [...vistos, id];
    salvarDados();
    atualizarCatalogo();
    renderizarFavoritos();
    atualizarBotoes();
}

function alternarLike() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;
    dislikes = dislikes.filter(item => item !== id);
    likes = likes.includes(id) ? likes.filter(item => item !== id) : [...likes, id];
    salvarDados();
    atualizarBotoes();
}

function alternarDislike() {
    if (!filmeAtual) return;
    const id = filmeAtual.id;
    likes = likes.filter(item => item !== id);
    dislikes = dislikes.includes(id) ? dislikes.filter(item => item !== id) : [...dislikes, id];
    salvarDados();
    atualizarBotoes();
}

function alternarContraste() {
    const ativo = document.body.classList.toggle("high-contrast");
    const btn = document.getElementById("btn-contraste");
    if (btn) btn.setAttribute("aria-pressed", ativo);
    localStorage.setItem("popcorn_contraste", ativo ? "1" : "0");
}

document.addEventListener("click", function (e) {
    const btnDet = e.target.closest("[data-details]");
    if (btnDet) {
        abrirModal(btnDet.dataset.details);
        return;
    }

    const btnFav = e.target.closest("[data-favorite]");
    if (btnFav) {
        alternarFavorito(btnFav.dataset.favorite);
        return;
    }

    const btnGenre = e.target.closest(".genre-btn");
    if (btnGenre) {
        document.querySelectorAll(".genre-btn").forEach(btn => btn.classList.remove("active"));
        btnGenre.classList.add("active");
        generoAtual = btnGenre.dataset.genre;
        atualizarCatalogo();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    carregarElementosDOM();
    if (searchInput) {
        searchInput.addEventListener("input", atualizarCatalogo);
    }

    const btnContraste = document.getElementById("btn-contraste");
    if (btnContraste) {
        btnContraste.addEventListener("click", alternarContraste);
        if (localStorage.getItem("popcorn_contraste") === "1") {
            document.body.classList.add("high-contrast");
            btnContraste.setAttribute("aria-pressed", "true");
        }
    }

    if (favoriteBtn) favoriteBtn.addEventListener("click", () => alternarFavorito());
    if (watchedBtn) watchedBtn.addEventListener("click", alternarVisto);
    if (likeBtn) likeBtn.addEventListener("click", alternarLike);
    if (dislikeBtn) dislikeBtn.addEventListener("click", alternarDislike);

    atualizarCatalogo();
    renderizarFavoritos();
    renderizarDestaque();
});

// Preço fixo por ingresso
const PRECO_INGRESSO = 25.00;
let assentosSelecionados = 0;

// Sessões reais programadas para Setembro de 2026
const sessoesSetembro = {
    "02/09/2026": ["13:00", "15:45", "18:30", "21:15"],
    "05/09/2026": ["14:00", "16:30", "19:00", "21:30", "23:45"],
    "10/09/2026": ["13:30", "16:00", "18:30", "21:00"],
    "15/09/2026": ["14:15", "17:00", "19:45"],
    "20/09/2026": ["11:00", "13:30", "16:00", "18:30", "21:00"],
    "25/09/2026": ["15:00", "17:45", "20:30", "23:15"]
};

let diaAtual = "02/09/2026";
let horaAtual = "13:00";

// Carrega horários conforme o dia selecionado
function carregarHorarios(dia) {
    const container = document.getElementById('horarios-container');
    container.innerHTML = '';
    
    const horarios = sessoesSetembro[dia] || [];
    
    horarios.forEach((hora, index) => {
        const btn = document.createElement('button');
        btn.classList.add('btn-horario');
        if (index === 0) {
            btn.classList.add('active');
            horaAtual = hora;
        }
        btn.innerText = hora;
        
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.btn-horario').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            horaAtual = hora;
            atualizarTextoSessao();
            carregarAssentos();
        });
        
        container.appendChild(btn);
    });

    atualizarTextoSessao();
    carregarAssentos();
}

// Gerador pseudo-aleatório com semente fixa: mesmo filme/sessão sempre
// mostra o mesmo mapa de ocupação, mas cada filme fica diferente dos outros.
function criarGeradorComSemente(semente) {
    let s = semente % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

// Gera o mapa de assentos: ocupação varia de acordo com o filme e a sessão escolhida
function carregarAssentos(totalAssentos = 32) {
    const grid = document.getElementById('assentos-grid');
    grid.innerHTML = '';
    assentosSelecionados = 0;
    atualizarResumo();

    const diaNumero = Number(diaAtual.replace(/\D/g, '')) || 0;
    const horaNumero = Number(horaAtual.replace(':', '')) || 0;
    const semente = filmeAtual ? (filmeAtual.id * 977) + diaNumero + horaNumero : 12345;
    const aleatorio = criarGeradorComSemente(semente);

    for (let i = 1; i <= totalAssentos; i++) {
        const assento = document.createElement('div');
        assento.classList.add('assento');

        // Cerca de 35% dos assentos já ocupados, variando por filme/sessão
        if (aleatorio() < 0.35) {
            assento.classList.add('ocupado');
        }

        assento.addEventListener('click', () => {
            if (!assento.classList.contains('ocupado')) {
                assento.classList.toggle('selecionado');

                if (assento.classList.contains('selecionado')) {
                    assentosSelecionados++;
                } else {
                    assentosSelecionados--;
                }

                atualizarResumo();
            }
        });

        grid.appendChild(assento);
    }
}

// Atualiza o resumo do pedido e preço
function atualizarResumo() {
    document.getElementById('assentos-qtd').innerText = assentosSelecionados;
    const total = (assentosSelecionados * PRECO_INGRESSO).toFixed(2);
    document.getElementById('preco-total').innerText = total.replace('.', ',');
    
    const btnConfirmar = document.getElementById('btn-confirmar');
    btnConfirmar.disabled = assentosSelecionados === 0;
}

function atualizarTextoSessao() {
    document.getElementById('sessao-selecionada-texto').innerText = `${diaAtual} às ${horaAtual}`;
}

// Eventos dos botões de data
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-dia').forEach(botao => {
        botao.addEventListener('click', (e) => {
            document.querySelectorAll('.btn-dia').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            diaAtual = e.target.getAttribute('data-data');
            carregarHorarios(diaAtual);
        });
    });

    // Inicialização da primeira sessão
    carregarHorarios(diaAtual);
});

// Ação ao clicar em "Comprar": fecha o modal de sessão e abre o bilhete de confirmação
function confirmarReserva() {
    if (assentosSelecionados === 0) return;

    const totalTexto = document.getElementById('preco-total').innerText;
    const sessaoTexto = `${diaAtual} às ${horaAtual}`;

    abrirSucessoModal(sessaoTexto, assentosSelecionados, totalTexto);
    incrementarTicketsComprados(assentosSelecionados);
    fecharModal();
}

function abrirSucessoModal(sessaoTexto, qtdAssentos, totalTexto) {
    const sucessoModal = document.getElementById('sucesso-modal');
    if (!sucessoModal) return;

    document.getElementById('sucesso-mensagem-sessao').textContent =
        `${filmeAtual ? filmeAtual.titulo + ' — ' : ''}Sessão: ${sessaoTexto}`;
    document.getElementById('sucesso-mensagem-assentos').textContent =
        `Assentos comprados: ${qtdAssentos}`;
    document.getElementById('sucesso-mensagem-total').textContent = `R$ ${totalTexto}`;

    sucessoModal.classList.add('active');
}

function fecharSucessoModal() {
    const sucessoModal = document.getElementById('sucesso-modal');
    if (!sucessoModal) return;
    sucessoModal.classList.remove('active');
}

// Badge "Assento comprado" perto do botão "Explorar filmes", com contador salvo no navegador
function incrementarTicketsComprados(quantidade) {
    const total = (Number(localStorage.getItem('popcorn_tickets_comprados')) || 0) + quantidade;
    localStorage.setItem('popcorn_tickets_comprados', String(total));
    mostrarBadgeCompra(total);
}

function mostrarBadgeCompra(total) {
    const badge = document.getElementById('compra-badge');
    const texto = document.getElementById('compra-badge-texto');
    if (!badge || !texto) return;

    texto.textContent = total === 1 ? 'Assento comprado!' : `${total} assentos comprados!`;
    badge.hidden = false;

    badge.classList.remove('compra-badge-pop');
    void badge.offsetWidth; // reinicia a animação a cada nova compra
    badge.classList.add('compra-badge-pop');
}

document.addEventListener('DOMContentLoaded', () => {
    const totalSalvo = Number(localStorage.getItem('popcorn_tickets_comprados')) || 0;
    if (totalSalvo > 0) mostrarBadgeCompra(totalSalvo);
});
