-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */
create database banco_biomax;
use banco_biomax;

create table clientes ( id_cliente int primary key auto_increment,
nome_cliente varchar(45),
telefone char(12),
endereço varchar(100),
email_cliente varchar(45),
senha char(8)) auto_increment = 1;

create table pedidos ( id_pedido int primary key auto_increment, 
data_pedido datetime,
total_pedido double,
fkcliente int,
foreign key (fkcliente) references clientes (id_cliente)) auto_increment = 200;

create table produtos ( id_produto int primary key auto_increment,
titulo_produto varchar(70),
descrição_produto text) auto_increment = 1000;

create table pedido_produto ( preço_produto double,
quantidade int,
preço_total double,
fkpedido int,
fkproduto int,
primary key (fkpedido,fkproduto),
foreign key (fkpedido) references pedidos (id_pedido),
foreign key (fkproduto) references produtos (id_produto));


