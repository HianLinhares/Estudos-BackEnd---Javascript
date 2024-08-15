let array  = []

array.push(5)
array.push(6)
array.push(7)


array.push(3)
// adicionar no final do array

array.pop()
//remover o último item do array

array.shift()
//remove o primeiro item do array

array.unshift(1)
// adiciona na primeira posição do array

array.includes(10)
// verifica se existe dentro do array um item 10

array.reverse()
// reverte a ordem do array

console.log(array)



const nome = () => {
    return "meu nome é Hian"
}


const meuNome = (nome) => {
    return nome
}

console.log(meuNome(nome()));
