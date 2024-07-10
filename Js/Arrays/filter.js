const numbers = [1,2,3,4,5];

const numberspar = numbers.filter(function(number){
    return number % 2 === 0;
})

console.log (numberspar)

// basicamente a função filter realiza um filtro dentro de um vetor 