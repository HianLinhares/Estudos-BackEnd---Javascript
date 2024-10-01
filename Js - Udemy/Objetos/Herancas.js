class Carro{
    constructor(nome, marca, preco){
        this.nome = nome
        this.marca = marca
        this.preco = preco
    }

    getnome(){
        return this.nome
    }

    setnome(nome){
        this.nome = nome
        return this.nome
    }

}


class Moto{
    getTabelaFip(){
        return `O valor da tabela fip é ${this.preco}`
    }
}

const civic = new Carro('Civic', 'Honda', 45.000)
console.log(civic.getnome())
const cb500 = new Moto()
cb500.preco = 4000;
console.log(cb500.getTabelaFip())