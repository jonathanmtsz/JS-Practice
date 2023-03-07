//const numeros = [10, 20, 30, 40];

//for (let indice = 0; indice < numeros.length; indice = indice + 1) {
//oque esta aqui sera repetido   
  //  console.log(numeros[indice]);
//}

let somaDasNotas = 0;
const notas = [10, 6.5, 8, 7.5];

//let somaDasNotas = 0;

//for (let i = 0; i < notas.length; i++) {
//    somaDasNotas += notas[i];
//}

//const media = somaDasNotas / notas.length;

//console.log(`A media das notas é tipo ${media}`);


for (let nota of notas){
    //para cada nota de notas

    somaDasNotas += nota;
    console.log(nota);
    console.log(somaDasNotas);

}