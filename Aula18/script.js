function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = "fotomanha.png"
        msg.innerHTML = `Bom dia, agora sáo ${hora} horas.`
        document.body.style.background = '#e2cd9f'
    }else if(hora>=12 && hora < 18){
         //Boa Tarde!
         img.src = "fototarde.png"
         msg.innerHTML = `Boa tarde, agora sáo ${hora} horas.`
         document.body.style.background = '#b9846f'
    } else {
         //Boa Noite!
         img.src = "fotonoite.png"
         msg.innerHTML = `Boa noite, agora sáo ${hora} horas.`
         document.body.style.background = '#515154'
    }

    var num = 1
    var b = 2

    somar(num, b);

    function somar( a, b){
       return a+b
    }
}
