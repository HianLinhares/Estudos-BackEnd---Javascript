//usando notação literal
const obj1 = {

}

//Object em JS a partir de uma função
const obj2 = new Object

//Funções construtoras
function Produto (nome, preco, desc){
    this.nome = nome
    this.getdesconto = () =>{
        return preco - desc
    }
}
const p1 = new Produto('camisa', 29.50, 15)
const p2 = new Produto('Bermuda', 100, 20)


// Funções Factory
function criarFuncionario(nome, idade){
    return{
        nome,
        idade,
        getConcatenacao(){
            return `${nome} tem ${idade} anos`
        }
    }
}

const f1 = new criarFuncionario('Hian', '23')
console.log(f1.getConcatenacao())


// Object.create

const filha = Object.create(null)
filha.nome = 'Gabriela'
console.log(filha)


// Objeto constante
const pai = Object.freeze({nome: 'Lucas'})
console.log(pai)


