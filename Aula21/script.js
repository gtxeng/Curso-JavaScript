var lista = []
function adicionar(){
    let result=window.document.getElementById("resultados")
    let num = window.document.getElementById("numtxt")
    let n = Number(num.value)
    if(n>=1 && n<=100 && lista.indexOf(n)== -1){
        lista.push(n)
        let item = document.createElement('option')
        item.text= `Valor ${n} adicionado`
        result.appendChild(item)
    }else {
        window.alert("Número invalido ou existente na lista")
    }
    num.value='' //depois de adicionar o numero ele zera o box
    num.focus()  //mantem o cursor em "num" para poder digitar varios n.
    resp.innerHTML='' //zera a resposta se valor for adicionado
}
function finalizar(){
    let organizada = []
    organizada = lista.sort()
    let quant = lista.length
    if(quant>0){
        resp.innerHTML = `Ao todo, temos ${quant} números cadastrados. <br> `
        resp.innerHTML += ` <br> O maior valor informado foi ${organizada[quant-1]}. <br>`
        resp.innerHTML += ` <br>O menor valor informado foi ${organizada[0]}. <br>`
        let soma = 0
        for(let i=0; i<quant; i++){
            soma=soma+lista[i]
        }
        resp.innerHTML += ` <br>Somando todos os valores temos ${soma}. <br>`
        resp.innerHTML += ` <br>A média dos valores digitados é ${soma/quant}.<br> <br>`
    }else{
        window.alert("Nenhum número na lista")
    }
    
}
