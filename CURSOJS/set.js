const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes);

// const listaNomesAtualizados = [...nomesAtualizados];

// console.log(nomesAtualizados);

const listaNomesAtualizados = [...new Set(nomes)];
console.log(listaNomesAtualizados);

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

// lista exercícios: https://github.com/alura-cursos/3530-js-arrays/tree/exercicios-aula5