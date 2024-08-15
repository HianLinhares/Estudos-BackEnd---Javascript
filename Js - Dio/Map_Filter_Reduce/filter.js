const nomes = ['Hian Linhares', 'Hiuri Linhares', 'Fernanda', 'Alexandre']
const numeros = [1,2,3,4,5,6,7,8,9,10]


const mairoresDeCinco = numeros.filter((number)=> number>5)
console.log(mairoresDeCinco)

/////////////////


const contemLinhares = nomes.filter((nomes) => nomes.includes('i'))
console.log(contemLinhares)


const numerosMenoresQueTres = numeros.filter((numeros)=>{
    return numeros<3
})

console.log(numerosMenoresQueTres)