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

// Gera o mapa de assentos (com assentos ocupados simulados)
function carregarAssentos(totalAssentos = 32) {
    const grid = document.getElementById('assentos-grid');
    grid.innerHTML = '';
    assentosSelecionados = 0;
    atualizarResumo();

    for (let i = 1; i <= totalAssentos; i++) {
        const assento = document.createElement('div');
        assento.classList.add('assento');
        
        // Simulação de assentos ocupados aleatórios
        if ((i * 3) % 7 === 0 || i === 5 || i === 12) {
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

// Ação ao confirmar reserva
function confirmarReserva() {
    alert(`Reserva confirmada!\nSessão: ${diaAtual} às ${horaAtual}\nTotal de Assentos: ${assentosSelecionados}\nValor Total: R$ ${document.getElementById('preco-total').innerText}`);
    fecharModal();
}
