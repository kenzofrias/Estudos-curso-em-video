let num = [5, 8, 9, 2, 3]
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`)
console.log(`Os valores em ordem são ${num.sort()}`)
num.push(7)
console.log(`Todos os valores com o acrescentado são: ${num}`)

//variavel.sort() para ordenar
//variavel.length para a quantidade de elementos dentro da variavel
//variavel.push() para acrescentar elemento sem saber a posição
//variavel(posição) = novo elemento para substituir sabendo a posição 
//variavel.indexOf(elemento) para encontrar a posição
//OBS.: a ordem de tudo importa

let pos = num.indexOf(3)
console.log(`O valor 3 está na posição ${pos}`)