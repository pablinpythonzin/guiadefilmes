/* =========================================================
   🍿 POPCORN HUB — SCRIPT.JS
   ========================================================= */

const filmes = [
    {
        id: 1,
        titulo: "Homem-Aranha: Sem Volta Para Casa",
        genero: "action",
        generoNome: "Ação",
        sinopse: "Peter Parker precisa lidar com as consequências de sua identidade revelada e acaba enfrentando ameaças de outros universos.",
        classificacao: "12",
        nota: "8.7",
        capa: "https://m.media-amazon.com/images/M/MV5BMWJjNWJhMDctYTVlNy00ZmJjLWIxNWUtNmZhMWQ3ZGJiYzVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailerId: "JfVOs4VSpmA"
    },
    {
        id: 2,
        titulo: "Divertida Mente 2",
        genero: "comedy",
        generoNome: "Comédia",
        sinopse: "Riley está entrando na adolescência e novas emoções aparecem em sua mente.",
        classificacao: "L",
        nota: "8.5",
        capa: "https://m.media-amazon.com/images/M/MV5BYzc1NWRkMDktYmJhYy00NGFiLTg4MjItMDA3MDAzNDhhMTEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailerId: "LEjhY15eCx0"
    },
    {
        id: 3,
        titulo: "Interestelar",
        genero: "sci-fi",
        generoNome: "Sci-Fi",
        sinopse: "Um grupo de astronautas parte em uma missão através de um buraco de minhoca em busca de um novo lar para a humanidade.",
        classificacao: "10",
        nota: "8.7",
        capa: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA0LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailerId: "zSWdZVtXT7E"
    },
    {
        id: 4,
        titulo: "Batman",
        genero: "action",
        generoNome: "Ação",
        sinopse: "Batman investiga uma série de crimes cometidos por um misterioso assassino em Gotham City.",
        classificacao: "14",
        nota: "8.0",
        capa: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDgtMzNiNjdhNWFlM2JkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailerId: "mqqft2x_Aa4"
    },
    {
        id: 5,
        titulo: "Coringa",
        genero: "drama",
        generoNome: "Drama",
        sinopse: "Arthur Fleck é um homem ignorado pela sociedade que inicia uma transformação que mudará Gotham para sempre.",
        classificacao: "16",
        nota: "8.4",
        capa: "https://m.media-amazon.com/images/M/MV5BNGVjNzk4ZGUtZWBlZi00YTlhLTgyMjUtODkxZTNlLBkY2ZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailerId: "zAGVQLHvwOY"
    },
    {
        id: 6,
        titulo: "Avatar: O Caminho da Água",
        genero: "sci-fi",
        generoNome: "Sci-Fi",
        sinopse: "Jake Sully e sua família enfrentam novas ameaças enquanto procuram segurança entre os povos dos oceanos de Pandora.",
        classificacao: "12",
        nota: "7.6",
        capa: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctN2ZiOC00YjVlLWFlNzAtNTVhNzM1YjUyMjVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailerId: "d9MyW72ELq0"
    },
    {
        id: 7,
        titulo: "Oppenheimer",
        genero: "drama",
        generoNome: "Drama",
        sinopse: "A história do físico J. Robert Oppenheimer e de sua participação no desenvolvimento da bomba atômica.",
        classificacao: "16",
        nota: "8.6",
        capa: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZGVlk00MGEwLTgwNmUtNTE5YzA5ZGE5ZmY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailerId: "uYPbbksJxIg"
    },
    {
        id: 8,
        titulo: "As Branquelas",
        genero: "comedy",
        generoNome: "Comédia",
        sinopse: "Dois agentes do FBI precisam se disfarçar como duas socialites para protegê-las e acabam vivendo situações hilárias.",
        classificacao: "12",
        nota: "7.0",
        capa: "https://m.media-amazon.com/images/M/MV5BMTY3NjA1NDcxN15BMl5BanBnXkFtZTcwNDA2OTgyMQ@@._V1_FMjpg_UX1000_.jpg",
        trailerId: "aeVkbNka9HM"
    }
];

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

    card.innerHTML = `
        <div class="movie-poster">
            <img src="${filme.capa}" alt="Poster de ${filme.titulo}" loading="lazy">
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
    id = Number(id);
    favoritos = favoritos.includes(id) ? favoritos.filter(item => item !== id) : [...favoritos, id];
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
    atualizarCatalogo();
    renderizarFavoritos();
});
