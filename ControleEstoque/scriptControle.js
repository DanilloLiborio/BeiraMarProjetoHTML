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
