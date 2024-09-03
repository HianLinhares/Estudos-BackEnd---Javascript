// Alguns paradigmas da programação


// Imperativo -> Como você vai resolver os problemas
// Declarativo -> O que você vai fazer para resolver os problemas



// Abstração -> Processo mental que consiste em isolar os estados de coisas relativamente complexos
// Herança -> Objetos filhos herdam propriedades e métodos das classes pai
// Encapsulamento -> Cada classe e método tem propriedades independentes do restante do código 
// Polimorfismo -> Objetos podem herdar mas podem se comportar de formas diferentes 


class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = saldo
    }


    get saldo(){
        return this.saldo;
    }


    set saldo(valor){
        this.saldo = valor
    }


    sacar(valor){
        if(valor>this.saldo){
           return 'Operação negada'
        }
        this.saldo = this.saldo - valor
        return this.saldo
    }


    depositar(valor){
        this.saldo = this.saldo + valor
        return this.saldo
    }

}


class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'corrente'
        this.cartaoCredito = this.cartaoCredito
    }

    get cartaoCredito(){
        return this.cartaoCredito
    }

    set cartaoCredito(valor){
        this.cartaoCredito = valor
        return this.cartaoCredito
    }

}


class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Poupanca'
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Universitaria'
    }

    sacar(valor){
        if(valor>500){
            return 'operação negada'
        }
        this.saldo = this.saldo - valor
        return this.valor
    }
    

}


const minhaConta = new ContaBancaria(1,1,'Corrente, 1000')

minhaConta.depositar(1000)

console.log(minhaConta)
