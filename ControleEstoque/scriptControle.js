document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlayFiltro');
  const statusButtons = document.querySelectorAll('.Class_Status');
  const filterButtons = overlay.querySelectorAll('.btn-producao, .btn-estoque, .btn-venda');
  let currentStatusButton = null;

  // Função para fechar overlay
  const closeOverlay = () => {
    overlay.classList.remove('active');
    setTimeout(() => overlay.style.display = 'none', 300);
  };

  // Abrir overlay ao clicar em um status
  statusButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentStatusButton = button;
      overlay.style.display = 'flex';
      setTimeout(() => overlay.classList.add('active'), 10);
    });
  });

  // Alterar status dentro do overlay
  filterButtons.forEach(filterButton => {
    filterButton.addEventListener('click', () => {
      if (currentStatusButton) {
        const newStatus = filterButton.innerText.trim();
        const statusSpan = currentStatusButton.querySelector('span');
        const statusContainer = currentStatusButton.closest('.status-container');
        if (statusSpan) statusSpan.innerText = newStatus;
        if (statusContainer) {
          statusContainer.classList.remove('producao', 'estoque', 'venda');
          statusContainer.classList.add(newStatus.toLowerCase());
        }
      }
      closeOverlay();
    });
  });

  // Fechar overlay clicando fora
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  // === Overlay Principal (Botão Filtrar) ===
  const overlayFiltroPrincipal = document.getElementById('overlayFiltroPrincipal');
  const botaoFiltro = document.querySelector('.botao-filtro');
  const botoesFiltro = document.querySelectorAll('.filtro-principal-opcoes .filtro-btn');
  const caixasPeixes = document.querySelectorAll('.caixa-peixes');

  botaoFiltro.addEventListener('click', () => {
    overlayFiltroPrincipal.style.display = 'flex';
    setTimeout(() => overlayFiltroPrincipal.classList.add('active'), 10);
  });

  overlayFiltroPrincipal.addEventListener('click', (e) => {
    if (e.target === overlayFiltroPrincipal) fecharOverlayFiltroPrincipal();
  });

  function fecharOverlayFiltroPrincipal() {
    overlayFiltroPrincipal.classList.remove('active');
    setTimeout(() => overlayFiltroPrincipal.style.display = 'none', 300);
  }

  botoesFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
      const statusSelecionado = btn.dataset.status;
      caixasPeixes.forEach(caixa => {
        const statusContainer = caixa.querySelector('.status-container');
        if (statusSelecionado === 'tudo' ||
            (statusContainer && statusContainer.classList.contains(statusSelecionado))) {
          caixa.style.display = 'grid';
        } else {
          caixa.style.display = 'none';
        }
      });
      if (!btn.classList.contains('fechar-filtro')) fecharOverlayFiltroPrincipal();
    });
  });
});


// Seleciona todos os modais
const modais = {
  comprar: document.getElementById("comp_esto_modal-container"),
  produtos: document.getElementById("selecionarprodutos"),
  fornecedores: document.getElementById("selecionarfornecedor"),
  pesos: document.getElementById("selecionarpeso"),
  vender: document.getElementById("vend_esto_modal-container"),
  clientes: document.getElementById("selecionarcliente")

};


// Dados de exemplo
const peixes = [
  { id: "001", nome: "Tilápia", img: "../assets/tilapiaImg.png" },
  { id: "002", nome: "Pacu", img: "../assets/pacuImg.png" },
  { id: "003", nome: "Carpa", img: "../assets/carpaImg.png" },
  { id: "004", nome: "Robalo", img: "../assets/robaloImg.png" }
];

const fornecedores = [
  { id: "001", nome: "Maré Alta Pes.", img: "../assets/tilapiaImg.png" },
  { id: "002", nome: "Atlâtico Disc", img: "../assets/pacuImg.png" },
  { id: "003", nome: "Costa Norte Pes.", img: "../assets/carpaImg.png" },
  { id: "004", nome: "Rei do Camarão", img: "../assets/robaloImg.png" }
];

const pesos = [
  { id: "001", nome: "Toneladas" },
  { id: "002", nome: "Caixaria" }
];

const clientes = [
  { id: "001", nome: "Restaurante Sabor do Mar", img: "../assets/tilapiaImg.png" },
  { id: "002", nome: "Mercado Central", img: "../assets/pacuImg.png" }
];




// Função genérica para abrir modal
function abrirModal(modalAbrir) {
  modalAbrir.style.display = "flex";
}

// Função genérica para fechar modal
function fecharModal(modal) {
  modal.style.display = "none";
    
}


// popula container com itens conforme tipo (usar chaves: 'produtos','fornecedores','pesos')
function carregarItens(tipo) {
  let container;
  let lista;
  if (tipo === 'produtos') {
    container = document.querySelector('.selecionarNomes-lista-peixes');
    lista = peixes;
  } else if (tipo === 'fornecedores') {
    container = document.querySelector('.selecionar_lista_fornecedor');
    lista = fornecedores;
  } else if (tipo === 'pesos') {
    container = document.querySelector('.selecionar_lista_peso');
    lista = pesos;
  } else if (tipo === 'clientes') {
    container = document.querySelector('.selecionar_lista_cliente');
    lista = clientes;
  } else {
    console.warn('carregarItens: tipo desconhecido', tipo);
    return;
  }

  if (!container) {
    console.warn('carregarItens: container não encontrado para', tipo);
    return;
  }

  container.innerHTML = '';

  lista.forEach(item => {
    const div = document.createElement('div');

    if (tipo === 'produtos') {
      div.className = 'item-peixe itemmodal';
      div.dataset.nome = item.nome;
      div.innerHTML = `<span>#${item.id}</span><img src="${item.img}" alt="${item.nome}"><span>${item.nome}</span>`;
    } else if (tipo === 'fornecedores') {
      div.className = 'item-fornecedor itemmodal';
      div.dataset.nome = item.nome;
      div.innerHTML = `<span>#${item.id}</span><img src="${item.img}" alt="${item.nome}"><span>${item.nome}</span>`;
    } else if (tipo === 'clientes') {
      div.className = 'item-cliente itemmodal';
      div.dataset.nome = item.nome;
      div.innerHTML = `<span>#${item.id}</span><img src="${item.img}" alt="${item.nome}"><span>${item.nome}</span>`;
    } else { // pesos
      div.className = 'item-peso itemmodalpeso';
      div.dataset.nome = item.nome;
      div.innerHTML = `<span>${item.nome}</span>`;
    }

    div.addEventListener('click', () => {
      selecionarItem(tipo, div.dataset.nome);
    });

    container.appendChild(div);
  });
}

// ...existing code...

// wrappers chamados pelos onclick do HTML
function abrirModalProdutos() {
  // guarda o botão que abriu este modal (usamos document.activeElement)
  window.lastOpenerButton = document.activeElement;
  carregarItens('produtos');
  abrirModal(modais.produtos);
}
function abrirModalFornecedor() {
  window.lastOpenerButton = document.activeElement;
  carregarItens('fornecedores');
  abrirModal(modais.fornecedores);
}
function abrirModalPeso() {
  window.lastOpenerButton = document.activeElement;
  const bg = document.getElementById('selecionarpesobackgrond');
  if (bg) bg.style.display = 'flex';
  carregarItens('pesos');
  abrirModal(modais.pesos);
}
function abrirModalClientes() {
  window.lastOpenerButton = document.activeElement;
  carregarItens('clientes');
  abrirModal(modais.clientes);
}


// atualiza seleção: tenta usar o botão que abriu o modal; senão usa fallback
function selecionarItem(tipoModal, nomeSelecionado) {
  // se existir o botão que abriu o modal, atualiza ele diretamente
  const openerBtn = window.lastOpenerButton;
  if (openerBtn && openerBtn.classList && openerBtn.classList.contains('btnEscolher')) {
    openerBtn.textContent = `${nomeSelecionado} `;
  } else {
    // fallback: mapa por tipo (mantém compatibilidade)
    const botaoMap = {
      produtos: document.getElementById('btnEscolherNome'),
      fornecedores: document.getElementById('btnEscolherfornecedor'),
      pesos: document.getElementById('btnEscolherPeso'),
      clientes: document.getElementById('btnEscolherCliente')
    };
    const botao = botaoMap[tipoModal];
    if (botao) botao.textContent = `${nomeSelecionado} `;
  }

  // fecha o modal filho
  const modalParaFechar = modais[tipoModal];
  if (modalParaFechar) fecharModal(modalParaFechar);

  // limpa referência do opener
  window.lastOpenerButton = null;
}
function abrirAdicionarProduto() {
  document.getElementById("overlayAdicionarProduto").style.display = "flex";
}

function fecharAdicionarProduto() {
  document.getElementById("overlayAdicionarProduto").style.display = "none";
}

function salvarNovoProduto() {
  const nome = document.getElementById("novoProdutoNome").value;
  const img = document.getElementById("novoProdutoImg").value;
  const status = document.getElementById("novoProdutoStatus").value;
  const quantidade = document.getElementById("novoProdutoQuantidade").value;

  if (!nome || !quantidade) {
    alert("Preencha os campos obrigatórios!");
    return;
  }

  alert(`Produto "${nome}" adicionado com sucesso!`);
  fecharAdicionarProduto();
}
