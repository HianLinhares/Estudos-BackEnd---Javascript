function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

//Onbejto chamando uma função
console.log(getPreco())
console.log(produto.getPreco())

//função sendo aplicada sobre um objeto, call e apply puro
const carro = {preco: 4000, desc: 0.1}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))



// função sendo aplicada sobre um objeto, call e apply mais descritivos
console.log(getPreco.call(carro, 0.15, 'R$'))
console.log(getPreco.apply(carro, [0.15, '$']))

