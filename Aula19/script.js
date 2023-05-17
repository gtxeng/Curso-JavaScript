function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasceu = window.document.getElementById("txtano")
    var resposta = window.document.getElementById("res") //document.querySelector('div#res')
    
    if(nasceu.value.length == 0 || nasceu.value > ano){
        window.alert("[ERR0]Confira se o Ano de Nascimento está preenchido corretamente")
    }else{
        var idade = Number(ano)-Number(nasceu.value)
        
        var sexo = window.document.getElementsByName("radsex")
        var genero = ''

        var imagem = document.createElement('img') //cria um novo elemento('img') no html
        imagem.setAttribute('id' , 'foto') //torna o <img> criado na linha acima, em <img id=fotos>

        if(sexo[0].checked){
            genero = "Masculino"
            if(idade < 5){
                imagem.setAttribute("src", "fotobabyboy.png")
            }else if(idade < 15){
                imagem.setAttribute("src","fotokidboy.png")
            }else if(idade < 40){
                imagem.setAttribute("src","fotoyoungboy.png")
            }else if(idade < 70){
                imagem.setAttribute("src","fotoman.png")
            }else {
                imagem.setAttribute("src","fotooldman.png")
            }
        }else if(sexo[1].checked){
            genero = "Feminino"
            if(idade < 5){
                imagem.setAttribute("src", "fotobabygirl.png")
            }else if(idade < 15){
                imagem.setAttribute("src","fotokidgirl.png")
            }else if(idade < 40){
                imagem.setAttribute("src","fotoyounggirl.png")
            }else if(idade < 70){
                imagem.setAttribute("src","fotowoman.png")
            }else {
                imagem.setAttribute("src", "fotooldwoman.png")
            }
        }else{
            window.alert("Genero inexistente")
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resposta.appendChild(imagem)//Posiciona a Imagem escolhida, após o último elemento da <div id="res">
    
    }
          
}