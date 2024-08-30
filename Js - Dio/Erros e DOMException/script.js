

// new Error(message, fileName, LineNumber)

// const MeuErro = new Error('mensagem inválida');

// throw MeuErro;



// O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao seu tamanho 




const validacaoArray = (array, num) => {

    try {
        if (!array && !num) 
            throw new ReferenceError("Envie os parâmetros")
        
        if (typeof array !== 'object') 
            throw new TypeError('O array precisa ser do tipo object ')
        
        if (typeof array !== 'number') 
            throw new TypeError('O array precisa ser do tipo number')
        
        if (array.lenght !== num) 
            throw new RangeError('O tamanho é errado')
        

        return array
    }
    catch (e) {
        if (e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        } else {
            console.log('Outro tipo de erro!');
            console.log(e.stack);
        }
    }
    finally{
        console.log('o my god')
    }

}


console.log(validacaoArray([1, 2, 3], 0));

