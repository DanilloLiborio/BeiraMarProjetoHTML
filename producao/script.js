// Executa somente quando o HTML estiver carregado
document.addEventListener('DOMContentLoaded', () => {

    const modalPrincipal = document.getElementById('modalCompra');

    // Guardamos o ID real
    window.ID_MODAL_PRINCIPAL = modalPrincipal ? modalPrincipal.id : null;

    // ================================
    // Esconde modais secundários se existirem
    // ================================
    ['modalProduto', 'modalCliente', 'modalEtapa'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    // ================================
    // Listener para o botão de adicionar
    // ================================
    const botaoAdicionar = document.querySelector('.botao-adicionar');
    if (botaoAdicionar) {
        // Mudando para a função que o HTML espera (abrirModalCompra)
        botaoAdicionar.addEventListener('click', abrirModalCompra); 
    }
});


// =========================================================
// FUNÇÕES DO MODAL PRINCIPAL
// =========================================================

// Função que o HTML espera (chamada no onclick do botão "Adicionar novo produto")
function abrirModalCompra() { 
    if (!window.ID_MODAL_PRINCIPAL) return;

    const modal = document.getElementById(window.ID_MODAL_PRINCIPAL);

    if (modal) {
        modal.style.display = 'flex'; // Abre o modal
    }
}

// Função que o HTML espera (chamada no onclick do botão "Salvar" do modal)
function fecharModalCompra() { 
    if (!window.ID_MODAL_PRINCIPAL) return;

    const modal = document.getElementById(window.ID_MODAL_PRINCIPAL);

    if (modal) {
        modal.style.display = 'none'; // Fecha o modal
    }
}


// =========================================================
// FUNÇÕES DE MODAIS SECUNDÁRIOS – Não necessitam de alterações
// =========================================================

function abrirModal(id) {
    fecharModalCompra(); // Usa a nova função
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex';
}

function fecharModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';

    abrirModalCompra(); // Usa a nova função
}


// -------------------- PRODUTO --------------------
function abrirModalNomes() { abrirModal('modalProduto'); }
function fecharModalNomes() { fecharModal('modalProduto'); }
function selecionarProduto(produto) {
    const input = document.getElementById('inputProduto');
    if (input) input.value = produto;
    fecharModalNomes();
}


// -------------------- CLIENTE --------------------
function abrirModalClientes() { abrirModal('modalCliente'); }
function fecharModalClientes() { fecharModal('modalCliente'); }
function selecionarCliente(cliente) {
    const input = document.getElementById('inputCliente');
    if (input) input.value = cliente;
    fecharModalClientes();
}


// -------------------- ETAPA --------------------
function abrirModalEtapas() { abrirModal('modalEtapa'); }
function fecharModalEtapa() { fecharModal('modalEtapa'); }
function selecionarEtapa(etapa) {
    const input = document.getElementById('inputEtapa');
    if (input) input.value = etapa;
    fecharModalEtapa();
}