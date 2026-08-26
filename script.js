/* ============================================================
   🍿 POPCORN HUB — SCRIPT.JS
   Catálogo + Posters + Busca + Filtros + Favoritos + Modal
   ============================================================ */


/* ============================================================
   01 — BANCO DE DADOS DOS FILMES
   ============================================================ */

const filmes = [
    {
        id: 1,
        titulo: "Homem-Aranha: Sem Volta Para Casa",
        genero: "action",
        generoNome: "Ação",
        sinopse:
            "Peter Parker precisa lidar com as consequências de sua identidade ter sido revelada. Com a ajuda do Doutor Estranho, ele tenta recuperar sua vida, mas acaba abrindo as portas para ameaças de outros universos.",
        classificacao: "12",
        nota: "8.7",

        // POSTER DO FILME
        capa:
            "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",

        trailerId: "JfVOs4VSpmA"
    },

    {
        id: 2,
        titulo: "Divertida Mente 2",
        genero: "comedy",
        generoNome: "Comédia",
        sinopse:
            "Riley está entrando na adolescência e novas emoções aparecem em sua mente, transformando completamente o mundo que ela conhece.",
        classificacao: "L",
        nota: "8.5",

        // POSTER DO FILME
        capa:
            "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",

        trailerId: "LEjhY15eCx0"
    },

    {
        id: 3,
        titulo: "Interestelar",
        genero: "sci-fi",
        generoNome: "Sci-Fi",
        sinopse:
            "Em um futuro onde a Terra enfrenta uma grave crise, um grupo de astronautas parte em uma missão através de um buraco de minhoca em busca de um novo lar para a humanidade.",
        classificacao: "10",
        nota: "8.7",

        capa:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

        trailerId: "zSWdZVtXT7E"
    },

    {
        id: 4,
        titulo: "Batman",
        genero: "action",
        generoNome: "Ação",
        sinopse:
            "O Batman investiga uma série de crimes cometidos por um misterioso assassino enquanto Gotham City mergulha em uma onda de corrupção e violência.",
        classificacao: "14",
        nota: "8.0",

        capa:
            "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",

        trailerId: "mqqft2x_Aa4"
    },

    {
        id: 5,
        titulo: "Coringa",
        genero: "drama",
        generoNome: "Drama",
        sinopse:
            "Arthur Fleck é um homem ignorado pela sociedade que começa uma transformação que o leva a se tornar uma das figuras mais perturbadoras de Gotham.",
        classificacao: "16",
        nota: "8.4",

        capa:
            "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",

        trailerId: "zAGVQLHvwOY"
    },

    {
        id: 6,
        titulo: "Avatar: O Caminho da Água",
        genero: "sci-fi",
        generoNome: "Sci-Fi",
        sinopse:
            "Jake Sully e sua família enfrentam novas ameaças enquanto buscam proteção junto a um povo ligado aos oceanos de Pandora.",
        classificacao: "12",
        nota: "7.6",

        capa:
            "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",

        trailerId: "d9MyW72ELq0"
    },

    {
        id: 7,
        titulo: "Oppenheimer",
        genero: "drama",
        generoNome: "Drama",
        sinopse:
            "A história do físico J. Robert Oppenheimer e de sua participação no desenvolvimento da primeira bomba atômica durante a Segunda Guerra Mundial.",
        classificacao: "16",
        nota: "8.6",

        capa:
            "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",

        trailerId: "uYPbbksJxIg"
    },

    {
        id: 8,
        titulo: "As Branquelas",
        genero: "comedy",
        generoNome: "Comédia",
        sinopse:
            "Dois agentes do FBI precisam se disfarçar para proteger duas herdeiras e acabam se metendo em situações completamente absurdas.",
        classificacao: "12",
        nota: "7.0",

        capa:
            "https://image.tmdb.org/t/p/w500/aHTUpo45qy9QY7Jd4mM7k5fY8xA.jpg",

        trailerId: "aeVkbNka9HM"
    }
];


/* ============================================================
   02 — ESTADO DO SITE
   ============================================================ */

let favoritos =
    JSON.parse(
        localStorage.getItem("popcorn_favs")
    ) || [];

let filmesVistos =
    JSON.parse(
        localStorage.getItem("popcorn_watched")
    ) || [];

let filmesCurtidos =
    JSON.parse(
        localStorage.getItem("popcorn_likes")
    ) || [];

let filmesNaoCurtidos =
    JSON.parse(
        localStorage.getItem("popcorn_dislikes")
    ) || [];

let generoAtual = "all";
let filmeAtual = null;


/* ============================================================
   03 — ELEMENTOS
   ============================================================ */

const movieGrid =
    document.getElementById("movie-grid");

const favoritesGrid =
    document.getElementById("favorites-grid");

const emptyFavorites =
    document.getElementById("empty-favorites");

const searchInput =
    document.getElementById("movie-search");

const modal =
    document.getElementById("movie-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalSynopsis =
    document.getElementById("modal-synopsis");

const modalRating =
    document.getElementById("modal-rating");

const modalAge =
    document.getElementById("modal-age-rating");

const trailer =
    document.getElementById("movie-trailer");

const favoriteBtn =
    document.getElementById("favorite-btn");

const watchedBtn =
    document.getElementById("watched-btn");

const likeBtn =
    document.getElementById("like-btn");

const dislikeBtn =
    document.getElementById("dislike-btn");


/* ============================================================
   04 — SALVAR ESTADO
   ============================================================ */

function salvarEstado() {

    localStorage.setItem(
        "popcorn_favs",
        JSON.stringify(favoritos)
    );

    localStorage.setItem(
        "popcorn_watched",
        JSON.stringify(filmesVistos)
    );

    localStorage.setItem(
        "popcorn_likes",
        JSON.stringify(filmesCurtidos)
    );

    localStorage.setItem(
        "popcorn_dislikes",
        JSON.stringify(filmesNaoCurtidos)
    );
}


/* ============================================================
   05 — ESCAPAR HTML
   ============================================================ */

function escaparHTML(texto) {

    const div =
        document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;
}


/* ============================================================
   06 — CARD DO FILME
   ============================================================ */

function criarCard(filme) {

    const favorito =
        favoritos.includes(filme.id);

    const visto =
        filmesVistos.includes(filme.id);

    const card =
        document.createElement("article");

    card.className = "movie-card";

    card.dataset.id = filme.id;

    card.innerHTML = `
        <div class="movie-poster">

            <img
                src="${filme.capa}"
                alt="Poster de ${escaparHTML(filme.titulo)}"
                loading="lazy"
                onerror="this.src='https://via.placeholder.com/500x750/121212/ffffff?text=Poster+Indisponivel'"
            >

            <div class="movie-overlay">

                <span class="movie-genre">
                    ${escaparHTML(filme.generoNome)}
                </span>

                <button
                    class="card-favorite ${favorito ? "active" : ""}"
                    type="button"
                    data-favorite="${filme.id}"
                    aria-label="Favoritar ${escaparHTML(filme.titulo)}"
                    title="Favoritar"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
                        />
                    </svg>
                </button>

                <button
                    class="details-btn"
                    type="button"
                    data-details="${filme.id}"
                >
                    ▶ Ver detalhes
                </button>

            </div>

            ${
                visto
                    ? `<span class="watched-badge">✓ Visto</span>`
                    : ""
            }

            <span class="age-badge age-${filme.classificacao}">
                ${escaparHTML(filme.classificacao)}
            </span>

        </div>

        <div class="movie-card-content">

            <h3>
                ${escaparHTML(filme.titulo)}
            </h3>

            <div class="movie-card-meta">

                <span class="movie-rating">
                    ⭐ ${filme.nota}
                </span>

                <span>
                    ${escaparHTML(filme.generoNome)}
                </span>

            </div>

        </div>
    `;

    return card;
}


/* ============================================================
   07 — RENDERIZAR FILMES
   ============================================================ */

function renderizarFilmes(lista) {

    if (!movieGrid) return;

    movieGrid.innerHTML = "";

    if (lista.length === 0) {

        movieGrid.innerHTML = `
            <div class="empty-message">
                🎬 Nenhum filme encontrado.
            </div>
        `;

        return;
    }

    lista.forEach((filme, index) => {

        const card =
            criarCard(filme);

        card.style.animationDelay =
            `${index * 0.04}s`;

        movieGrid.appendChild(card);
    });
}


/* ============================================================
   08 — RENDERIZAR FAVORITOS
   ============================================================ */

function renderizarFavoritos() {

    if (!favoritesGrid) return;

    favoritesGrid.innerHTML = "";

    const lista =
        filmes.filter(
            filme =>
                favoritos.includes(filme.id)
        );

    if (lista.length === 0) {

        if (emptyFavorites) {
            emptyFavorites.style.display =
                "block";
        }

        return;
    }

    if (emptyFavorites) {
        emptyFavorites.style.display =
            "none";
    }

    lista.forEach((filme, index) => {

        const card =
            criarCard(filme);

        card.style.animationDelay =
            `${index * 0.05}s`;

        favoritesGrid.appendChild(card);
    });
}


/* ============================================================
   09 — FILTRAR FILMES
   ============================================================ */

function atualizarCatalogo() {

    const termo =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    const resultado =
        filmes.filter(filme => {

            const correspondeGenero =
                generoAtual === "all" ||
                filme.genero === generoAtual;

            const correspondeBusca =
                filme.titulo
                    .toLowerCase()
                    .includes(termo) ||
                filme.generoNome
                    .toLowerCase()
                    .includes(termo);

            return (
                correspondeGenero &&
                correspondeBusca
            );
        });

    renderizarFilmes(resultado);
}


/* ============================================================
   10 — ABRIR MODAL
   ============================================================ */

function abrirModal(id) {

    const filme =
        filmes.find(
            item => item.id === Number(id)
        );

    if (!filme || !modal) return;

    filmeAtual = filme;

    modalTitle.textContent =
        filme.titulo;

    modalSynopsis.textContent =
        filme.sinopse;

    modalRating.textContent =
        `⭐ ${filme.nota}`;

    modalAge.textContent =
        `Classificação: ${filme.classificacao}`;

    if (trailer) {

        trailer.src =
            `https://www.youtube.com/embed/${filme.trailerId}?autoplay=1&rel=0`;
    }

    atualizarBotoesModal();

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

    setTimeout(() => {

        const closeButton =
            document.querySelector(
                ".modal-close"
            );

        closeButton?.focus();

    }, 100);
}


/* ============================================================
   11 — FECHAR MODAL
   ============================================================ */

function fecharModal() {

    if (!modal) return;

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

    if (trailer) {
        trailer.src = "";
    }

    filmeAtual = null;
}


/* ============================================================
   12 — ATUALIZAR BOTÕES
   ============================================================ */

function atualizarBotoesModal() {

    if (!filmeAtual) return;

    const id =
        filmeAtual.id;

    if (favoriteBtn) {

        const ativo =
            favoritos.includes(id);

        favoriteBtn.classList.toggle(
            "active",
            ativo
        );

        favoriteBtn.setAttribute(
            "aria-pressed",
            ativo
        );

        favoriteBtn.querySelector("span")
            .textContent =
            ativo
                ? "Favoritado"
                : "Favoritar";
    }

    if (watchedBtn) {

        const ativo =
            filmesVistos.includes(id);

        watchedBtn.classList.toggle(
            "active",
            ativo
        );

        watchedBtn.setAttribute(
            "aria-pressed",
            ativo
        );

        watchedBtn.querySelector("span")
            .textContent =
            ativo
                ? "Visto ✓"
                : "Visto";
    }

    if (likeBtn) {

        const ativo =
            filmesCurtidos.includes(id);

        likeBtn.classList.toggle(
            "active",
            ativo
        );

        likeBtn.setAttribute(
            "aria-pressed",
            ativo
        );
    }

    if (dislikeBtn) {

        const ativo =
            filmesNaoCurtidos.includes(id);

        dislikeBtn.classList.toggle(
            "active",
            ativo
        );

        dislikeBtn.setAttribute(
            "aria-pressed",
            ativo
        );
    }
}


/* ============================================================
   13 — FAVORITAR
   ============================================================ */

function alternarFavorito(id) {

    id = Number(id);

    if (favoritos.includes(id)) {

        favoritos =
            favoritos.filter(
                favId => favId !== id
            );

    } else {

        favoritos.push(id);
    }

    salvarEstado();

    atualizarCatalogo();

    renderizarFavoritos();

    if (filmeAtual?.id === id) {
        atualizarBotoesModal();
    }
}


/* ============================================================
   14 — MARCAR COMO VISTO
   ============================================================ */

function alternarVisto() {

    if (!filmeAtual) return;

    const id =
        filmeAtual.id;

    if (filmesVistos.includes(id)) {

        filmesVistos =
            filmesVistos.filter(
                item => item !== id
            );

    } else {

        filmesVistos.push(id);
    }

    salvarEstado();

    atualizarCatalogo();

    renderizarFavoritos();

    atualizarBotoesModal();
}


/* ============================================================
   15 — LIKE
   ============================================================ */

function alternarLike() {

    if (!filmeAtual) return;

    const id =
        filmeAtual.id;

    filmesNaoCurtidos =
        filmesNaoCurtidos.filter(
            item => item !== id
        );

    if (filmesCurtidos.includes(id)) {

        filmesCurtidos =
            filmesCurtidos.filter(
                item => item !== id
            );

    } else {

        filmesCurtidos.push(id);
    }

    salvarEstado();

    atualizarBotoesModal();
}


/* ============================================================
   16 — DISLIKE
   ============================================================ */

function alternarDislike() {

    if (!filmeAtual) return;

    const id =
        filmeAtual.id;

    filmesCurtidos =
        filmesCurtidos.filter(
            item => item !== id
        );

    if (filmesNaoCurtidos.includes(id)) {

        filmesNaoCurtidos =
            filmesNaoCurtidos.filter(
                item => item !== id
            );

    } else {

        filmesNaoCurtidos.push(id);
    }

    salvarEstado();

    atualizarBotoesModal();
}


/* ============================================================
   17 — EVENTOS DOS CARDS
   ============================================================ */

document.addEventListener(
    "click",
    event => {

        const favorite =
            event.target.closest(
                "[data-favorite]"
            );

        if (favorite) {

            event.stopPropagation();

            alternarFavorito(
                favorite.dataset.favorite
            );

            return;
        }


        const details =
            event.target.closest(
                "[data-details]"
            );

        if (details) {

            abrirModal(
                details.dataset.details
            );

            return;
        }


        const card =
            event.target.closest(
                ".movie-card"
            );

        if (
            card &&
            !event.target.closest("button")
        ) {

            abrirModal(
                card.dataset.id
            );
        }
    }
);


/* ============================================================
   18 — BUSCA
   ============================================================ */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        atualizarCatalogo
    );
}


/* ============================================================
   19 — FILTROS DE GÊNERO
   ============================================================ */

document.querySelectorAll(
    ".genre-btn"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(
                    ".genre-btn"
                )
                .forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );

            button.classList.add(
                "active"
            );

            generoAtual =
                button.dataset.genre ||
                "all";

            atualizarCatalogo();
        }
    );
});


/* ============================================================
   20 — BOTÕES DO MODAL
   ============================================================ */

favoriteBtn?.addEventListener(
    "click",
    () => {

        if (filmeAtual) {
            alternarFavorito(
                filmeAtual.id
            );
        }
    }
);


watchedBtn?.addEventListener(
    "click",
    alternarVisto
);


likeBtn?.addEventListener(
    "click",
    alternarLike
);


dislikeBtn?.addEventListener(
    "click",
    alternarDislike
);


/* ============================================================
   21 — FECHAR MODAL
   ============================================================ */

document
    .querySelectorAll(
        "[data-close-modal]"
    )
    .forEach(element => {

        element.addEventListener(
            "click",
            fecharModal
        );
    });


/* ============================================================
   22 — ESC PARA FECHAR
   ============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal?.classList.contains("active")
        ) {

            fecharModal();
        }
    }
);


/* ============================================================
   23 — INICIALIZAÇÃO
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarCatalogo();

        renderizarFavoritos();

        console.log(
            "🍿 Popcorn Hub iniciado!"
        );
    }
);
