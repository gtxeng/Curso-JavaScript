var agora=new Date()
var estado = 0
var tempoRestante = 0
var duração = 0
   
while(estado<3){
    if(estado == 0){
        duração = agora.getSeconds() + 30
        while(duração>agora.getSeconds()){
            tempoRestante =duração - agora.getSeconds()
            console.log(`O sinal está Vermelho ${tempoRestante} segundos`)
        }
        estado=1
       
    }else if(estado == 1){
        duração = agora.getSeconds() + 5
        while(duração>agora.getSeconds()){
            tempoRestante=duração-agora.getSeconds()
            console.log(`O sinal está Amarelo ${tempoRestante} segundos`)
        }
        estado=2
         
    }else if(estado == 2){
        duração = agora.getSeconds() + 30
        while(duração>agora.getSeconds()){
            tempoRestante=duração-agora.getSeconds()
            console.log(`O sinal está Verde ${tempoRestante} segundos`)
        }
        estado=0
         
    }else{
        console.log("Algo errado ocorreu")
        estado = 4
    }
    
 }
   

