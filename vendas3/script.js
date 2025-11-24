document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.side_item').forEach(item => {
        item.setAttribute('alt', 'inactive');
      });
      
      this.parentElement.setAttribute('alt', 'active');

      tabContents.forEach(content => {
        content.classList.remove('show');
      });
      
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        if (targetId.startsWith('/')) {
          window.location.href = targetId;
        } else {
          const targetContent = document.querySelector(targetId);
          if (targetContent) {
            targetContent.classList.add('show');
          }
        }
      }
    });
  });

  const btnAbrir = document.getElementById('btnAbrirModal');
  const btnCancelar = document.getElementById('btnModalCancelar');
  const btnEnviar = document.getElementById('btnModalEnviar');
  const modal = document.getElementById('modalJanela');
  const overlay = document.getElementById('modalOverlay');

  function abrirModal() {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function fecharModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  if (btnAbrir) {
    btnAbrir.addEventListener('click', abrirModal);
  }
  
  if (btnCancelar) {
    btnCancelar.addEventListener('click', fecharModal);
  }
  
  if (overlay) {
    overlay.addEventListener('click', fecharModal);
  }

  if (btnEnviar) {
    btnEnviar.addEventListener('click', function() {
      console.log('Pedido enviado para: GBarbosa');
      alert('Pedido enviado com sucesso!');
      fecharModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      fecharModal();
    }
  });

  const quadrado = document.querySelector('.quadrado');

  if (quadrado) {
    quadrado.addEventListener('click', function(e) {
      if (e.target.closest('.img-button')) {
        return;
      }
      
      const cardExpandidoExistente = document.querySelector('.quadrado-expandido');
      
      if (cardExpandidoExistente) {
        cardExpandidoExistente.remove();
        quadrado.style.display = 'flex';
      } else {
        criarCardExpandido();
      }
    });
  }

  function criarCardExpandido() {
    const cardExistente = document.querySelector('.quadrado-expandido');
    if (cardExistente) {
      cardExistente.remove();
    }
    const cardExpandido = document.createElement('div');
    cardExpandido.className = 'quadrado-expandido';
    cardExpandido.innerHTML = `
      <div class="expandido-header">
        <div class="header-left">
          <img src="img/Ellipse 16.png" class="empresa-logo-expandido" alt="GBarbosa">
          <div class="empresa-info-expandido">
            <h2 class="empresa-nome-expandido">Gbarbosa</h2>
            <p class="empresa-total-expandido">Total: 1.5 Toneladas</p>
            <p class="empresa-subtitle">Cliente desde 2020</p>
          </div>
        </div>
        
        <div class="header-right">
          <p class="data-proxima">Data prevista: 12/11/2025</p>
          <button class="btn-fechar-expandido">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="expandido-content">
        <div class="pedido-section">
          <div class="pedido-header">
            <span class="pedido-titulo">Tilápia</span>
            <span class="pedido-quantidade">1,0t</span>
          </div>
          <div class="pedido-header">
            <span class="pedido-titulo">Pescada Amarela</span>
            <span class="pedido-quantidade">0,5t</span>
          </div>
        </div>

        <div class="separador"></div>

        <div class="outro-pedido-section">
          <h3 class="outro-pedido-titulo">Próximo Pedido</h3>
          <p class="outro-pedido-data">Data prevista: 12/11/2025</p>
          <p class="outro-pedido-total">Total estimado: 2.0 Toneladas</p>
        </div>
      </div>

      <div class="expandido-actions">
        <button class="btn-enviar-expandido" id="btnAbrirModalExpandido">
          <img src="img/btn enviar.png" alt="Enviar Pedido">
        </button>
      </div>
    `;

    quadrado.parentNode.insertBefore(cardExpandido, quadrado.nextSibling);
    
    quadrado.style.display = 'none';

    configurarCardExpandido(cardExpandido);
  }

  function configurarCardExpandido(cardExpandido) {
    const btnFechar = cardExpandido.querySelector('.btn-fechar-expandido');
    const btnEnviarExpandido = cardExpandido.querySelector('#btnAbrirModalExpandido');

    function fecharCardExpandido() {
      cardExpandido.remove();
      quadrado.style.display = 'flex';
    }

    if (btnFechar) {
      btnFechar.addEventListener('click', function(e) {
        e.stopPropagation();
        fecharCardExpandido();
      });
    }

    if (btnEnviarExpandido) {
      btnEnviarExpandido.addEventListener('click', function(e) {
        e.stopPropagation();
        fecharCardExpandido();
        abrirModal();
      });
    }

    document.addEventListener('keydown', function fecharComESC(e) {
      if (e.key === 'Escape' && cardExpandido.isConnected) {
        fecharCardExpandido();
        document.removeEventListener('keydown', fecharComESC);
      }
    });
  }

  const logoutBtn = document.getElementById('logout_btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      if (confirm('Deseja realmente sair?')) {
        window.location.href = 'login.html';
      }
    });
  }

  console.log('Sistema Beira Mar Pescados inicializado!');
});
