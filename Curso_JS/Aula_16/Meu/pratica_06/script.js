function contar(){
    let ini = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let passo = document.getElementById('num3')
    let res = document.getElementById('saida')

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível realizar a contagem.'
    }else{
        res.innerHTML = '<p>Contando...</p>'
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '🏳️'
    }
}