let obj = {
    name : "Julia",
    age: 20,

    rua:{
        adress:"sim",
        id: 1
    }
    
}

obj.rua = "sim"
obj.number = 100

console.log(Object.values(obj)) // retorna os valores de cada chave, mas sem as chaves
console.log(Object.keys(obj)) // retorna as chaves, mas sem os valores
console.log(obj)

console.log(obj.name)


const variosObjetos = [
    {
      id: 1,
      nome: "Hian",
    },
    {
      id: 2,
      nome: "pedro",
    },
    {
      id:3,
      nome: "Lucas"
    }
  ];