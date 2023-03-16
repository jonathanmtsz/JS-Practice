const clientes = require("./clientes.json");
function encontrar (lista, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "23789892634");


console.log(encontrado2)