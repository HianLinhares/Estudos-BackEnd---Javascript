// FUNÇÃO ANONIMA -> Função sem nome, apenas realiza uma ação


const soma = (x, y) =>{
    return x + y
}

const imprimirResultado = (a, b, operacao=soma)=>{
    console.log(operacao(a,b))
}

imprimirResultado(3,4)

const pessoa = {
    falar: function(){
        console.log('opa')
    }
}

pessoa.falar()