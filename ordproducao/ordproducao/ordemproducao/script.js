/*PRINCIPAL*/

function abrirModalCompra() {
    document.getElementById("modalCompra").style.display = "flex";
}

function fecharModalCompra() {
    document.getElementById("modalCompra").style.display = "none";
}


/*PRODUTOS*/

function abrirModalNomes() {
    document.getElementById("modalProduto").style.display = "flex";
}

function fecharModalNomes() {
    document.getElementById("modalProduto").style.display = "none";
}

function selecionarProduto(nome) {
    document.getElementById("inputProduto").value = nome;
    fecharModalNomes();
}


/*CLIENTES*/

function abrirModalClientes() {
    document.getElementById("modalCliente").style.display = "flex";
}

function fecharModalClientes() {
    document.getElementById("modalCliente").style.display = "none";
}

function selecionarCliente(cliente) {
    document.getElementById("inputCliente").value = cliente;
    fecharModalClientes();
}


/*MODAL ETAPAS*/

function abrirModalEtapas() {
    document.getElementById("modalEtapa").style.display = "flex";
}

function fecharModalEtapa() {
    document.getElementById("modalEtapa").style.display = "none";
}

function selecionarEtapa(etapa) {
    document.getElementById("inputEtapa").value = etapa;
    fecharModalEtapa();
}

window.onclick = function(event) {

    const modalCompra = document.getElementById("modalCompra");
    if (event.target === modalCompra) {
        modalCompra.style.display = "none";
    }
};
