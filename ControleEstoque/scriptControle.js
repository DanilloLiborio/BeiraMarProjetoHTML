document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlayFiltro');
    if (!overlay) return;

    const statusButtons = document.querySelectorAll('.Class_Status');
    // Variável para armazenar o botão de status do produto que abriu o overlay
    let currentStatusButton = null; 

    // Seleciona os botões dentro do overlay
    const filterButtons = overlay.querySelectorAll('.btn-producao, .btn-estoque, .btn-venda');

    // Função para fechar o overlay (mantida da última interação)
    const closeOverlay = () => {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    };

    // 1. Lógica para ABRIR o Overlay e salvar a referência do botão
    statusButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Salva a referência do botão de status que foi clicado
            currentStatusButton = button; 
            
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
        });
    });

    // 2. Lógica para MUDAR o Status ao clicar nos botões de filtro (DENTRO do overlay)
    filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', () => {
            if (currentStatusButton) {
                // Pega o novo status (texto do botão clicado no overlay)
                const newStatus = filterButton.innerText.trim();
                
                // Encontra o <span> dentro do botão de status do produto
                const statusSpan = currentStatusButton.querySelector('span');
                
                // Encontra o container pai (para mudar a cor)
                const statusContainer = currentStatusButton.closest('.status-container');

                if (statusSpan) {
                    // Atualiza o texto do status do produto
                    statusSpan.innerText = newStatus;
                }
                
                // Remove as classes de cor antigas e adiciona a nova (Producao/Estoque/Venda)
                if (statusContainer) {
                    // Remove todas as classes de status de cor existentes
                    statusContainer.classList.remove('producao', 'estoque', 'venda');

                    // Adiciona a nova classe de cor (converte "Estoque" para "estoque", etc.)
                    const newStatusClass = newStatus.toLowerCase();
                    statusContainer.classList.add(newStatusClass);
                }
            }
            
            // Fecha o overlay após a mudança de status
            closeOverlay(); 
        });
    });


    // 3. Lógica para FECHAR o Overlay (fechar no fundo/esc)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });
    
    // (O botão .btn-fechar foi removido do HTML, mas a lógica de clique fora fecha)
});