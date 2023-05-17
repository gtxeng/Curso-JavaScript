function FatorialRecursiva(n){
    if(n==1){
        return 1
    }else{
        return n * FatorialRecursiva(n-1)
    }
}

console.log(FatorialRecursiva(4))




/*
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
4! = 4 * 3!
3! = 3 * 2!
2! = 2 * 1!
1! = 1
Ou seja... 

n! = n * (n-1)!
*/