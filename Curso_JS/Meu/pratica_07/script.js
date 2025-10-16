function gerador(){
    let num = document.getElementById('txtn')
    let ope = document.getElementById('txto')
    let item = document.createElement('option')

    txtt.innerHTML = ''
    if (num.value.length == 0 || ope.value.length == 0){
        alert('[ERRO] Estão faltando dados.')
        txtt.appendChild(item)
        item.innerHTML = 'Impossível realizar as operações.'

    }else{
        let n = Number(num.value)
        let o = String(ope.value)

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.value = `txtt${c}`
            txtt.appendChild(item)
            if(o == '+'){
                item.text += `${n} + ${c} = ${n+c}`

            }else if(o == '-'){
                item.text += `${n} - ${c} = ${n-c}`
        
            }else if(o == 'x'){
                item.text += `${n} x ${c} = ${n*c}`
               
            }else{
                item.text += `${n} / ${c} = ${n/c}`
                
            }
        }
    }
}