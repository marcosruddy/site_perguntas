const mysql = require("mysql2");

const conexao = mysql.createConnection({

host: "127.0.0.1",
user: "root",
password: "123root",
database: "jogo_site",
port: 3306

});

conexao.connect(function(err){

if(err){
console.log("Erro ao conectar com banco");
return;
}

console.log("Banco conectado com sucesso");

});

module.exports = conexao;