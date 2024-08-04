const numbers = [1,2,3,4,5];

const sumnumbers = numbers.reduce(function(numbers, accumulator){
    return accumulator + numbers;
} , 12)

console.log(sumnumbers);

const nomes = [
    { nome: "hian" , idade: 2 },
    { nome: "lucas" , idade: 2 },
    { nome: "Katia" , idade: 2 },
]

const concatenacao = nomes.reduce((preval, elem) => preval + elem.idade, 0)
console.log(concatenacao)

// basicamente o reduce, reduz vários elementos em um único elemento de (SOMATÓRIO/CONCATENAÇÃO)