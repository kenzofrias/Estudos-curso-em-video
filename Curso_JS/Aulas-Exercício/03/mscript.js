function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#saida')

    if(fano.value.length == 0 || Number(fano.value > ano)){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 14){
                //crianca
                img.setAttribute('src', 'bebemenino.png')
            }else if (idade >= 14 && idade < 20){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else if(idade >= 20 && idade < 50){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 14){
                //crianca
                img.setAttribute('src', 'bebemenina.png')
            }else if (idade >= 14 && idade < 20){
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade >= 20 && idade < 50){
                //adulto
                img.setAttribute('src', 'adultomulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        saida.style.textAlign = 'center'
        saida.innerHTML = `Detectamos ${genero} com ${idade} de idade`
        saida.appendChild(img)
    }
}