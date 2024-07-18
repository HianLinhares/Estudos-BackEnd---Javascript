class Dad {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    sayHelloWorld() {
        console.log("Hello World")
    }

}

class Son extends Dad {

    saybye() {
        console.log("Bye")
    }
}

const pedro = new Dad("Pedro", "Lima", 56)
const lucas = new Son("Lucas")
lucas.sayHelloWorld()
lucas.saybye()

