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
        capa: "images/homem-aranha-sem-volta-para-casa.jpg",
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
        capa: "images/divertida-mente-2.jpg",
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
        capa: "images/interestelar.jpg",
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
        capa: "images/batman.jpg",
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
        capa: "images/coringa.jpg",
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
        capa: "images/avatar-o-caminho-da-agua.jpg",
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
        capa: "images/oppenheimer.jpg",
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
        capa: "images/as-branquelas.jpg",
        trailerId: "aeVkbNka9HM"
    }
];

let favoritos = JSON.parse(localStorage.getItem("popcorn_favs")) || [];
let vistos = JSON.parse(localStorage.getItem("popcorn_watched")) || [];
let likes = JSON.parse(localStorage.getItem("popcorn_likes")) || [];
let dislikes = JSON.parse(localStorage.getItem("popcorn_dislikes")) || [];

let generoAtual = "all";
let filmeAtual = null;

const movieGrid = document.getElementById("movie-grid");
const favoritesGrid = document.getElementById("favorites-grid");
const emptyFavorites = document.getElementById("empty-favorites");
const searchInput = document.getElementById("movie-search");
const modal = document.getElementById("movie-modal");
const modalTitle = document.getElementById("modal-title");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalRating = document.getElementById("modal-rating");
const modalAge = document.getElementById("modal-age-rating");
const trailer = document.getElementById("movie-trailer");
const favoriteBtn = document.getElementById("favorite-btn");
const watchedBtn = document.getElementById("watched-btn");
const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

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

    const imagem = card.querySelector("img");
    imagem.addEventListener("error", function () {
        this.src = "https://placehold.co/500x750/121212/ffffff?text=Poster+Indisponivel";
    }, { once: true });

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

if (searchInput) {
    searchInput.addEventListener("input", atualizarCatalogo);
}

document.addEventListener("DOMContentLoaded", function () {
    atualizarCatalogo();
    renderizarFavoritos();
});
