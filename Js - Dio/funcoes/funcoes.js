function soma(a, b) {
    return a + b;
}

console.log(soma(1, 2));

/////////


function verificarNumerosPares(vetor) {
    const numerosPares = [];
  
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] % 2 === 0) {
        numerosPares.push(vetor[i]);
      }
    }
  
    return numerosPares;
  }
  
  const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pares = verificarNumerosPares(vetor);
  
  console.log('Números pares no vetor:', pares);
  