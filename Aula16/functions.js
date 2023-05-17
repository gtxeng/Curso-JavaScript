function Parimpar(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

function Fatorial(n){
let fat=1
    for(let i = n; i>1; i--){
        fat=fat*i
    }
    return fat
}

console.log(Parimpar(10))
console.log(Fatorial(5))