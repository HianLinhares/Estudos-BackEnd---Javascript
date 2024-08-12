const pessoa = {
    Id: 1,
    nome: "Hian",
    age: 23
}

const animal = {
    Id: 2,
    nome: "lua",
    age: 3
}

var imprimeNome = (obj) =>{
    return obj.nome
}


console.log(imprimeNome(pessoa))