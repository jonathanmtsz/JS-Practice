const dados = require("./cliente.json");

console.log(dados)

console.log(typeof dados)

const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)
//stringificando um objeto

const objetoCliente = JSON.parse(clienteEmString)

console.log(objetoCliente)