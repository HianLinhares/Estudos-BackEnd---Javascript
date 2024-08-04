const names = ["Zeca","Pedro","Julia","Hian","Ricardo"];

const joao = names [1];
names.push("Lucas"); // adiciona um item no final do array
names.unshift("Laura"); //adiciona um item no inicio do array 
names.pop(); // Remove o ultimo item do array 
names[2] = "Thiago"; // Substitui o valor da posição do vetor
console.log(names);

const sortnames = names.sort(); 
console.log(sortnames); // ordena os nomes em ordem alfabética
console.log(names.length) // informa a quantidade de itens que existem no array