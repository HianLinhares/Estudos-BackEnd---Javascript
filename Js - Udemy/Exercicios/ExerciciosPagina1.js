//1
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}



const ola = (nome) => {
    return `Olá ${nome}!`
}




//2
function retornaOsDias(idade) {
    return idade * 365
}



//3
const horasDeTrabalho = (qtdHora, valorHora) => {
    return `Sálario igual a R$ ${qtdHora * valorHora}`
}



//4
const nomeDoMes = (numeros) => {
    switch (numeros) {
        case 1:
            return 'Janeiro'
            break;
        case 2:
            return 'Fevereiro'
            break
        case 3:
            return 'Março'
            break
    }
}




//5
function comparativoDeDoisNumeros(a, b) {
    if (a >= b) {
        return true
    } else {
        return false
    }
}



//6

function inverso(a) {
    if (typeof a === 'boolean') {
        return !a
    }
    else if (typeof a === 'number') {
        return a * -1
    }
}

console.log(inverso(2000))