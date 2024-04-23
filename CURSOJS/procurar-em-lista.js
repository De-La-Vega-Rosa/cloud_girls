const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//              [1] array dentro de array [2] = [[1], [2]]
const lista = [alunos, medias];

//lista na posição[0] que estão os alunos
//lista na posição[1] que está a média dos alunos
//indexOf retorna a primeira ocorrencia que encontrar na lista de alunos, procura a informação e entrega.
//includes pode entregar true ou false. 
//na const mediaAluno para acessar o dado que está dentro num array dentro de um array
//indice é uma variável.
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Juliana');
exibeNomeENota('Vini');