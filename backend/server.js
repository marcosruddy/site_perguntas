const express = require("express");
const cors = require("cors");

const conexao = require("./database/conexao");

const app = express();

app.use(cors());
app.use(express.json());




app.post("/criarConta", (req,res) =>{

    const {nome, senha} = requestAnimationFrame.body;

    const sql = "INSERT INTO usuario (nome, senha) VALUES (?, ?)";

    conexao.query(sql,[nome,senha], (erro,resultado) => {

        if(erro){
            res.send("ERRO AO CADASTRAR");
            return;
        }
        res.send("CONTA CRIADA COM SUCESSO");

    });
});


app.listen(3000, () => {
    console.log("Servidor rodando  na porta 3000");
});