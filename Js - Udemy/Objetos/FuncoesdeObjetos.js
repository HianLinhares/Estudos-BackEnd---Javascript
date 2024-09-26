const pessoa = {
    nome: 'rebecca',
    idade: 2,
    peso: 10
}

console.log(Object.keys(pessoa)) //[ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) //[ 'rebecca', 2, 10 ]
console.log(Object.entries(pessoa)) //[ [ 'nome', 'rebecca' ], [ 'idade', 2 ], [ 'peso', 10 ] ]

//Definir uma propriedade especifica
Object.defineProperty(pessoa, 'dataDeNascimento',{
    enumerable: true, // fazer com que a propriedade apareça
    writable: false, // congelar a propriedade
    value: '01/09/1999'
})

