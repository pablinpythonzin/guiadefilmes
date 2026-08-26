// 1. Banco de Dados dos Filmes (Exemplo)
const filmes = [
  {
    id: 1,
    titulo: "Homem-Aranha: Sem Volta Para Casa",
    genero: "Acao",
    sinopse: "O Homem-Aranha precisa lidar com as consequências de sua identidade revelada...",
    classificacao: "12",
    nota: "8.7",
    capa: "https://via.placeholder.com/200x300",
    trailerId: "kB8A-kL9yZ0" // ID do vídeo do YouTube
  },
  {
    id: 2,
    titulo: "Divertida Mente 2",
    genero: "Comedia",
    sinopse: "Novas emoções chegam à mente de Riley enquanto ela entra na adolescência...",
    classificacao: "L",
    nota: "8.5",
    capa: "https://via.placeholder.com/200x300",
    trailerId: "L_J-_33wLTo"
  }
];

// 2. Estado dos Favoritos (Puxa do localStorage ou inicia vazio)
let favoritos = JSON.parse(localStorage.getItem('popcorn_favs')) || [];

// 3. Função para Exibir os Filmes na Tela
function renderizarFilmes(lista) {
  const grid = document.getElementById('movie-grid');
  grid.innerHTML = ''; // Limpa a tela antes de renderizar

  lista.forEach(filme => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${filme.capa}" alt="${filme.titulo}">
      <h3>${filme.titulo}</h3>
      <p>⭐ ${filme.nota}</p>
      <button onclick="abrirModal(${filme.id})">Ver Detalhes</button>
    `;
    grid.appendChild(card);
  });
}

// 4. Função para Abrir a Modal com os Dados do Filme
function abrirModal(id) {
  const filme = filmes.find(f => f.id === id);
  if (!filme) return;

  const modal = document.getElementById('movie-modal');
  
  // Preenche os dados da modal
  document.getElementById('modal-title').innerText = filme.titulo;
  document.getElementById('modal-synopsis').innerText = filme.sinopse;
  document.getElementById('modal-rating').innerText = filme.classificacao;
  
  // Carrega o trailer do YouTube
  document.getElementById('modal-iframe').src = `https://www.youtube.com/embed/${filme.trailerId}?autoplay=1`;

  // Exibe a modal
  modal.style.display = 'flex';
}

// 5. Função para Fechar a Modal
function fecharModal() {
  const modal = document.getElementById('movie-modal');
  modal.style.display = 'none';
  document.getElementById('modal-iframe').src = ''; // Para o áudio do vídeo
}

// 6. Função para Alternar Favorito e Salvar no LocalStorage
function alternarFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(favId => favId !== id);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem('popcorn_favs', JSON.stringify(favoritos));
}

// 7. Evento de Busca em Tempo Real
document.getElementById('search-input')?.addEventListener('input', (e) => {
  const termo = e.target.value.toLowerCase();
  const filtrados = filmes.filter(f => f.titulo.toLowerCase().includes(termo));
  renderizarFilmes(filtrados);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderizarFilmes(filmes);
});
