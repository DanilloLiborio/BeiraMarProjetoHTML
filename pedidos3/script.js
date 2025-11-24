// ====== Array de pedidos ======
const pedidos = [
  {id:'#290307', fornecedor:'Maré alta Pesc.', produto:'Tilápia', qtd:'1.5t', data:'11/08/2025', status:'pendente'},
  {id:'#190718', fornecedor:'Atlântico Dist.', produto:'Pacu', qtd:'0.5t', data:'03/08/2025', status:'concluido'},
  {id:'#250507', fornecedor:'Costa Norte Pesc.', produto:'Carpa', qtd:'2.0t', data:'29/07/2025', status:'cancelado'},
  {id:'#198719', fornecedor:'Fornecedor X', produto:'Produto Y', qtd:'1.0t', data:'15/07/2025', status:'pendente'}
];

// ====== Carregar pedidos na tabela ======
function carregarPedidos() {
  const tbody = document.querySelector("#tabela-pedidos tbody");
  tbody.innerHTML = "";
  pedidos.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.fornecedor}</td>
      <td>${p.produto}</td>
      <td>${p.qtd}</td>
      <td>${p.data}</td>
      <td><span class="status ${p.status}">${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// ====== Filtrar pedidos ======
function filtrarPedidos() {
  const filtro = document.getElementById("pesquisar").value.toLowerCase();
  const tbody = document.querySelector("#tabela-pedidos tbody");
  tbody.innerHTML = "";
  pedidos.filter(p => 
    p.id.toLowerCase().includes(filtro) || 
    p.fornecedor.toLowerCase().includes(filtro) ||
    p.produto.toLowerCase().includes(filtro)
  ).forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.fornecedor}</td>
      <td>${p.produto}</td>
      <td>${p.qtd}</td>
      <td>${p.data}</td>
      <td><span class="status ${p.status}">${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function irRastreamento() {
  window.location.href = "../rastreamento/rastreamento.html";
}


// ====== Overlay Modal ======
function abrirOverlay() {
  document.getElementById('overlayPedido').style.display = 'flex';
}

function fecharOverlay() {
  document.getElementById('overlayPedido').style.display = 'none';
}

// ====== Submissão do formulário ======
document.getElementById('formPedido').addEventListener('submit', function(e) {
  e.preventDefault();

  const cliente = document.getElementById('cliente').value;
  const produto = document.getElementById('produto').value;
  const quantidade = document.getElementById('quantidade').value;

  console.log(`Pedido: Cliente=${cliente}, Produto=${produto}, Quantidade=${quantidade}`);

  fecharOverlay();
  this.reset();
});

