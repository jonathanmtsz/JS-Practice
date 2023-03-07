//var é um tipo muito solto, pode ser declarada em qualquer lugar e/ou ponto
//porque o JS carrega todas as variaveis do tipo VAR primeiro quando inicia o programa
//isso pode causar complicaçoes como usar o mesmo nome em mais de um lugar e nao perceber

// var altura = 5;
// var comprim = 7;

// area = comprim * altura;
// console.log(area)
// var area;

//por exemplo aqui, a variavel area foi usada antes de ser declarada, e nao tendo valor nenhum
///////////////////////////////

// let é mais solta, permitindo reatribuiçoes em alguns pontos
// let tem q ser declarada incialmente, ou antes do bloco que vai usar ela
// let forma = "retangulo";
// let altura = 5;
// let comprim = 7;
// let area;

// if (forma === "retangulo") {
//     area = altura * comprim;
// } else {
//     area = (altura * comprim) / 2;
// }

// console.log(area);

//const = constante
// uma vez no programa, nao pode ser alterada
// impede que alguem insira algo que mude a variavel de algo 
//que está sendo trabalhado, protegendo o fluxo de trabalho

const forma = "retangulo"
const altura = 5;
let area;
// mas nessa caso, area nao deve ser uma const, 
//porque se voce vai mudar e precisar reatribuir muitas vezes a variavel, nao faz sentido, ela ser um const.
    if (forma === "quadrado") {
        area = altura * comprimento;
    } else {
        area = (altura * comprimento) /2;
    }