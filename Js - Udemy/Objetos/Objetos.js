// Pricipios da orientação Objeto

// 1 - Abstração
// 2 - Encapsulamento
// 3 - Herança
// 4 - Polimorfismo


const produto = new Object
produto.nome = 'Camisa'
produto.preco = 100

const produto2 = new Object
produto2.nome = 'calça'
produto2.preco = 300


function buscaDeItensCaros(item){
    if(item.preco > 150){
        return 'acima do preço permitido'
    }else{
        return 'a baixo do preço permitido'
    }
}

console.log(buscaDeItensCaros(produto))


const carro = {
    modelo: 'A4',
    marca: 'Audi',
    preco: 'R$ 2000,00',
    proprietario: {
        primeiro: 'hian',
        idade: 23
    },
    multas: [{
        multasDeVelocidade: 1,
        
    },
    {
        multasDeDocumentacao: 0
    }]
}

carro.proprietario.cpf = '022.131.136-02'
console.log(carro.proprietario.cpf)
console.log(carro)