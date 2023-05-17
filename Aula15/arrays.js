let num = [9,8,1,5,3]

console.log("nosso vetor é:"+num)

/*Adicionando uma variável em um lugar especifico: */
num[5]=4

/*Busscar indice*/
console.log("O número 3 está na posição:"+num.indexOf(3))

/*Adicionando a variável na última posição (acrescenta ao fim) */
num.push(7)

/*"Tamanho" Quantidade de itens dentro do array*/
console.log("quantidade de ítens na lista"+num.length)

/*exibindo ítem a item com for*/
for(var i=0; i<num.length; i++){
    console.log("A varível de chave: "+i+" <==> "+num[i])
}

console.log("Organizando a Lista")
/*organiza a lista*/
var organizada =  num.sort()

for(i in organizada){
    console.log("A varível de chave: "+i+" <==> "+organizada[i])
}

/*Busscar indice*/
console.log("O número 3 está na posição:"+num.indexOf(3))