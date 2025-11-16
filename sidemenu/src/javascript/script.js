var sideitem = document.querySelectorAll(".side_item");

function selectlink(){
    sideitem.forEach((item)=>
        item.classList.remove('active')
    )
    this.classList.add('active')
}

sideitem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

function IrLogin(){
    window.location.href = "../Login/login.html";
}

function irCtrl() {
    window.location.href = "../ControleEstoque/controleEstoque.html"
}

function irPdd(){
    window.location.href = "../rastreamento/rastreamento.html"
}