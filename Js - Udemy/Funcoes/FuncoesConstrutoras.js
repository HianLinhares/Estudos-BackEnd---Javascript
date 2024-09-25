// Classes no formato de uma função 

function Carro (velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0;

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeAtual){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

}


const uno = new Carro
uno.acelerar()
console.log(uno.acelerar)