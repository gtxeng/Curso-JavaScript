
let listaDeProduto = []


function adicionarLista(){
    var produto = window.document.getElementById("bola").value
    var msg = window.document.getElementById("msg")
    
    listaDeProduto.push(produto.value)
    msg.innerHTML = listaDeProduto
}