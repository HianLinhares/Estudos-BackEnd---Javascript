var currentNumberWrapper = document.getElementById('currentNumber'); //pega o id da variavel
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; //pega o elemento html da variavel
    
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}