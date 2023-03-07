const notas = [10,6, 8, 6.4, 10];

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

notas.pop();

console.log(`a media é ${media}`)

