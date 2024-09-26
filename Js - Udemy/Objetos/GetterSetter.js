const sequencia = {
    _valor: 1, //convenção de que essa váriavel esta sendo utilizada apenas nesse objeto (privada)
    
    getValor(){
        return this._valor
    },
    
    setValor(valor){
        if(valor > 0){
            this._valor = valor
            return this._valor
        }else{
            return 'Número inválido'
        }
    }
}


console.log(sequencia.getValor())
console.log(sequencia.setValor(-10))
console.log(sequencia.getValor())