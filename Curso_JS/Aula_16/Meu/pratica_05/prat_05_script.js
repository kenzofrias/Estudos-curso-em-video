function ok(){
    var nome = document.querySelector('input#nome')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if(nome.value == 'Kenzo'){
        img.setAttribute('src', 'fotonoite.png')
    }else{
        img.setAttribute('src', 'adultohomem.png')
    }
    pp.innerHTML = 'Essa é a foto: </br>'
    pp.appendChild(img)
}