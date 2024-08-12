
array = [1,2,3,4,5,6,7,8,9,10]

function imprimeNumeros(vet){
    var numeros = []
    for (let index = 0; index < vet.length; index++) {
         numeros += vet[index] + " "
    }
    return numeros
}


console.log(array)
console.log(imprimeNumeros(array))


