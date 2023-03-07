//const salasJS = ["nome1", "nome2", "bine"];
//const salasPyth = ["phy", "thon", "eita"];

//const salasUniao = salasJS.concat(salasPyth);

//console.log(salasUniao);

//

const alunos = ["jão", "ju", "ana"];
const medias = [10, 20, 10];

const listaDeAlunosEMedias = [alunos, medias];

function exbirNomeNota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];
        const [alunos, medias] = listaDeAlunosEMedias;
        // essa linha equivale as duas de cima

        const indice = alunos.indexOf(aluno);
        //essa linha acha o NUMERO do indice que contem o numero do Aluno

        const mediaDoAluno = medias[indice];
        //essa linha usa o indice para localizar a nota

        console.log(`${aluno} tem a media de ${mediaDoAluno}`);
    } else {

        console.log("tem nada aqui nao");
    }
}

exbirNomeNota("jonat");
exbirNomeNota("jão");