function inserirPedido (data_pedido,total_pedido,fkcliente) {
    var instrucao = `
    insert into pedidos (data_pedido,total_pedido,fkcliente) values ('${data_pedido}','${total_pedido}','${fkcliente}')
    `;
    return database.executar(instrucao);
}

