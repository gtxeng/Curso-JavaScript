function contar(){
    let inicio = document.getElementById("initxt")
    let fim = document.getElementById("fimtxt")
    let passo = document.getElementById("pastxt")
    let resp = document.getElementById("resp")
       
    if(inicio.value.length == 0 || fim.value.length == 0|| passo.value.length==0){
        window.alert("Erro de preenchimento")
    }else{
        resp.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0 || p>f-i){
            p=1
        } 
        if(i < f){
            for(let c = i; c<=f; c += p){
                resp.innerHTML += `${c} \u{1f449}`
            }
            resp.innerHTML += `\u{1f3c1}`    
        }else{
            for(let c = i; c>=f; c -= p){
                resp.innerHTML += `${c} \u{1f449}`
            }
            resp.innerHTML += ` \u{26f3}`
        }
        
    }
}