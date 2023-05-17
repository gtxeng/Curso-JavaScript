/*
<select name="select">
    <option value="valor1">Valor 1</option>
    <option value="valor2" selected>Valor 2</option>
     <option value="valor3">Valor 3</option>
</select>
*/
function gerarTabuada(){
    var num = window.document.getElementById("numtxt")
    var resultados = window.document.getElementById("resultados")
    
    resultados.innerHTML = ''
    if(num.value.length == 0){
        window.alert("preciso de um número")
    }else{
        let n = Number(num.value)
        for(var i=1;i<=10;i++){
            let item = document.createElement('option')
            item.text =`${n} x ${i} = ${i*n}`
            resultados.appendChild(item)
        }
        
    }
    
    
}