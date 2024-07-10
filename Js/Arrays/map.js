const numbers = [1,2,3,4,5];
const numbersmultipliedbytwo = numbers.map(function(number){
    return number * 2;
})
console.log(numbersmultipliedbytwo);


const pessoas = [
    { nome: 'João', sobrenome: 'Silva' },
    { nome: 'Maria', sobrenome: 'Souza' },
    { nome: 'Carlos', sobrenome: 'Ferreira' }
    ];
    console.log(pessoas)
    const nomesFormatados = pessoas.map(pessoa => `${pessoa.nome} ${pessoa.sobrenome}`);
    console.log(nomesFormatados);





/* O método map basicamente percorre cada um dos elementos do array e permite aplicar uma lógica
que pode ser por meio de uma função em cada um dos elementos e guarda-lo em outra variável */