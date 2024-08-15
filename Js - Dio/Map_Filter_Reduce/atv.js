const numeros = [1,2,3,4,5,6,7,8,9,10]
const dois = [1,2]

// MAP
const vezesDois = numeros.map((item)=> item*2)
const vezesQuatro = vezesDois.map((item) => {
    return item*2
})

console.log(vezesDois)
console.log(vezesQuatro)

//FILTER
const numerosPares = numeros.filter((item)=> {
    return item % 2 === 0
})

console.log(numerosPares)


//REDUCE

const somaTudo = dois.reduce((previus, current) => {
    return previus + current
})

console.log(somaTudo)