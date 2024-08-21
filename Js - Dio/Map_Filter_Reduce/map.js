//MAP: Não vai modificar o array original, vai criar um novo array

const nomes = ['Hian', 'Hiuri', 'Fernanda', 'Alexandre']
const numeros = [1,2,3,4,5,6,7,8,9,10]

// FAZ A MESMA COISA
const teste = numeros.map((item) => item - 10)


// FAZ A MESMA COISA
const testeDois = (array) => {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        novoArray.push(array[i] - 10) 
    }
    return novoArray
}

console.log(testeDois(numeros))
console.log(teste)


