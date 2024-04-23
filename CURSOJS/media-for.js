const notas = [10, 6.5, 8, 7.5];

//o símbolo da crase ``chama-se: template string

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`a media das notas é ${media}`);

