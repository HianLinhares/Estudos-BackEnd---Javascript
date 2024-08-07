// Palindromo - palavras que podem ser lidas de traz pra frente e possuem a mesma ordem de caracteres

// string.split - separa todos os caracteres de uma palavra, convertendo em um array (EXCLUSIVO PARA STRING)
// string.reverse - inverte a ordem do array
// string.join - junta todos os elementos do array


// var array = "opabom"
// var resultado = array.split("")
// console.log(resultado)


// function verificaPalindromo(string){
//     if(!string) return "string inexistente";

//    return string.split("").reverse().join("") === string
        
// }

// console.log(verificaPalindromo(""))


var array = [1,3,4,6,80,33,23,90]
function separadorDeArrays(array){
    if(!array.length){ // se o array não tiver tamanho
        return -1
    }else{
        for (let i = 0; i < array.length; i++) {
            if(array[i]%2===0 && array[i]!=0){
                array[i] = 0;
            }
        }
        return array
    }
}
console.log(typeof array)
console.log(separadorDeArrays(array))