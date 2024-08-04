class Person{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    sayHelloWorld() {
        console.log("Hello World")
    }

}

const hian = new Person("Hian", "Linhares", 23)
console.log(hian)
hian.sayHelloWorld()

