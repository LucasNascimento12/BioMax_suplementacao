var database = require("../database/config");

function cadastrar(nome_cliente, telefone, endereço, email_cliente, senha) {
    var instrucao = `
    insert into clientes (nome_cliente,telefone,endereço,email_cliente,senha) values ('${nome_cliente}','${telefone}','${endereço}', '${email_cliente}', '${senha}')
    `;
    return database.executar(instrucao);
}

function login(email, senha) {
    var instrucao = `
        SELECT * FROM clientes WHERE email_cliente = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}

module.exports = {
    login,
    cadastrar
}