var agora = new Date()
var horas = agora.getHours()

console.log("Agora são exatamente "+horas+" horas")

if(horas>=0 && horas<5){
    console.log("Vá dormir doido, é madrugada")
}else if(horas<12){
    console.log("Bom dia!")
}else if(horas<20){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}

