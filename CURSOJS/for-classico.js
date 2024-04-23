const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//for serve para fazer laços de repetição, para fazer a mesma tarefa várias vezes.
//no exemplo tem vários elementos 

//primeira expressão: executada apenas uma vez
//segunda expressão: condição de execução
//terceira expressão: executada sempre ao final do bloco

for (let indice = 0; indice < notas.length; indice++) {
   console.log(indice, notas[indice]); 
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for